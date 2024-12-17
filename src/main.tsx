import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainPage from './pages'
import { MainLayout } from './components/layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
