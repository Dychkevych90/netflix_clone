import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/app/App';

import { store, persistor } from './store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
);

