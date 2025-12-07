import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: './', // Use relative paths for assets to ensure it works on custom repo paths
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})