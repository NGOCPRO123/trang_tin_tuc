import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("acta");
  const logs = await db.collection("activity_logs")
    .find({})
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray();
  res.status(200).json(logs);
} 