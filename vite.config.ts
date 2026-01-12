import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ✅ Full Vite configuration for GitHub Pages
export default defineConfig({
  // 👇 The base must exactly match your GitHub repo name
  base: '/Portfolio/',

  plugins: [react()],

  // 👇 Allow "@/..." imports (instead of long relative paths)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 👇 Build settings (GitHub Pages requires /docs folder)
  build: {
    outDir: 'docs', // output folder for GitHub Pages
    emptyOutDir: true, // clean before each build
  },

  // 👇 Optional — ensure correct dev server config (useful for local testing)
  server: {
    port: 5173,
    open: true,
  },
})
