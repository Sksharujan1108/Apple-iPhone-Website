import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      // alias: [{ find: "@", replacement: path.resolve("./src") }],
    },
  },
  server: {
    port: 3000,
    open: true, // Open the Browser Automatically when the server starts
  },
})