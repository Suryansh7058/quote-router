import ReactDOM from 'react-dom';
import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
