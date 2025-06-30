import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { username, password } = req.body

    // Trong thực tế, bạn sẽ kiểm tra với database
    // Đây là demo với thông tin đăng nhập cố định
    if (username === 'admin' && password === 'admin123') {
      // Tạo token (trong thực tế sẽ sử dụng JWT)
      const token = `demo_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      return res.status(200).json({
        success: true,
        token,
        user: {
          username: 'admin',
          role: 'admin'
        }
      })
    } else {
      return res.status(401).json({
        success: false,
        message: 'Tên đăng nhập hoặc mật khẩu không đúng'
      })
    }
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra, vui lòng thử lại'
    })
  }
} 