declare module '*&as=picture' {
  import type { ComponentType, ImgHTMLAttributes } from 'react'
  const component: ComponentType<ImgHTMLAttributes<HTMLImageElement> & { className?: string }>
  export default component
}
