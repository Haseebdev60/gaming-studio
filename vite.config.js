import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
    // Ensure assets are correctly referenced
    assetsDir: 'assets',
    // Add asset inlining threshold to reduce requests
    assetsInlineLimit: 4096
  },
  // Optimize server settings for Vercel
  server: {
    port: 3000,
    strictPort: true
  }
})
