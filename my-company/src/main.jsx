import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/about',
    element:<About />
  },
  {
    path: '/services',
    element:<Services />
  },
  {
    path: '/contact',
    element:<Contact />
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
