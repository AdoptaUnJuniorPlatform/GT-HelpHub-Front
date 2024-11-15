import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { AvilityProvider } from './context/AvilityContext.tsx'
import { ProfileProvider } from './context/ProfileContext.tsx'
import { UserProvider } from './context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider >
      <AvilityProvider>
        <ProfileProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ProfileProvider>
      </AvilityProvider>
    </AuthProvider>
  </StrictMode>,
)
