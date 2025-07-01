import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const client = await clientPromise
  const db = client.db()
  const collection = db.collection("acta")

  if (req.method === "PUT") {
    try {
      const { title, summary, content, category, image, video, author, publishedAt, viewCount, tags, keywords, status, slug, featuredImage, altText, metaTitle, metaDescription, canonicalUrl, noIndex, noFollow, ogTitle, ogDescription, ogImage } = req.body;
      const newKeywords = keywords && keywords.length > 0 ? keywords : tags;
      const result = await collection.updateOne(
        { _id: new ObjectId(id as string) },
        { $set: { title, summary, content, category, image, video: video || "", author, publishedAt, viewCount, tags, keywords: newKeywords, status, slug, featuredImage, altText, metaTitle, metaDescription, canonicalUrl, noIndex, noFollow, ogTitle, ogDescription, ogImage } }
      )
      if (result.matchedCount === 0) return res.status(404).json({ message: "Not found" })
      return res.status(200).json({ message: "Updated" })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  if (req.method === "PATCH") {
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(id as string) },
        { $inc: { viewCount: 1 } }
      )
      if (result.matchedCount === 0) return res.status(404).json({ message: "Not found" })
      return res.status(200).json({ message: "View count incremented" })
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }

  if (req.method === "GET") {
    const article = await collection.findOne({ _id: new ObjectId(id as string) })
    if (!article) return res.status(404).json({ message: "Not found" })
    return res.status(200).json(article)
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