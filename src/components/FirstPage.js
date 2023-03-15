import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./FirstPage.css";
import image from "../images/image.jpg";
import SideBar from "./SideBar";
import Typed from "typed.js";

export default function FirstPage() {
  const [show, setShow] = useState(false);
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web Developer.", " Student.", " Front-End Engineer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const clickHandler = function () {
    setShow((prev) => !prev);
  };
  return (
    <div className="firstPage">
      <SideBar show={show} />
      <FaBars className={"barIcon z"} size={10} onClick={clickHandler}></FaBars>
      <img src={image}></img>
      <div className="info z">
        <h1>Hi, This Is</h1>
        <h1 className="underline">
          Muhammad Hamza<span>.</span>
        </h1>
        <p style={{ marginTop: "1em", fontWeight: "bold", fontSize: "20px" }}>
          {" "}
          I am a&nbsp;
          <span ref={el} />
        </p>
      </div>
    </div>
  );
}
