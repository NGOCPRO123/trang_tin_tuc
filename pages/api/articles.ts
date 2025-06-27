import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise
  const db = client.db("acta") // sẽ là 'acta' nếu bạn để đúng tên db trong URI

  if (req.method === "POST") {
    try {
      const { title, summary, content, category, image, author, publishedAt } = req.body;
      const result = await db.collection("acta").insertOne({
        title,
        summary,
        content,
        category,
        image,
        author,
        publishedAt: new Date(publishedAt),
        viewCount: 0,
      });
      res.status(201).json({ _id: result.insertedId, ...req.body, viewCount: 0 });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
    return;
  }

  // GET: trả về toàn bộ bài viết
  const articles = await db.collection("acta").find({}).toArray()
  // Đảm bảo mỗi bài đều có viewCount (nếu thiếu thì gán 0)
  const articlesWithViewCount = articles.map(article => ({ ...article, viewCount: typeof article.viewCount === 'number' ? article.viewCount : 0 }))
  res.status(200).json(articlesWithViewCount)
} 