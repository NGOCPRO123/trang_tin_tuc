# Hướng dẫn cấu hình EmailJS

## Bước 1: Đăng ký tài khoản EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Email Service
1. Vào Dashboard > Email Services
2. Click "Add New Service"
3. Chọn "Gmail" hoặc "Outlook"
4. Đăng nhập với tài khoản email của bạn (phamleducngoc123@gmail.com)
5. Lưu lại Service ID

## Bước 3: Tạo Email Template
1. Vào Dashboard > Email Templates
2. Click "Create New Template"
3. Đặt tên template (ví dụ: "Contact Form")
4. Thiết kế template với các biến:
   ```
   Từ: {{from_name}} ({{from_email}})
   Chủ đề: {{subject}}
   Nội dung: {{message}}
   ```
5. Lưu lại Template ID

## Bước 4: Lấy Public Key
1. Vào Dashboard > Account > API Keys
2. Copy Public Key

## Bước 5: Cập nhật code
Thay thế các giá trị sau trong file `components/pages/contact-page.tsx`:

```typescript
// Dòng 25: Thay YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY")

// Dòng 47-49: Thay YOUR_SERVICE_ID và YOUR_TEMPLATE_ID
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams
)
```

## Ví dụ template HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Tin nhắn liên hệ mới</title>
</head>
<body>
    <h2>Tin nhắn liên hệ từ website</h2>
    <p><strong>Người gửi:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Chủ đề:</strong> {{subject}}</p>
    <p><strong>Nội dung:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><small>Tin nhắn này được gửi từ form liên hệ website.</small></p>
</body>
</html>
```

## Lưu ý:
- Tài khoản miễn phí EmailJS cho phép 200 email/tháng
- Đảm bảo email service được kết nối đúng
- Test template trước khi sử dụng
- Có thể tùy chỉnh template theo ý muốn 