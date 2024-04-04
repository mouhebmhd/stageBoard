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
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400"
];

export default function Countries() {
  return (
    <div className="countriesList row p-2 m-0  mt-5 d-flex gap-2 justify-content-center" >
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
