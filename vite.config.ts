import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DCS_EDPS/',
  plugins: [react()],
})