import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [
      react(),
    ],
    server: {
      open: 'http://localhost:5173',
      host: '0.0.0.0',
    },
  }
})
