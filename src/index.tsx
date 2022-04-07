import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {theme} from './styles';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Header} from './Header';
import {Footer} from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <App />
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
