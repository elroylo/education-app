import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis'
import { SERVER_URL, APP_ID } from './constants/moralis.constants'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <App />
    </MoralisProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
{/*  */ }
//
