import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("acta");
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24h gần nhất
  const count = await db.collection("users").countDocuments({ lastActiveAt: { $gte: since } });
  res.status(200).json({ activeUsers: count });
} 