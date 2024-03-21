import React from 'react';
import earthImage from '../images/globalEarth.jpg';
import '../styles/testimonials.css';
import TestimonialsComponent from "../components/testimonyCarousel"
export default function Testimonials() {
  return (
    <div className='testimonials p-2 d-flex justify-content-center flex-column align-items-center' id='testimonials'>
      <div className='earthImage m-2 '>
        <img src={earthImage} alt='earth' className='earthImage' />
      </div>
      <h2 className='specialText testimonialsTitle'>Testimonials</h2>
      <h1 className='testimonialsQuote'>Trust Our Clients</h1>
     <TestimonialsComponent userNames={["David","Moccha","Alfred"]} userPhotos={["person1","person2","person3"]} userRatings={[4.5,2,5]} usersReviews={["Lorem ipsum dolor sit amet consectetur, adipisicing elit.","Lorem ipsum dolor sit amet consectetur, adipisicing elit.","Lorem ipsum dolor sit amet consectetur, adipisicing elit."]}></TestimonialsComponent>
    </div>
  );
}
