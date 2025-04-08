import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { SearchProvider } from './context/search.jsx'
import { CartProvider } from './context/cart.jsx'

import "antd/dist/reset.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
   <SearchProvider>
   <BrowserRouter>
  <CartProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </CartProvider>
  </BrowserRouter>
   </SearchProvider>
  </AuthProvider>
  
)
