import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../../views/login.js';
import Subscribe from '../../views/Subscribe.js';
import MainPage from '../../views/mainPage.js';
import VisaDemand from '../../views/visaDemand.js';
export default function mainRouters() {
  return (
    <Routes>
    <Route path='/' element={<MainPage />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/createAccount' element={<Subscribe />}></Route>
    <Route path='/visaDemand' element={<VisaDemand />}></Route>

   </Routes>
  )
}
