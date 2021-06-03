import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.AUTH0_CLIENT_ID;
const clientId = process.env.AUTH0_DOMAIN;


ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin + "/home"}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);