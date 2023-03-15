import React from "react";
import "./ProjectCard.css";
// import image from "../images/image.jpg";
export default function ProjectCard({ image, gym }) {
  let heading, inform;
  if (!gym) {
    heading = "PortFolio";
    inform = "This is my Porfolio project which you are seeing!";
  } else {
    heading = "Workout Maker";
    inform = "You can build your workout as you like!";
  }
  return (
    <div className="projectCard">
      <div className="projectImage">
        <img src={image} alt="" />
      </div>
      <div className="projectInfo">
        <h4>{heading}</h4>
        <p>{inform}</p>
      </div>
    </div>
  );
}
