// StrictMode ajuda a identificar problemas comuns durante o desenvolvimento.
import { StrictMode } from 'react'
// createRoot cria a raiz moderna usada para renderizar componentes React.
import { createRoot } from 'react-dom/client'
// App contém a interface principal da página.
import App from './App.jsx'
// Carrega o Tailwind CSS e os estilos globais antes da renderização.
import './index.css'

// Conecta o componente App ao elemento root definido no index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)