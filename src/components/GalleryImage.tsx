import ResponsiveImage from "./ResponsiveImage"

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function GalleryImage({ src, alt, className, onClick }: GalleryImageProps) {
  // Tạo responsive image cho gallery
  const ResponsiveGalleryImage = () => {
    // Vì chúng ta chưa có imagetools setup hoàn chỉnh, tạm thời dùng img thường với lazy loading
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
      />
    )
  }

  return <ResponsiveGalleryImage />
}
