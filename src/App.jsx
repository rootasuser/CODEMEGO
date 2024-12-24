import React from 'react';
import Header from './templates/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='mt-5' id="content"></div>
    </div>
  );
}

export default App;
