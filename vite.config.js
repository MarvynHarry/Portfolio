import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Los logos van como archivos aparte: si están ocultos, móvil no los descarga
  build: { assetsInlineLimit: 0 }
})
