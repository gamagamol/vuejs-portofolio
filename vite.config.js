import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/vuejs-portofolio/', 
  plugins: [vue(),tailwindcss()],
})
