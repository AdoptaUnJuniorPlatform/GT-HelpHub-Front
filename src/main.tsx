import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { AvilityProvider } from './context/AvilityContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider >
      <AvilityProvider>
        <App />
      </AvilityProvider>
    </AuthProvider>
  </StrictMode>,
)
