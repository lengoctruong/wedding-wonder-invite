import clsx from "clsx"

// Cách dùng: import Pic from '@/assets/xxx.jpg?as=picture&width=360;720;1080;1440&format=avif;webp;jpg&placeholder=blurred'
// <ResponsiveImage as={Pic} alt="..." className="w-full h-auto" priority />
export default function ResponsiveImage({
  as: Picture,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
}: {
  as: any; alt: string; className?: string; priority?: boolean; sizes?: string;
}) {
  // priority=true cho hero (preload + fetchpriority)
  return (
    <Picture
      alt={alt}
      className={clsx("block", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" as any : undefined}
      sizes={sizes}
    />
  )
}
