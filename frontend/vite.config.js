import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcon
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwin],
=======
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
>>>>>>> ffb93402782646e355369f9f134bfc20b2e98fc3
})
