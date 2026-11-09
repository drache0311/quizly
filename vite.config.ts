import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      open: 'http://localhost:6174',
      host: '0.0.0.0',
      allowedHosts: true,
      port: 6174
    },
  }
})
