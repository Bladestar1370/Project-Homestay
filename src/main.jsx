import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css'
import App from './App.jsx'
import './i18n';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
  </StrictMode>,
)
