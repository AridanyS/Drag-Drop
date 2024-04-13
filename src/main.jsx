import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/App.jsx'
import { Card } from './components/Cards.jsx'
import './components/Cards.css'
import './styles/main.css'
import './styles/header.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
)
