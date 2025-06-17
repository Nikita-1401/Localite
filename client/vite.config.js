import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // Load .env variables

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // Your deployed backend URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '') // Optional: remove `/api` prefix
        }
      }
    }
  }
})