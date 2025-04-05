import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
})
