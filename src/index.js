import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './page/Main.js';
import Login from './page/Register.js';
import Register from './page/Register.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);
