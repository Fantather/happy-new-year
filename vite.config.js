import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Замени 'repo-name' на название твоего репозитория на GitHub (например, 'happy-new-year')
  base: '/happy-new-year/', 
})