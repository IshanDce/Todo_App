import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Props from './Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Props />
  </StrictMode>
  
)
