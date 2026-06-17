import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/careers': {
        target: 'https://script.google.com/macros/s/AKfycbwwEmsm11wXcFMHvJ_w1LQsKzS3-0TxVI8E9zvhTl0T_86iGg01KqBQQEmHr1PDn1GJ/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/careers/, ''),
      },
    },
  },
})
