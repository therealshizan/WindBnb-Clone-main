import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser', // This is the default and uses Terser for minification
  },
  plugins: [react()],
})
