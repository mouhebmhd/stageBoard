import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateInternAccount from '../../views/createInternAccount.js';
import MainPage from '../../views/mainPage.js';
import Login from "../../views/login.js"
import Discover from "../../views/discover.js"
import Tours from "../../views/tours.js"
import Blog from "../../views/blog.js"
import Languages from "../../views/languages.js"
import ManageInterns from "../../views/manageInterns"
import ManageSupervisors from "../../views/manageSupervisors.js"
import ManageProfile from "../../views/manageProfile.js"
import ContactUs from '../../views/contactUs.js';
import Candidatures from '../../views/candidatures.js';
export default function mainRouters() {
  return (
    <Routes>
    <Route path='/mainPage' element={<MainPage />}></Route>
    <Route path='/admin/createAccount/' element={<CreateInternAccount role="admin"/>}></Route>
    <Route path='/intern/createAccount/' element={<CreateInternAccount role="stagiaire"/>}></Route>
    <Route path='/supervisor/createAccount/' element={<CreateInternAccount role="encadrant"/>}></Route>
    <Route path='/' element={<Login />}></Route>
    <Route path='/discover' element={<Discover />}></Route>
    <Route path='/tours' element={<Tours />}></Route>
    <Route path='/blog' element={<Blog />}></Route>
    <Route path='/specialites' element={<Languages />}></Route>
    <Route path='/users/interns' element={<ManageInterns />}></Route>
    <Route path='/users/supervisors' element={<ManageSupervisors />}></Route>
    <Route path='/user/manageProfile' element={<ManageProfile />}></Route>
    <Route path='/contact' element={<ContactUs />}></Route>
    <Route path='/candidatures' element={<Candidatures />}></Route>
   </Routes>
  )
}
