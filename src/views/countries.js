import React from 'react';
import "../styles/countries.css";

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "Kotlin",
  "Rust",
  "Go",
  "PHP",
  "TypeScript",
  "C#",
  "HTML/CSS"
];

const pictures = [
  require("../images/uk.jpg"),
  require("../images/czech.jpg"),
  require("../images/finland.jpg"),
  require("../images/norway.jpg"),
  require("../images/switzerland.jpg"),
  require("../images/ireland.jpg"),
  require("../images/italy.jpg"),
  require("../images/france.jpg"),
  require("../images/spain.jpg"),
  require("../images/greece.jpg"),
  require("../images/turkey.jpg"),
  require("../images/germany.jpg"),
  require("../images/usa.jpg")
];

export default function Countries() {
  return (
    <div className="countriesList row p-2 m-0 d-flex gap-2 justify-content-center" >
      <h1 id='destinations'><span className='specialText'>Countries </span>travel to </h1>
      {programmingLanguages.map((country, index) => (
        <div key={index} className="country d-flex p-2 gap-2 align-items-center col-lg-3">
          <div className="flag" style={{ backgroundImage: `url(${pictures[index]})` }}></div>
          <div className="countryName fs-5 pe-2">
            {country}
          </div>
        </div>
      ))}
    </div>
  );
}
