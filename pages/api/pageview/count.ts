import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const client = await clientPromise;
  const db = client.db();
  let count = 0;
  if (!path || path === "all") {
    count = await db.collection("pageviews").countDocuments({});
  } else {
    count = await db.collection("pageviews").countDocuments({ path });
  }
  res.status(200).json({ count });
} 