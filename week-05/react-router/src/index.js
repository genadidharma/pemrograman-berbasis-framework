import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Params from './Params';
import Nesting from './Nesting';
import Auth from './Auth';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Params/> */}
    {/* <Nesting/> */}
    <Auth/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
