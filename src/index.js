import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </CssBaseline>
    </Provider>

  </React.StrictMode>
);
