import React from "react";
import "../styles/About.css";
import pic from "../assets/profile-picture.JPG"


function About() {
  return (
    <div className="home">
      <div className="about">
        <h2>This is my portfolio</h2>
        <img src={pic} alt="Profile Pic" className="prof-pic" />
        <div className="summary">
          <p>This is me</p>
        </div>
      </div>
    </div>
  );
}

export default About;
