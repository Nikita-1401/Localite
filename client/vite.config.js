import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Add proxy for backend API requests
  server: {
    proxy: {
      '/api': {
        // target: 'https://localite-zi01.onrender.com',
        target:"https://localhost:5000",
        changeOrigin: true,
      }
    }
  }
})