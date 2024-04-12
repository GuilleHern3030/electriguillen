import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { url as basename } from './src/assets/data/data.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename
})
