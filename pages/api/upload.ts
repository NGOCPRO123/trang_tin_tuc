import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Cấu hình formidable để không parse body
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const form = formidable({ maxFileSize: 50 * 1024 * 1024 })
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed" })
    }
    const file = files.file?.[0] || files.image?.[0] || files.video?.[0]
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" })
    }
    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        resource_type: "auto", // tự động nhận diện ảnh/video
        folder: "uploads", // tên folder trên Cloudinary
      })
      res.status(200).json({
        success: true,
        url: result.secure_url,
        filename: result.public_id,
        size: result.bytes,
        mimetype: result.resource_type,
      })
    } catch (error) {
      res.status(500).json({ error: "Upload to Cloudinary failed" })
    }
  })
} 