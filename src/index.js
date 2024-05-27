import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './page/Main.js';
import Login from './page/Login.js';
import Register from './page/Register.js';
import Home from './page/Home.jsx';
import Notfound from './page/Notfound.js';
import View from './page/View.js';

import { Outlet } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>

<Route path='/' element={<Main/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>

<Route path='/home' element={<Home/>}></Route>

<Route path='/home/view' element={<View/>}>
</Route>

<Route path='*' element={<Notfound/>}></Route>
</Routes>
<Outlet/>
</BrowserRouter>
  </React.StrictMode>
);
