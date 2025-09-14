import fs from 'fs';
import path from 'path';

// Cấu hình
const INPUT_DIR = 'src/assets';
const OUTPUT_DIR = 'src/assets/optimized';
const QUALITY = 85; // Chất lượng JPG (0-100)
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

// Hàm tạo script batch để tối ưu ảnh
function createBatchScript() {
  console.log('🚀 Tạo script tối ưu ảnh...\n');
  
  // Đọc tất cả file trong thư mục assets
  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(isImageFile);
  
  if (imageFiles.length === 0) {
    console.log('❌ Không tìm thấy ảnh nào trong thư mục assets');
    return;
  }
  
  console.log(`📁 Tìm thấy ${imageFiles.length} ảnh cần tối ưu:\n`);
  
  // Tạo batch script cho Windows
  let batchContent = '@echo off\n';
  batchContent += 'echo 🚀 Bắt đầu tối ưu ảnh...\n\n';
  
  // Tạo PowerShell script
  let psContent = 'Write-Host "🚀 Bắt đầu tối ưu ảnh..." -ForegroundColor Green\n\n';
  
  for (const filename of imageFiles) {
    const inputPath = path.join(INPUT_DIR, filename);
    const nameWithoutExt = path.parse(filename).name;
    const outputPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
    
    // Thêm lệnh cho batch script
    batchContent += `echo 📸 Đang tối ưu: ${filename}\n`;
    batchContent += `magick "${inputPath}" -resize ${MAX_WIDTH}x -quality ${QUALITY} "${outputPath}"\n`;
    batchContent += `if %errorlevel% equ 0 (\n`;
    batchContent += `    echo ✅ Hoàn thành: ${filename}\n`;
    batchContent += `) else (\n`;
    batchContent += `    echo ❌ Lỗi: ${filename}\n`;
    batchContent += `)\n\n`;
    
    // Thêm lệnh cho PowerShell script
    psContent += `Write-Host "📸 Đang tối ưu: ${filename}" -ForegroundColor Yellow\n`;
    psContent += `try {\n`;
    psContent += `    magick "${inputPath.replace(/\\/g, '/')}" -resize ${MAX_WIDTH}x -quality ${QUALITY} "${outputPath.replace(/\\/g, '/')}"\n`;
    psContent += `    Write-Host "✅ Hoàn thành: ${filename}" -ForegroundColor Green\n`;
    psContent += `} catch {\n`;
    psContent += `    Write-Host "❌ Lỗi: ${filename}" -ForegroundColor Red\n`;
    psContent += `}\n\n`;
  }
  
  batchContent += 'echo 🎉 Hoàn thành tối ưu ảnh!\n';
  batchContent += 'echo 📂 Ảnh đã tối ưu được lưu trong: ' + OUTPUT_DIR + '\n';
  batchContent += 'pause\n';
  
  psContent += 'Write-Host "🎉 Hoàn thành tối ưu ảnh!" -ForegroundColor Green\n';
  psContent += `Write-Host "📂 Ảnh đã tối ưu được lưu trong: ${OUTPUT_DIR}" -ForegroundColor Cyan\n`;
  
  // Lưu batch script
  fs.writeFileSync('optimize-images.bat', batchContent);
  fs.writeFileSync('optimize-images.ps1', psContent);
  
  console.log('✅ Đã tạo các script tối ưu ảnh:');
  console.log('📄 optimize-images.bat (cho Windows Command Prompt)');
  console.log('📄 optimize-images.ps1 (cho PowerShell)');
  console.log('\n📋 Hướng dẫn sử dụng:');
  console.log('1. Cài đặt ImageMagick từ: https://imagemagick.org/');
  console.log('2. Chạy: optimize-images.bat hoặc .\\optimize-images.ps1');
  console.log('3. Hoặc sử dụng online tools:');
  console.log('   - https://squoosh.app/');
  console.log('   - https://tinypng.com/');
  console.log('   - https://convertio.co/jpg-webp/');
  
  // Tạo danh sách ảnh cần tối ưu
  console.log('\n📋 Danh sách ảnh cần tối ưu:');
  let totalSize = 0;
  imageFiles.forEach((file, index) => {
    const stats = fs.statSync(path.join(INPUT_DIR, file));
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    totalSize += parseFloat(sizeInMB);
    console.log(`${index + 1}. ${file} (${sizeInMB} MB)`);
  });
  console.log(`\n📊 Tổng dung lượng: ${totalSize.toFixed(2)} MB`);
  console.log(`🎯 Mục tiêu sau tối ưu: ${(totalSize * 0.3).toFixed(2)} MB (giảm 70%)`);
}

// Chạy script
createBatchScript(); 