import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    
    // Check if uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      return res.status(200).json({ images: [] })
    }

    // Read all files in uploads directory
    const files = fs.readdirSync(uploadsDir)
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })

    // Get file stats and create image objects
    const images = imageFiles.map(file => {
      const filePath = path.join(uploadsDir, file)
      const stats = fs.statSync(filePath)
      
      return {
        name: file,
        url: `/uploads/${file}`,
        size: stats.size,
        type: `image/${path.extname(file).slice(1)}`,
        lastModified: stats.mtime
      }
    })

    // Sort by last modified date (newest first)
    images.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())

    res.status(200).json({ images })
  } catch (error) {
    console.error('Error reading uploads directory:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
} 