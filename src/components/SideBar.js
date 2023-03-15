import React from "react";
import "./sideBar.css";
import { useEffect } from "react";
import image from "../images/image.jpg";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
export default function SideBar({ show }) {
  useEffect(() => {
    if (show)
      setTimeout(
        () => (document.querySelector(".sideBar").style.left = "0"),
        500
      );
    if (!show)
      setTimeout(
        () => (document.querySelector(".sideBar").style.left = "-300px"),
        500
      );
  }, [show]);
  return (
    <div className="sideBar z">
      <div id="myImage">
        <img src={image} id="img" alt="" />
      </div>
      <div className="socials">
        <a href="#">
          <FaFacebook className="icons"></FaFacebook>
        </a>
        <a href="#">
          <FaYoutube className="icons"></FaYoutube>
        </a>
        <a href="#">
          <FaTwitter className="icons"></FaTwitter>
        </a>
        <a href="#">
          <FaInstagram className="icons"></FaInstagram>
        </a>
      </div>
      <ul className="directories">
        <li className="directory--list">
          <FaHome className="icons"></FaHome>
          <p>Home</p>
        </li>
        <li className="directory--list">
          <FaUser className="icons"></FaUser>
          <p>About Me</p>
        </li>
        <li className="directory--list">
          <FaEnvelope className="icons"></FaEnvelope>
          <p>Contact Me</p>
        </li>
      </ul>
      <div className="copyright">
        <p>&copy; Copyright 2023</p>
        <p>
          Developed By<span className={"name"}> Muhammd Hamza</span>
        </p>
      </div>
    </div>
  );
}
