import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateInternAccount from '../../views/createInternAccount.js';
import Subscribe from '../../views/Subscribe.js';
import MainPage from '../../views/mainPage.js';
export default function mainRouters() {
  return (
    <Routes>
    <Route path='/' element={<MainPage />}></Route>
    <Route path='/createInternAccount' element={<CreateInternAccount />}></Route>

   </Routes>
  )
}
