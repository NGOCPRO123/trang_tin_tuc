# Hướng dẫn sử dụng tính năng Mục lục (Table of Contents)

## Tổng quan
Tính năng mục lục tự động đã được tích hợp vào hệ thống đăng bài viết, giúp tạo ra mục lục tự động từ các tiêu đề (H1, H2, H3, H4, H5, H6) trong nội dung bài viết.

## Các tính năng chính

### 1. Tạo mục lục tự động
- **Vị trí**: Trong form đăng bài viết, sidebar bên phải
- **Cách hoạt động**: Tự động phân tích các tiêu đề trong nội dung và tạo mục lục
- **Hỗ trợ**: H1, H2, H3, H4, H5, H6

### 2. Xem trước mục lục
- **Component**: `TableOfContents`
- **Tính năng**:
  - Hiển thị danh sách các tiêu đề với cấp độ
  - Thống kê số lượng tiêu đề theo cấp độ
  - Sao chép HTML mục lục
  - Ẩn/hiện mục lục

### 3. Chèn mục lục vào bài viết
- **Component**: `TocInserter`
- **Tính năng**:
  - Tự động chèn mục lục vào đầu bài viết
  - Sao chép HTML mục lục để sử dụng thủ công
  - Xem trước 5 tiêu đề đầu tiên

### 4. Mục lục trong bài viết đã xuất bản
- **Component**: `ArticleToc`
- **Tính năng**:
  - Hiển thị mục lục bên cạnh nội dung
  - Highlight tiêu đề đang xem
  - Click để scroll đến tiêu đề
  - Responsive design

## Cách sử dụng

### Bước 1: Tạo tiêu đề trong trình soạn thảo
1. Mở form đăng bài viết
2. Trong trình soạn thảo, sử dụng các nút H1, H2, H3, H4, H5, H6
3. Viết nội dung tiêu đề

### Bước 2: Xem mục lục
1. Mục lục sẽ tự động xuất hiện trong sidebar bên phải
2. Xem thống kê số lượng tiêu đề theo cấp độ
3. Có thể ẩn/hiện mục lục

### Bước 3: Chèn mục lục vào bài viết
1. Sử dụng component "Chèn mục lục" trong sidebar
2. Click "Chèn vào bài viết" để tự động chèn
3. Hoặc sao chép HTML để chèn thủ công

### Bước 4: Tùy chỉnh mục lục
- **Thay đổi vị trí**: Di chuyển HTML mục lục trong nội dung
- **Tùy chỉnh style**: Chỉnh sửa CSS trong file `styles/toc.css`
- **Responsive**: Mục lục tự động điều chỉnh trên mobile

## Cấu trúc HTML mục lục

```html
<div class="table-of-contents">
  <h3 class="toc-title">Mục lục</h3>
  <ul class="toc-list">
    <li class="toc-item toc-level-1">
      <a href="#heading-1" class="toc-link">Tiêu đề 1</a>
    </li>
    <li class="toc-item toc-level-2">
      <a href="#heading-2" class="toc-link">Tiêu đề 2</a>
    </li>
  </ul>
</div>
```

## CSS Classes

### Container
- `.table-of-contents`: Container chính
- `.toc-title`: Tiêu đề mục lục
- `.toc-list`: Danh sách mục lục

### Items
- `.toc-item`: Item mục lục
- `.toc-level-1` đến `.toc-level-6`: Cấp độ tiêu đề
- `.toc-link`: Link trong mục lục

## Tùy chỉnh

### Thay đổi style
Chỉnh sửa file `styles/toc.css`:

```css
.table-of-contents {
  /* Thay đổi background, border, padding */
}

.toc-link {
  /* Thay đổi màu sắc, font-size */
}

.toc-level-1 {
  /* Tùy chỉnh style cho H1 */
}
```

### Thêm tính năng mới
1. Tạo component mới trong `components/admin/`
2. Import vào `admin-article-form.tsx`
3. Thêm vào sidebar

## Lưu ý

1. **ID tự động**: Các tiêu đề sẽ được gán ID tự động
2. **Responsive**: Mục lục tự động điều chỉnh trên mobile
3. **Performance**: Mục lục được tạo client-side để tối ưu tốc độ
4. **Accessibility**: Hỗ trợ keyboard navigation và screen readers

## Troubleshooting

### Mục lục không hiển thị
- Kiểm tra xem có tiêu đề nào trong nội dung không
- Đảm bảo tiêu đề được tạo bằng nút H1-H6

### Link không hoạt động
- Kiểm tra ID của tiêu đề có đúng không
- Đảm bảo không có ký tự đặc biệt trong ID

### Style không đúng
- Kiểm tra file CSS đã được import chưa
- Clear cache browser nếu cần

## Tương lai

- [ ] Thêm animation cho mục lục
- [ ] Hỗ trợ mục lục lồng nhau
- [ ] Export mục lục ra PDF
- [ ] Tích hợp với plugin SEO 