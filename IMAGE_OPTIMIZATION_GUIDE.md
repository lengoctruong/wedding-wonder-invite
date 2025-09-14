# 🖼️ Hướng Dẫn Tối Ưu Ảnh

## 📊 Phân Tích Dung Lượng Hiện Tại

Dự án có **49 ảnh** với tổng dung lượng rất lớn:

### 🚨 Ảnh Nặng Nhất (Cần ưu tiên tối ưu):
- `VHH_8662.jpg` - **21.92 MB** ⚠️
- `VHH_8560.jpg` - **15.98 MB** ⚠️
- `VHH_8874.jpg` - **16.03 MB** ⚠️
- `VHH_8469.jpg` - **15.83 MB** ⚠️
- `VHH_8478.jpg` - **15.28 MB** ⚠️
- `VHH_8912.jpg` - **15.17 MB** ⚠️
- `VHH_9450.jpg` - **15.04 MB** ⚠️
- `VHH_9503.jpg` - **14.90 MB** ⚠️

### 📈 Tổng dung lượng: ~400+ MB → Có thể giảm xuống ~120 MB (70% giảm)

## 🚀 Các Phương Pháp Tối Ưu

### 1. **Sử dụng Online Tools (Khuyến nghị)**

#### A. Squoosh.app (Google)
- **Link:** https://squoosh.app/
- **Ưu điểm:** Miễn phí, không cần cài đặt, hỗ trợ WebP
- **Cách dùng:**
  1. Upload ảnh vào Squoosh
  2. Chọn format WebP
  3. Điều chỉnh quality 85%
  4. Download ảnh đã tối ưu

#### B. TinyPNG
- **Link:** https://tinypng.com/
- **Ưu điểm:** Đơn giản, hiệu quả cao
- **Giới hạn:** 20 ảnh/lần, tối đa 5MB/ảnh

#### C. Convertio
- **Link:** https://convertio.co/jpg-webp/
- **Ưu điểm:** Chuyển đổi JPG → WebP dễ dàng

### 2. **Sử dụng Script Tự Động**

#### A. ImageMagick (Đã tạo sẵn)
```bash
# Cài đặt ImageMagick từ: https://imagemagick.org/
# Sau đó chạy:
optimize-images.bat
# hoặc
.\optimize-images.ps1
```

#### B. Sharp (Cần Node.js 18+)
```bash
# Cài đặt Sharp
npm install sharp

# Chạy script
npm run optimize-images
```

### 3. **Sử dụng Desktop Apps**

#### A. ImageOptim (macOS)
- **Link:** https://imageoptim.com/
- **Ưu điểm:** Drag & drop, tự động tối ưu

#### B. FileOptimizer (Windows)
- **Link:** https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer
- **Ưu điểm:** Hỗ trợ nhiều format

## 📋 Kế Hoạch Tối Ưu

### Phase 1: Ưu tiên ảnh nặng nhất
1. `VHH_8662.jpg` (21.92 MB)
2. `VHH_8560.jpg` (15.98 MB)
3. `VHH_8874.jpg` (16.03 MB)
4. `VHH_8469.jpg` (15.83 MB)

### Phase 2: Ảnh trung bình
5. `VHH_8478.jpg` (15.28 MB)
6. `VHH_8912.jpg` (15.17 MB)
7. `VHH_9450.jpg` (15.04 MB)
8. `VHH_9503.jpg` (14.90 MB)

### Phase 3: Ảnh nhỏ hơn
- Tất cả ảnh còn lại

## 🎯 Mục Tiêu Tối Ưu

| Ảnh gốc | Mục tiêu | Giảm |
|---------|---------|------|
| 21.92 MB | 6.5 MB | 70% |
| 15.98 MB | 4.8 MB | 70% |
| 16.03 MB | 4.8 MB | 70% |
| 15.83 MB | 4.7 MB | 70% |

## 📁 Cấu Trúc Sau Tối Ưu

```
src/assets/
├── original/          # Ảnh gốc (backup)
├── optimized/         # Ảnh đã tối ưu
│   ├── VHH_8662.webp
│   ├── VHH_8560.webp
│   └── ...
└── ...
```

## 🔄 Cập Nhật Import

Sau khi tối ưu, cập nhật import trong code:

```javascript
// Trước
import VHH_8662 from "@/assets/VHH_8662.jpg";

// Sau
import VHH_8662 from "@/assets/optimized/VHH_8662.webp";
```

## ⚡ Lợi Ích Sau Tối Ưu

- ✅ **Giảm 70% dung lượng** (400MB → 120MB)
- ✅ **Tăng tốc độ load** 3-5 lần
- ✅ **Tiết kiệm băng thông** cho người dùng
- ✅ **Cải thiện SEO** (Core Web Vitals)
- ✅ **Trải nghiệm người dùng** tốt hơn

## 🚨 Lưu Ý Quan Trọng

1. **Backup ảnh gốc** trước khi tối ưu
2. **Kiểm tra chất lượng** sau tối ưu
3. **Test trên nhiều thiết bị** để đảm bảo hiển thị tốt
4. **Cập nhật import** trong tất cả components

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra Node.js version (cần 18+ cho Sharp)
2. Cài đặt ImageMagick đúng cách
3. Sử dụng online tools nếu script không hoạt động 