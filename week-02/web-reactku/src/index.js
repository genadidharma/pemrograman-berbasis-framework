import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cat from './cat.jpg';
import reportWebVitals from './reportWebVitals';

const Hello = () => {
  return <p>Hello</p>
}

const Cat = () => {
  return <img src={cat} alt='Cat'/>
}

ReactDOM.render(
  <div>
      <Hello/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
