import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './rework/config/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ChakraProvider>
);

