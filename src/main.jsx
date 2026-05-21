import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { BrowserRouter } from 'react-router-dom'
const publicKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(publicKey)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey={publicKey}>
    <App />
    </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
