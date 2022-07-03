import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ChakraProvider>
);

