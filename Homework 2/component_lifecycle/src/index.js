import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrencyApp from './CurrencyList/CurrencyApp';
import UserList from './Users/UserList';

ReactDOM.render(
  <React.StrictMode>
    <CurrencyApp />
    {/* <UserList/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

