import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './screens/Store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true}>
          <App />
        </PayPalScriptProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
