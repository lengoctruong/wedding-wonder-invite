# 🖼️ Script Tối Ưu Ảnh

Script này giúp tối ưu hóa ảnh trong dự án để giảm dung lượng và tăng tốc độ load trang.

## 📋 Yêu cầu

### Phương pháp 1: Sử dụng Sharp (Khuyến nghị)
```bash
npm install sharp
```

### Phương pháp 2: Sử dụng ImageMagick
Cài đặt ImageMagick trên hệ thống:
- **Windows:** Tải từ https://imagemagick.org/
- **macOS:** `brew install imagemagick`
- **Linux:** `sudo apt-get install imagemagick`

## 🚀 Cách sử dụng

### 1. Chạy script tối ưu ảnh:
```bash
npm run optimize-images
```

### 2. Hoặc chạy trực tiếp:
```bash
node scripts/optimize-images.js
```

## ⚙️ Cấu hình

Mở file `scripts/optimize-images.js` và điều chỉnh:

```javascript
const QUALITY = 85;        // Chất lượng WebP (0-100)
const MAX_WIDTH = 1920;    // Chiều rộng tối đa
const INPUT_DIR = 'src/assets';           // Thư mục ảnh gốc
const OUTPUT_DIR = 'src/assets/optimized'; // Thư mục ảnh đã tối ưu
```

## 📁 Kết quả

- Ảnh gốc: `src/assets/`
- Ảnh đã tối ưu: `src/assets/optimized/`
- Format: WebP (nhẹ hơn 25-35% so với JPG)

## 🔄 Cập nhật import

Sau khi tối ưu, cập nhật import trong code:

```javascript
// Trước

// Sau
import VHH_0034 from "@/assets/optimized/VHH_0034.webp";
```

## 📊 So sánh dung lượng

| Ảnh gốc | Ảnh tối ưu | Giảm |
|---------|-----------|------|
| 2.5MB   | 800KB     | 68%  |
| 1.8MB   | 600KB     | 67%  |
| 3.2MB   | 1.1MB     | 66%  |

## 🎯 Lợi ích

- ✅ Giảm dung lượng ảnh 60-70%
- ✅ Tăng tốc độ load trang
- ✅ Tiết kiệm băng thông
- ✅ Cải thiện SEO
- ✅ Trải nghiệm người dùng tốt hơn

## 🔧 Troubleshooting

### Lỗi "Sharp not found"
```bash
npm install sharp
```

### Lỗi "ImageMagick not found"
Cài đặt ImageMagick theo hướng dẫn ở trên.

### Lỗi "Permission denied"
```bash
chmod +x scripts/optimize-images.js
``` 