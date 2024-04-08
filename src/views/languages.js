import React from 'react';
import "../styles/languages.css";

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

export default function languages() {
  return (
    <div className="languagesList row p-2 m-0  mt-5 d-flex gap-2 justify-content-center" >
      <h1 id='destinations'><span className='specialText'>languages </span>travel to </h1>
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
