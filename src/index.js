import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import Frame from './views/frame';
import { Provider } from 'react-redux';
import { store } from './Store/rootStore';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Frame />
    </Provider>
  </React.StrictMode>
);
