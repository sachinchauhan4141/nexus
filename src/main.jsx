import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  "%cMade with ❤️ by %cs3devs%c\n🔗 https://s3dev.onrender.com/",
  "color: #ffffff; font-size: 14px; font-family: 'Montserrat', sans-serif;",
  "color: #D4A5FF; font-size: 14px; font-weight: bold; font-family: 'Montserrat', sans-serif; text-decoration: underline;",
  "color: #ffffff; font-size: 12px; font-family: 'Montserrat', sans-serif;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
