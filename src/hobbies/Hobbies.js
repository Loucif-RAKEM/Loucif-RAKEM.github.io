import React from "react";
import "./Hobbies.css";
import Hobby from "./Hobby.js";
import data from "../data/data";

function Hobbies({ lang }) {
  const myData = lang === "fr" ? data.fr.hobbies : data.en.hobbies;

  return (
    <div className="hobbies" id="hobbies">
      <h1>{myData.title}</h1>
      <div className="content">
        {myData.hobbies.map((hobby, index) => (
          <Hobby
            key={index}
            title={hobby.title}
            description={hobby.description}
            img_url={hobby.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
