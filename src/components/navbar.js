import { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import axios from 'axios';
function Navbar() {
  const [activeList, setActiveList] = useState([true, false, false, false, false, false, false,false,false]);
  const setActive = (id) => {
    const newActiveList = activeList.map((item, index) => index === id);
    setActiveList(newActiveList);
  };
  const role=localStorage.getItem("role");
  const userId=localStorage.getItem(role+"Id");
  var [whereIntern,setWhereIntern]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3030/candidature/getAllCandidatures/")
    .then(response=>{
  
        if(role=="intern")
          {
            setWhereIntern(response.data.candidatures.filter(candidature=>{
              return candidature.applicationStatus=="Demande acceptée" && candidature.internId==userId;
            }))
          }
        console.log(whereIntern)
    })
  },[role,userId])
  return (
    <nav className="navbar navbar-expand-lg align-items-baseline p-2 m-0">
      <Link className="navbar-brand p-1" to="http://localhost:3000/#navbarBrand">
        <span className="specialText fs-5 fw-bold">Stage Board</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav d-flex flex-row col mx-5 justify-content-center gap-4" id='navbarNav'>
        <li className="nav-item mx-2" onClick={() => setActive(0)}>
            <Link className={"nav-link " + (activeList[0] ? "active" : "")} to="/mainPage">
             Acceuil
            </Link>
          </li>
          {role=='admin' && 
          <li className="nav-item mx-2" onClick={() => setActive(1)}>
            <Link className={"nav-link " + (activeList[1] ? "active" : "")} to="/dashboard">
              Statistiques
            </Link>
          </li>}
          <li className="nav-item mx-2" onClick={() => setActive(2)}>
            <Link className={"nav-link " + (activeList[2] ? "active" : "")} to="/discover">
              Découvrir
            </Link>
          </li>
          {role=="admin" && 
          <li className="nav-item mx-2" onClick={() => setActive(3)}>
            <Link className={"nav-link " + (activeList[3] ? "active" : "")} to="/tours">
              Offres
            </Link>
          </li>}
          {role=="admin" && 
          <li className="nav-item mx-2" onClick={() => setActive(4)}>
            <Link className={"nav-link " + (activeList[4] ? "active" : "")} to="/users/interns">
              Stagiaires
            </Link>
          </li>}
          {role=="admin" && 
          <li className="nav-item mx-2" onClick={() => setActive(5)}>
            <Link className={"nav-link " + (activeList[5] ? "active" : "")} to="/users/supervisors">
              Encadrants
            </Link>
          </li>}
          <li className="nav-item mx-2" onClick={() => setActive(6)}>
            <Link className={"nav-link " + (activeList[6] ? "active" : "")}  to="/candidatures">
              Candidatures
            </Link>
          </li>
          {role=="intern" && whereIntern.length!=0 && 
          <li className="nav-item mx-2" onClick={() => setActive(7)}>
            <Link className={"nav-link " + (activeList[7] ? "active" : "")} to="/contact">
              Messagerie 
            </Link>
          </li>}
          {role=="supervisor" && 
          <li className="nav-item mx-2" onClick={() => setActive(7)}>
            <Link className={"nav-link " + (activeList[7] ? "active" : "")} to="/contact">
              Messagerie 
            </Link>
          </li>}
          <li className="nav-item mx-2" onClick={() => setActive(7)}>
            <Link className={"nav-link " + (activeList[8] ? "active" : "")} to="/">
              Se déconnecter 
            </Link>
          </li>
        </ul>
        {role!="admin" && 
        <Link to={"/notification"}>
        <FaBell className='notificationIcon mx-1 '></FaBell>
        </Link>
        }

        <Link className={"nav-link "} to="/user/manageProfile">
        <CiUser className='profilIcon mx-1 '></CiUser>
        </Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
