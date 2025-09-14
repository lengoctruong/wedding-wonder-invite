# Share Debug Guide

## 🔍 Debug Link Preview

### Facebook Sharing Debugger
Dùng Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/?q=https://lengoctruong.github.io/wedding-wonder-invite/

Nhấn **Scrape Again** sau khi deploy.

### Twitter Card Validator
https://cards-dev.twitter.com/validator

### LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/

## 🔄 Bypass Cache

Nếu từng share trước khi thêm OG, hãy share link có `?v=<7-chars-commit>` (nút Copy link sẽ tự thêm).

### Kiểm tra meta bằng command line:
```bash
curl -A "facebookexternalhit/1.1" -s https://lengoctruong.github.io/wedding-wonder-invite/ | grep -i "og:image"
```

### Kiểm tra ảnh accessible:
```bash
curl -I https://lengoctruong.github.io/wedding-wonder-invite/og-cover.jpg
```

## 🚀 Cách sử dụng versioned share link

Trong code React, import và sử dụng:
```typescript
import { getShareUrl } from "@/lib/share";

const url = getShareUrl();
// copy to clipboard / share
```

## 📱 Test trên các platform

1. **Facebook**: Share trên timeline và group
2. **Zalo**: Share trong group và chat riêng
3. **Telegram**: Share trong group và chat riêng
4. **WhatsApp**: Share trong group và chat riêng
5. **Discord**: Share trong server

## ⚠️ Lưu ý

- Cache có thể mất 5-30 phút để clear
- Mỗi lần deploy sẽ có build_id mới
- URL versioned sẽ force platform rescrape
