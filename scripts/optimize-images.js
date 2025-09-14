import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Cấu hình
const INPUT_DIR = 'src/assets';
const OUTPUT_DIR = 'src/assets/optimized';
const QUALITY = 85; // Chất lượng WebP (0-100)
const MAX_WIDTH = 1920; // Chiều rộng tối đa

// Tạo thư mục output nếu chưa có
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Hàm kiểm tra xem file có phải là ảnh không
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Hàm tối ưu ảnh bằng sharp
async function optimizeImage(inputPath, outputPath) {
  try {
    const sharp = await import('sharp');
    
    await sharp.default(inputPath)
      .resize(MAX_WIDTH, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // Mức độ nén (0-6)
      })
      .toFile(outputPath);
    
    console.log(`✅ Tối ưu: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Lỗi tối ưu ${inputPath}:`, error.message);
  }
}

// Hàm tối ưu ảnh bằng ImageMagick (fallback)
function optimizeImageWithImageMagick(inputPath, outputPath) {
  try {
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    execSync(`magick "${inputPath}" -resize ${MAX_WIDTH}x -quality ${QUALITY} "${outputPath}"`, {
      stdio: 'inherit'
    });
    
    console.log(`✅ Tối ưu: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Lỗi tối ưu ${inputPath}:`, error.message);
  }
}

// Hàm chính
async function optimizeImages() {
  console.log('🚀 Bắt đầu tối ưu ảnh...\n');
  
  // Đọc tất cả file trong thư mục assets
  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(isImageFile);
  
  if (imageFiles.length === 0) {
    console.log('❌ Không tìm thấy ảnh nào trong thư mục assets');
    return;
  }
  
  console.log(`📁 Tìm thấy ${imageFiles.length} ảnh cần tối ưu:\n`);
  
  // Kiểm tra xem có sharp không
  let useSharp = false;
  try {
    await import('sharp');
    useSharp = true;
    console.log('📦 Sử dụng Sharp để tối ưu ảnh...\n');
  } catch (error) {
    console.log('📦 Sharp không có sẵn, thử sử dụng ImageMagick...\n');
  }
  
  // Force sử dụng Sharp nếu đã cài đặt
  if (!useSharp) {
    console.log('🔧 Thử cài đặt Sharp...');
    try {
      execSync('npm install sharp', { stdio: 'inherit' });
      useSharp = true;
      console.log('✅ Sharp đã được cài đặt và sẵn sàng sử dụng!\n');
    } catch (error) {
      console.log('❌ Không thể cài đặt Sharp, sử dụng ImageMagick...\n');
    }
  }
  
  // Tối ưu từng ảnh
  for (const filename of imageFiles) {
    const inputPath = path.join(INPUT_DIR, filename);
    const nameWithoutExt = path.parse(filename).name;
    const outputPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
    
    if (useSharp) {
      await optimizeImage(inputPath, outputPath);
    } else {
      optimizeImageWithImageMagick(inputPath, outputPath);
    }
  }
  
  console.log('\n🎉 Hoàn thành tối ưu ảnh!');
  console.log(`📂 Ảnh đã tối ưu được lưu trong: ${OUTPUT_DIR}`);
}

// Chạy script
optimizeImages().catch(console.error); 