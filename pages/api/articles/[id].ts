import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { generateSlug } from "@/lib/utils"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const client = await clientPromise
  const db = client.db()
  const collection = db.collection("acta")

  if (req.method === "PUT") {
    try {
      const { title, summary, content, category, image, video, author, publishedAt, viewCount, tags, keywords, status, slug, featuredImage, altText, metaTitle, metaDescription, canonicalUrl, noIndex, noFollow, ogTitle, ogDescription, ogImage } = req.body;
      const newKeywords = keywords && keywords.length > 0 ? keywords : tags;
      
      // Tạo slug tự động nếu không có
      const finalSlug = slug || generateSlug(title);
      
      const result = await collection.updateOne(
        { _id: new ObjectId(id as string) },
        { $set: { title, summary, content, category, image, video: video || "", author, publishedAt, viewCount, tags, keywords: newKeywords, status, slug: finalSlug, featuredImage, altText, metaTitle, metaDescription, canonicalUrl, noIndex, noFollow, ogTitle, ogDescription, ogImage } }
      )
      if (result.matchedCount === 0) return res.status(404).json({ message: "Not found" })
      return res.status(200).json({ message: "Updated" })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  if (req.method === "PATCH") {
    try {
      // Tìm bài viết theo ID hoặc slug
      let query = {}
      if (ObjectId.isValid(id as string)) {
        query = { _id: new ObjectId(id as string) }
      } else {
        query = { slug: id }
      }
      
      const result = await collection.updateOne(
        query,
        { $inc: { viewCount: 1 } }
      )
      if (result.matchedCount === 0) return res.status(404).json({ message: "Not found" })
      // Ghi log lượt xem vào collection views
      try {
        await db.collection("views").insertOne({
          articleId: ObjectId.isValid(id as string) ? new ObjectId(id as string) : id,
          timestamp: new Date(),
          // Có thể bổ sung userId, ip nếu muốn
        })
      } catch (e) {
        // Không làm gián đoạn nếu log view lỗi
        console.error("Log view error", e)
      }
      return res.status(200).json({ message: "View count incremented" })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  if (req.method === "GET") {
    try {
      // Tìm bài viết theo ID hoặc slug
      let query = {}
      if (ObjectId.isValid(id as string)) {
        query = { _id: new ObjectId(id as string) }
      } else {
        query = { slug: id }
      }
      
      const article = await collection.findOne(query)
      if (!article) return res.status(404).json({ message: "Not found" })
      
      // Trả về article với slug để đảm bảo URL đúng
      return res.status(200).json({
        ...article,
        slug: article.slug || id // Đảm bảo luôn có slug
      })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  if (req.method === "DELETE") {
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(id as string) })
      if (result.deletedCount === 0) return res.status(404).json({ message: "Not found" })
      return res.status(200).json({ message: "Deleted" })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  res.status(405).json({ message: "Method not allowed" })
} 