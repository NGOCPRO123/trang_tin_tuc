# Hướng dẫn sử dụng Loading Components

## Tổng quan

Website của bạn đã được cập nhật với các component loading hiện đại và đẹp mắt. Các component này giúp cải thiện trải nghiệm người dùng khi trang web đang tải dữ liệu.

## Các Component Loading

### 1. Loading Component Cơ bản

```tsx
import { Loading } from "@/components/ui/loading"

// Sử dụng cơ bản
<Loading />

// Với text tùy chỉnh
<Loading text="Đang tải dữ liệu..." />

// Các biến thể khác nhau
<Loading variant="spinner" />
<Loading variant="dots" />
<Loading variant="pulse" />
<Loading variant="wave" />

// Các kích thước
<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />
<Loading size="xl" />
```

### 2. LoadingPage Component

Dùng cho loading toàn trang:

```tsx
import { LoadingPage } from "@/components/ui/loading"

// Sử dụng cơ bản
<LoadingPage />

// Với tùy chỉnh
<LoadingPage 
  title="Đang tải trang..."
  subtitle="Vui lòng chờ trong giây lát"
  variant="card"
/>

// Các biến thể
<LoadingPage variant="default" />
<LoadingPage variant="minimal" />
<LoadingPage variant="card" />
```

### 3. LoadingSection Component

Dùng cho loading một phần trang:

```tsx
import { LoadingSection } from "@/components/ui/loading"

// Sử dụng cơ bản
<LoadingSection />

// Với chiều cao tùy chỉnh
<LoadingSection height="h-64" />
```

## Cách sử dụng trong các trang

### Trang Admin
```tsx
// Trong app/admin/layout.tsx
if (isLoading) {
  return (
    <LoadingPage 
      title="Đang kiểm tra đăng nhập..."
      subtitle="Vui lòng chờ trong giây lát"
      variant="card"
    />
  );
}
```

### Trang Home
```tsx
// Trong components/pages/home-page.tsx
if (isLoading) {
  return <LoadingPage 
    title="Đang tải dữ liệu..." 
    subtitle="Vui lòng chờ trong giây lát" 
    variant="minimal" 
  />;
}
```

### Trang Article Detail
```tsx
// Trong components/pages/article-detail-page.tsx
if (isLoading) {
  return <LoadingPage 
    title="Đang tải bài viết..." 
    subtitle="Vui lòng chờ trong giây lát" 
    variant="minimal" 
  />;
}
```

### Form Loading
```tsx
// Trong form components
<Button disabled={isLoading}>
  {isLoading ? (
    <div className="flex items-center gap-2">
      <Loading size="sm" variant="spinner" className="text-white" />
      Đang xử lý...
    </div>
  ) : (
    "Gửi"
  )}
</Button>
```

## Các tính năng

### 1. Animation mượt mà
- Sử dụng CSS animations và Framer Motion
- Hiệu ứng fade in/out mượt mà
- Animation cho các phần tử con

### 2. Responsive Design
- Tự động điều chỉnh theo kích thước màn hình
- Hiển thị tốt trên mobile và desktop

### 3. Tùy chỉnh dễ dàng
- Props linh hoạt cho title, subtitle
- Nhiều biến thể khác nhau
- Có thể tùy chỉnh màu sắc và kích thước

### 4. Accessibility
- Hỗ trợ screen readers
- Keyboard navigation
- ARIA labels

## Demo Component

Để xem demo các component loading, bạn có thể sử dụng:

```tsx
import { LoadingDemo } from "@/components/ui/loading-demo"

// Trong trang demo
<LoadingDemo />
```

## Cập nhật đã thực hiện

1. ✅ Tạo component `Loading` với nhiều biến thể
2. ✅ Tạo component `LoadingPage` cho loading toàn trang
3. ✅ Tạo component `LoadingSection` cho loading section
4. ✅ Cập nhật trang admin layout
5. ✅ Cập nhật trang home page
6. ✅ Cập nhật trang category page
7. ✅ Cập nhật trang article detail page
8. ✅ Cập nhật form đăng nhập
9. ✅ Cập nhật form liên hệ
10. ✅ Cập nhật trang 404 với animation
11. ✅ Tạo demo component
12. ✅ Tạo hướng dẫn sử dụng

## Lợi ích

- **UX tốt hơn**: Người dùng biết trang đang tải
- **Chuyên nghiệp**: Giao diện loading đẹp và hiện đại
- **Nhất quán**: Sử dụng cùng style loading trên toàn bộ website
- **Linh hoạt**: Dễ dàng tùy chỉnh cho từng trường hợp cụ thể
- **Performance**: Loading components nhẹ và tối ưu

## Tips sử dụng

1. **LoadingPage**: Dùng cho loading toàn trang (trang admin, trang chính)
2. **LoadingSection**: Dùng cho loading một phần nội dung
3. **Loading**: Dùng cho loading nhỏ (buttons, forms)
4. **Variant "minimal"**: Dùng cho loading nhanh, không cần thông tin chi tiết
5. **Variant "card"**: Dùng cho loading có thông tin chi tiết
6. **Variant "default"**: Dùng cho loading trang chính

## Tùy chỉnh thêm

Bạn có thể tùy chỉnh thêm bằng cách:

1. Thay đổi màu sắc trong `components/ui/loading.tsx`
2. Thêm animation mới
3. Tạo variant mới
4. Tùy chỉnh text và icon

```tsx
// Ví dụ tùy chỉnh màu
<Loading className="text-green-500" />
<LoadingPage className="bg-green-50" />
``` 