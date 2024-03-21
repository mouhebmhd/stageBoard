import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/landingComponent.css";

function LandingComponent() {
    return (
        <div className="container-fluid landingComponent" id="landing">
            <div className="content container-fluid d-flex flex-column justify-content-center align-items-center h-100 row-gap-5">
                <h1 className='slogan'>Postulez pour des Stages</h1>
                <p className='sloganMessage'>Trouvez des opportunités de stage passionnantes avec nous !</p>
                <NavLink to={"/candidatureStage"}>
                    <button className="btn btnApply">Postulez maintenant</button>
                </NavLink>
            </div>
        </div>
    );
}

export default LandingComponent;
