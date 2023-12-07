import React from "react";
import "./intro.css";
// import { Link } from "react-scroll";
import hireImage from "../../assets/hireImage.png";
import profilePhoto from "../../assets/profilePhoto.png";
import resumeAman from "../../assets/resumeAman.pdf";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Aman</span>
        </span>
        Fullstack developer
        <p className="introPara">
          I am a skilled fullstack developer. Creative thinking and problem
          solving are where my <br /> mind wanders using my knowledge and
          passion for desgin as my medium.
        </p>
        <a
          href={resumeAman}
          download="Resume-Aman-Tiwari"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn" title="Download resume">
            <img src={hireImage} alt="" className="hireme" />
            Hire me
          </button>
        </a>
      </div>
      <img src="" alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
