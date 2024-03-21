import React from 'react'
import "../styles/blog.css"
import { FaRegClock } from "react-icons/fa6";
import mainArticlePhoto from "../images/london.jpg"
import amesterdamPhoto from "../images/amesterdam.jpg"
import sushi from "../images/sushi.jpg"
import ireland from "../images/irelland.jpg"
import { FaLocationArrow } from "react-icons/fa";
export default function Blog() {
  return (
    <div className="blog m-0 p-2" >
        <h1 id='blog'>Read Our <span className='specialText'>Blog</span></h1>
        <div className="articles ">
            <div className="mainArticle d-flex gap-3">
                <div className="articlePhoto">
                    <img src="https://placehold.co/600x400" className='mainArticlePhoto' alt="" />
                </div>
                <div className="articleDescription d-flex flex-column justify-content-center">
                    <div className="labels d-flex gap-2">
                        <div className="label specialText">
                            United Kingdom
                        </div>
                        <div className="label">
                           <FaRegClock className='clockIcon mx-2'/>
                            <span className='specialText p-1 m-0'>2 Minutes</span>
                        </div>
                    </div>
                    <div className="article d-flex flex-column  gap-2 my-1">
                        <h2 className='mt-2'>The New London restaurants to try in january 2024</h2>
                        <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nemo quo perspiciatis veniam quibusdam possimus, ipsam eum velit voluptatem exercitationem, dolor repellat voluptates corporis delectus eius. Quia, similique accusamus nobis assumenda beatae id aut, esse optio distinctio modi corrupti. Quo assumenda earum vero. Deserunt dolorum illum perspiciatis. Accusantium quam ratione totam magnam!</p>
                        <buttton className="btn btn-primary learnMoreBtn col-2">Learn more<FaLocationArrow className='mx-2'/></buttton>

                    </div>
                </div>
            </div>
            <div className="secondarryArticles d-flex justify-content-start gap-2 p-1  my-2">
            <div className="card m-0 p-0" style={{width:'25%'}}  >
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour`} />
            <div className="card-body">
              <h5 className="card-title  fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
              <p className="card-text tourDescription fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptas!</p>
              <buttton className="btn btn-primary learnMoreBtn col-2">Learn more<FaLocationArrow className='mx-2'/></buttton>
            </div>
          </div>
          <div className="card m-0 p-0" style={{width:'25%'}}  >
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour`} />
            <div className="card-body">
              <h5 className="card-title  fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
              <p className="card-text tourDescription fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo!</p>
              <buttton className="btn btn-primary learnMoreBtn col-2">Learn more<FaLocationArrow className='mx-2'/></buttton>
            </div>
          </div>
          <div className="card m-0 p-0" style={{width:'25%'}}  >
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour`} />
            <div className="card-body">
              <h5 className="card-title  fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
              <p className="card-text tourDescription fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sunt?</p>
              <buttton className="btn btn-primary learnMoreBtn col-2">Learn more<FaLocationArrow className='mx-2'/></buttton>

            </div>
          </div>
          <div className="card m-0 p-0" style={{width:'25%'}}  >
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour`} />
            <div className="card-body">
              <h5 className="card-title  fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
              <p className="card-text tourDescription fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sunt?</p>
                                     <buttton className="btn btn-primary learnMoreBtn col-2">Learn more<FaLocationArrow className='mx-2'/></buttton>

            </div>
          </div>
            </div>
           
        </div>
    </div>
  )
}
