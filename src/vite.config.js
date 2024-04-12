import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { basename } from './src/assets/data/data.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename
})
