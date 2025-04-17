import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Import the index.css for any global styles not handled by styled-components
import './index.css'

// Make sure the DOM is fully loaded before mounting React
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
