import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root1=createRoot(document.getElementById('root1'));
root1.render(
  <StrictMode>
    <App/>
  </StrictMode>
);