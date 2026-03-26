// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Web-Game/', // <--- ВАЖНО: замените на имя вашего репозитория
  build: {
    outDir: 'dist'
  }
})
