import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import CssBaseline from '@mui/material/CssBaseline';
=======
import { store, persistor } from 'redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
>>>>>>> 27e95369cef9e75964d09b32cbfdc3cbe9bb3253
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </CssBaseline>
    </Provider>

=======
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
>>>>>>> 27e95369cef9e75964d09b32cbfdc3cbe9bb3253
  </React.StrictMode>
);
