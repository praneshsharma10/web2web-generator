import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// npx tailwindcss -i ./src/index.css -o ./src/output.css --watch