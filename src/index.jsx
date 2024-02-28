import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'
import { SearchProvider } from './context/SearchContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <SearchProvider> */}
   <App/>
   {/* </SearchProvider> */}
  </React.StrictMode>
);
