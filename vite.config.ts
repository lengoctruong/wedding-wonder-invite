import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // imagetools(),
    // ViteImageOptimizer({
    //   includePublic: true,
    //   test: /\.(jpe?g|png|webp|avif)$/i,
    //   jpg: { quality: 68, progressive: true },
    //   jpeg: { quality: 68, progressive: true },
    //   png: { quality: 70 },
    //   webp: { quality: 68 },
    //   avif: { quality: 48 },
    //   log: true
    // }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
