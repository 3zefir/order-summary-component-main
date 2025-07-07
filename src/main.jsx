import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './build/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
