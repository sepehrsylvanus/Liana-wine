import React from "react";
import "./about.css";
import Button from "../buttons/Button";

const About = () => {
  return (
    <div className="aboutContainer">
      <p>Bu sayfa yapım aşamasındadır</p>
      <Button to="/" title="Ana Sayfa" />
    </div>
  );
};

export default About;
