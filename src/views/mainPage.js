import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Testimonials from './testimonials';
import Discover from './discover';
import Blog from './blog';
import LandingComponent from '../components/landingComponent';
import Countries from "./countries"
import Footer from './footer';
import Navbar from '../components/navbar';
export default function mainPage() {
  return (
<>
   <LandingComponent></LandingComponent>
 </>
  )
}
