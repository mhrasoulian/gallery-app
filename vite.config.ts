import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      'API_URL': 'https://frontend-gallery.darkube.app/api'
    }
  }
})
