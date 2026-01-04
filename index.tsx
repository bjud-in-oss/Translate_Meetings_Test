
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Runtime polyfill for 'process' to support dependencies that expect it to exist.
// This prevents "Uncaught ReferenceError: process is not defined".
if (typeof window !== 'undefined' && !window.process) {
  // @ts-ignore
  window.process = { env: {} };
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);