import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH to your repository name, e.g. /my-romantic-story/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts' },
})
