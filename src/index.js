import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
<Route path='' element={<Home/>}></Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);
