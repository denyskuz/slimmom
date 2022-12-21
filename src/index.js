import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from 'redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';
import 'modern-normalize';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
