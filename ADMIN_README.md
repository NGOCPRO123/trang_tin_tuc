# Hệ thống Quản trị Admin

## Tổng quan
Hệ thống quản trị admin được bảo vệ bằng authentication để tránh việc lộ thông tin nhạy cảm khi truy cập vào trang `/admin`.

## Tính năng

### 🔐 Bảo mật
- **Đăng nhập bắt buộc**: Không thể truy cập trang admin mà không đăng nhập
- **Token-based authentication**: Sử dụng token để duy trì phiên đăng nhập
- **Auto-logout**: Tự động đăng xuất khi token hết hạn hoặc bị xóa

### 📝 Quản lý nội dung
- Tạo bài viết mới
- Chỉnh sửa bài viết hiện có
- Xem danh sách tất cả bài viết
- Tìm kiếm bài viết theo tiêu đề, tóm tắt, tác giả
- Thống kê số lượng bài viết

## Cách sử dụng

### 1. Truy cập trang admin
```
http://localhost:3000/admin
```

### 2. Đăng nhập
Sử dụng thông tin đăng nhập demo:
- **Tên đăng nhập**: `admin`
- **Mật khẩu**: `admin123`

### 3. Quản lý bài viết
Sau khi đăng nhập thành công, bạn có thể:
- Xem thống kê tổng quan
- Tạo bài viết mới bằng nút "Tạo bài viết mới"
- Chỉnh sửa bài viết bằng nút "Chỉnh sửa" trong danh sách
- Tìm kiếm bài viết bằng ô tìm kiếm

### 4. Đăng xuất
Nhấn nút "Đăng xuất" ở góc trên bên phải để thoát khỏi hệ thống.

## Cấu trúc code

### Components
- `contexts/auth-context.tsx`: Quản lý trạng thái đăng nhập
- `components/admin/login-form.tsx`: Form đăng nhập
- `components/admin/protected-admin.tsx`: Component bảo vệ route
- `components/pages/admin-page.tsx`: Trang quản trị chính

### API Routes
- `pages/api/auth/login.ts`: API xử lý đăng nhập

## Bảo mật

### Hiện tại (Demo)
- Thông tin đăng nhập cố định trong code
- Token đơn giản được lưu trong localStorage

### Cải thiện cho production
1. **Database**: Lưu thông tin user trong database
2. **Password hashing**: Mã hóa mật khẩu bằng bcrypt
3. **JWT**: Sử dụng JWT thay vì token đơn giản
4. **Session management**: Quản lý phiên đăng nhập tốt hơn
5. **Rate limiting**: Giới hạn số lần đăng nhập thất bại
6. **HTTPS**: Sử dụng HTTPS trong production
7. **Environment variables**: Lưu thông tin nhạy cảm trong .env

## Tùy chỉnh

### Thay đổi thông tin đăng nhập
1. Cập nhật logic trong `pages/api/auth/login.ts`
2. Thay đổi thông tin hiển thị trong `components/admin/login-form.tsx`

### Thêm tính năng mới
1. Tạo component mới trong `components/admin/`
2. Thêm vào `components/pages/admin-page.tsx`
3. Tạo API route tương ứng trong `pages/api/`

## Troubleshooting

### Không thể đăng nhập
- Kiểm tra thông tin đăng nhập
- Xóa localStorage và thử lại
- Kiểm tra console để xem lỗi

### Trang admin không load
- Kiểm tra server có đang chạy không
- Kiểm tra console để xem lỗi
- Đảm bảo tất cả dependencies đã được cài đặt 