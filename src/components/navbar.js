import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeList, setActiveList] = useState([true, false, false, false, false, false, false]);

  const setActive = (id) => {
    const newActiveList = activeList.map((item, index) => index === id);
    setActiveList(newActiveList);
  };

  return (
    <nav className="navbar navbar-expand-lg align-items-baseline p-2 m-0">
      <a className="navbar-brand p-1" href="http://localhost:3000/#navbarBrand">
        <span className="specialText fs-5 fw-bold">Stage Board</span>
      </a>
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
            <a className={"nav-link " + (activeList[0] ? "active" : "")} href="http://localhost:3000/#landing">
              Acceuil
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(1)}>
            <a className={"nav-link " + (activeList[1] ? "active" : "")} href="http://localhost:3000/#discover">
              Découvrir
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(2)}>
            <a className={"nav-link " + (activeList[2] ? "active" : "")} href="http://localhost:3000/#tours">
              Offres
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(3)}>
            <a className={"nav-link " + (activeList[3] ? "active" : "")} href="http://localhost:3000/#blog">
              Notre Blog
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(4)}>
            <a className={"nav-link " + (activeList[4] ? "active" : "")} href="http://localhost:3000/#spécialités">
              spécialités
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(5)}>
            <a className={"nav-link " + (activeList[5] ? "active" : "")}  href="http://localhost:3000/#testimonials">
              Témoignages
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(6)}>
            <a className={"nav-link " + (activeList[6] ? "active" : "")} href="http://localhost:3000/#contact">
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
