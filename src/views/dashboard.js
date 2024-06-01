import { useEffect, useState } from "react";
import React from "react";
import {BsFillPersonFill,BsFillPersonCheckFill,BsFillCartFill,BsCartXFill,BsCartCheckFill} from 'react-icons/bs'
import './dashboard.css'
import Navbar from "../components/navbar";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";

function Dashboard()
{

 

    return (
        <React.Fragment>
          <Navbar></Navbar>
        <div className="container mt-5 p-4">
            <div className="row mt-5 d-flex justify-content-evenly">   
            <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4  ">Stagiaire</div>
              <div className="col dataBoxIcon d-inline m-1 p-1  d-flex justify-content-end">
               <BsFillPersonFill className="icon display-2"></BsFillPersonFill>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{5}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Le nombre total de stagiaires</footer>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4 subs ">Encadrants </div>
              <div className="col dataBoxIcon d-inline m-1 p-1 d-flex justify-content-end">
               <BsFillPersonCheckFill className="icon"></BsFillPersonCheckFill>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{3}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Le nombre total d'encadrants </footer>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4 orders ">Offres </div>
              <div className="col dataBoxIcon d-inline m-1 p-1 d-flex justify-content-end">
               <FaProjectDiagram className="icon"></FaProjectDiagram>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{5}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Le nombre total d'offres de stages </footer>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4 corders ">Candidatures</div>
              <div className="col dataBoxIcon d-inline m-1 p-1 d-flex justify-content-end">
               <FaPaperPlane className="icon"></FaPaperPlane>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{4}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Le nombre total de candidatures</footer>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4 ccorders ">Candidatures</div>
              <div className="col dataBoxIcon d-inline m-1 p-1 d-flex justify-content-end">
               <FaCheckDouble className="icon "></FaCheckDouble>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{2}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Candidatures acceptées</footer>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-2 m-1 p-0 dataBox d-flex flex-column ">
          <header className="p-0"></header>
          <main className="d-flex flex-column">
            <div className="p-2 d-flex justify-content-between">
              <div className="col dataBoxDesc d-inline  mx-3 p-1 h4 cccorders ">Moyenne</div>
              <div className="col dataBoxIcon d-inline m-1 p-1 d-flex justify-content-end">
               <FaPercent className="icon"></FaPercent>
              </div>
            </div>

            <div className="col-12 dataBoxInfo m-1 p-1">{1.2}</div>
          </main>
          <footer className="m-0 p-2 dataBoxFooter ">Moyenne de candidatures par projet</footer>
        </div>
        



            </div>
        </div>
        </React.Fragment>
    )
}
export default Dashboard;