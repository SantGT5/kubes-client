import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { babelrc: true } })],
  server:{
    host: '0.0.0.0',
    port: 5173
  }
})
