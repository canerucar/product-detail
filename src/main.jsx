import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_app'
import './style/output.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>);
