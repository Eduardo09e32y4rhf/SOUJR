// defineConfig oferece tipagem e validação da configuração do Vite.
import { defineConfig } from 'vite'
// Plugin que permite ao Vite compilar JSX e atualizar a tela durante o desenvolvimento.
import react from '@vitejs/plugin-react'
// Integra o Tailwind CSS diretamente ao pipeline de build do Vite.
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Esses plugins são necessários para React e Tailwind funcionarem juntos.
  plugins: [react(), tailwindcss()],
})