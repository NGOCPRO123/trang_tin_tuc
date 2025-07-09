import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { path } = req.body;
  if (!path) return res.status(400).json({ message: "Missing path" });

  const client = await clientPromise;
  const db = client.db();
  await db.collection("pageviews").insertOne({
    path,
    timestamp: new Date(),
    ip: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || null,
    userAgent: req.headers["user-agent"] || null,
  });

  res.status(200).json({ success: true });
} 