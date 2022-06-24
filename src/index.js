import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter';
import { CssBaseline } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CssBaseline />
    <AppRouter />
  </BrowserRouter>
);

