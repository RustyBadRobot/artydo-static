import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is set to './' to ensure assets are loaded relatively.
  // This is critical for GitHub Pages which often hosts sites in subdirectories.
  base: './',
  build: {
    outDir: 'dist',
  }
})