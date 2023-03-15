import React from "react";
import classes from "./ThirdPage.module.css";
import ProjectCard from "./ProjectCard";
import image1 from "../images/image.jpg";
import image2 from "../images/gym.jpg";
export default function ThirdPage() {
  return (
    <div className={classes.thirdPage}>
      <header className={classes.header}>PROJECTS</header>
      <div className={classes.projectContainer}>
        <ProjectCard image={image1} gym={false}></ProjectCard>
        <ProjectCard image={image1} gym={false}></ProjectCard>
        <ProjectCard image={image1} gym={false}></ProjectCard>
        <ProjectCard image={image2} gym={true}></ProjectCard>
        <ProjectCard image={image2} gym={true}></ProjectCard>
        <ProjectCard image={image2} gym={true}></ProjectCard>
      </div>
    </div>
  );
}
