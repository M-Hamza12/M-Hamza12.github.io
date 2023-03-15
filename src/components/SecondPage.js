import React from "react";

import "./SecondPage.css";
import { FaAngleRight } from "react-icons/fa";
import Typed from "typed.js";
export default function SecondPage() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" HTML.", " CSS.", " Javascript", " React", " C/C++"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="aboutMe">
      <h1 id="section">About Me</h1>
      <p className="aboutInfo">
        I am a Front-End Engineer who loves to code and make interactive
        designs! The Languages I know :<br></br>
        <span className="languages" ref={el}></span>
      </p>

      <div className="containerLists">
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            Birthday:
            <p className="description">9-July-2003</p>
          </header>
        </div>
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            Age:
            <p className="description">19</p>
          </header>
        </div>
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            Degree:
            <p className="description">BCS</p>
          </header>
        </div>
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            University:
            <p className="description">NUCES</p>
          </header>
        </div>
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            Email:
            <p className="description">hmtm1212@gmail.com</p>
          </header>
        </div>
        <div className="list">
          <FaAngleRight className="angle" />
          <header>
            Location:
            <p className="description">Pakistan,Karachi</p>
          </header>
        </div>
      </div>
    </div>
  );
}
