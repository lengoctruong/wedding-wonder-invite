import { execSync } from 'child_process';

console.log('🚀 Cài đặt dependencies cho tối ưu ảnh...\n');

try {
  // Cài đặt Sharp
  console.log('📦 Đang cài đặt Sharp...');
  execSync('npm install sharp', { stdio: 'inherit' });
  console.log('✅ Sharp đã được cài đặt thành công!\n');
  
  console.log('🎉 Tất cả dependencies đã được cài đặt!');
  console.log('📝 Bây giờ bạn có thể chạy: npm run optimize-images');
  
} catch (error) {
  console.error('❌ Lỗi cài đặt Sharp:', error.message);
  console.log('\n🔧 Thử cài đặt thủ công:');
  console.log('npm install sharp');
} 