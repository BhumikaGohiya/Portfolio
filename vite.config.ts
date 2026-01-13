import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration
export default defineConfig({
  plugins: [react()],

  // Allow "@/..." imports (instead of long relative paths)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Build settings (GitHub Pages requires /docs folder)
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },

  // Server config - port 8080 required for Lovable preview
  server: {
    port: 8080,
  },
})
