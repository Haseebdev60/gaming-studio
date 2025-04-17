import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
    // Ensure assets are correctly referenced
    assetsDir: 'assets',
    // Add asset inlining threshold to reduce requests
    assetsInlineLimit: 4096,
    // Improve chunk loading strategy
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          styles: ['styled-components'],
          animations: ['framer-motion']
        }
      }
    }
  },
  // Optimize server settings for Vercel
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})
