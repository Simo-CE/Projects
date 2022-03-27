import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favoritesContext'

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  document.getElementById('root')
);