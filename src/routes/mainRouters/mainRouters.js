import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateInternAccount from '../../views/createInternAccount.js';
import MainPage from '../../views/mainPage.js';
import Login from "../../views/login.js"
import Discover from "../../views/discover.js"
import Tours from "../../views/tours.js"
import Blog from "../../views/blog.js"
import Countries from "../../views/countries.js"
export default function mainRouters() {
  return (
    <Routes>
    <Route path='/' element={<MainPage />}></Route>
    <Route path='/createInternAccount' element={<CreateInternAccount />}></Route>
    <Route path='/admin/createAccount/' element={<CreateInternAccount role="admin"/>}></Route>
    <Route path='/intern/createAccount/' element={<CreateInternAccount role="stagiaire"/>}></Route>
    <Route path='/supervisor/createAccount/' element={<CreateInternAccount role="encadrant"/>}></Route>
    <Route path='/login/' element={<Login />}></Route>
    <Route path='/discover' element={<Discover />}></Route>
    <Route path='/tours' element={<Tours />}></Route>
    <Route path='/blog' element={<Blog />}></Route>
    <Route path='/specialites' element={<Countries />}></Route>

   </Routes>
  )
}
