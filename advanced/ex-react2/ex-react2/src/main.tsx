import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mood from './HappySad.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Mood />
  </StrictMode>,
)
