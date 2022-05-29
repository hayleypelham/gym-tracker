import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import 'bootstrap/dist/js/bootstrap.min.js'

import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
