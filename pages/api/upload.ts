import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import fs from "fs"
import path from "path"

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

  try {
    const form = formidable({
      uploadDir: path.join(process.cwd(), "public/uploads"),
      keepExtensions: true,
      maxFileSize: 50 * 1024 * 1024, // 50MB
      filter: (part) => {
        // Chỉ cho phép upload ảnh và video
        return part.mimetype?.startsWith("image/") || part.mimetype?.startsWith("video/")
      },
    })

    // Tạo thư mục uploads nếu chưa tồn tại
    const uploadDir = path.join(process.cwd(), "public/uploads")
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) {
        console.error("Upload error:", err)
        return res.status(500).json({ error: "Upload failed" })
      }

      const file = files.file?.[0] || files.image?.[0] || files.video?.[0]
      
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" })
      }

      // Tạo URL công khai cho file
      const fileName = file.newFilename || file.originalFilename
      const fileUrl = `/uploads/${fileName}`

      res.status(200).json({
        success: true,
        url: fileUrl,
        filename: fileName,
        size: file.size,
        mimetype: file.mimetype,
      })
    })
  } catch (error) {
    console.error("Upload error:", error)
    res.status(500).json({ error: "Upload failed" })
  }
} 