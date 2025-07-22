import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Image from './Image.jsx'
import Result from './Result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>NutriSnap</h1>
    <Image />
    <App />
    <Result />
  </StrictMode>
)
