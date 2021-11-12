import ReactDOM from 'react-dom';
import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
