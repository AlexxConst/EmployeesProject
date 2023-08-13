import './index.css';

import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
