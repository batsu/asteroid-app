import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';

import Dev8 from './Dev8'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <div className='mainDiv'>

      <Dev8 />

    </div>
    </StyledEngineProvider>
  </React.StrictMode>,
)
