import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'

import { Buffer } from 'buffer';
window.Buffer = Buffer;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider defaultTheme='light' >
      <App />
    </Provider>
  </StrictMode>,
)
