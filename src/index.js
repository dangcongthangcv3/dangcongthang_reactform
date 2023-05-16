import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentReact from './Component/ComponentReact';
import { Provider } from 'react-redux';
import {store} from './Redux/configStore'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ComponentReact />
  </Provider>
);
