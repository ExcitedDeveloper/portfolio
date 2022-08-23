import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportAccessibility from '../src/utils/reportAccessibility'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportAccessibility(React).catch((err) => console.error(err))
