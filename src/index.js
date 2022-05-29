import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import 'bootstrap/dist/js/bootstrap.min.js'

// Components
import Navbar from './components/Navbar';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Navbar />
      <div role="main">
        <Main />
      </div>
    </>
  </React.StrictMode>
);
