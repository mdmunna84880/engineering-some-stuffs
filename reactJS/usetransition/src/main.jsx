import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import randomImgName from './lib/data.js';
import App from './App.jsx'
import Simple from './Simple.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Simple/>
    {/* <App users={randomImgName()}/> */}
  </StrictMode>,
)
