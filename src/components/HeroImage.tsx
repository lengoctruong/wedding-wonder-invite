// Tạm thời dùng img thường vì imagetools chưa được cài đặt
import heroImage from "@/assets/optimized/VHH_9921.jpg";

export default function HeroImage() {
  return (
    <img
      src={heroImage}
      alt="Wedding cover"
      className="w-full h-auto object-cover"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
  )
}
