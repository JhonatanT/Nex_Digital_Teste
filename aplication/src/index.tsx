import { parseCookies } from 'nookies';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, useNavigate } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App/>
);
