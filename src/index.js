import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QuoteContext from './context/QuoteContext';

ReactDOM.render(
  <React.StrictMode>
    <QuoteContext>
      <App />
    </QuoteContext>
  </React.StrictMode>,
  document.getElementById('root')
);
