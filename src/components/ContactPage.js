import React from "react";
import "./ContactPage.css";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
export default function ContactPage() {
  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactPageContainer">
        <div className="contactLeft">
          <div className="Cicon-box">
            <div className="Cicons">
              <FaEnvelope></FaEnvelope>
            </div>
            <div className="Cinfo">
              <h4>Email:</h4>
              <p>muhammadhamza21k3253@gmail.com</p>
            </div>
          </div>
          {/* call box */}
          <div className="Cicon-box">
            <div className="Cicons">
              <FaPhone></FaPhone>
            </div>
            <div className="Cinfo">
              <h4>Phone:</h4>
              <p>03312338867</p>
            </div>
          </div>
          {/* location */}
          <div className="Cicon-box">
            <div className="Cicons">
              <FaLocationArrow></FaLocationArrow>
            </div>
            <div className="Cinfo">
              <h4>Location:</h4>
              <p>Pakistan,karachi</p>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <input
            placeholder="email@example.com"
            className="email--section"
          ></input>
          <input className="inputText"></input>
        </div>
      </div>
    </div>
  );
}
