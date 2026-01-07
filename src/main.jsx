import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CompanyContext from "./context/CompanyContext.jsx";

createRoot(document.getElementById('root')).render(
  <CompanyContext>
    <BrowserRouter>
      <StrictMode>
          <App />
      </StrictMode>
  </BrowserRouter>
  </CompanyContext>
)
