import React from "react";
import "./skill.css";
import c1logo from "../../assets/clogo.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import git from "../../assets/git.png";
import nodeJs from "../../assets/nodeJs.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Skill = () => {
  return (
    <div id="skill" className="skill-main">
      <h1 className="skillstext">Skills</h1>
      <div className="main-skill-cont">
        <p>Language</p>
        <div className="skill-container">
          <div
            className="item item1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={c1logo} alt=""></img>
            <p>C/C++</p>
          </div>
          <div
            className="item item2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={html} alt=""></img>
            <p>HTML</p>
          </div>
          <div
            className="item item3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={css} alt=""></img>
            <p>CSS</p>
          </div>
          <div
            className="item item4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={js} alt=""></img>
            <p>JavaScript</p>
          </div>
        </div>
        <p style={{ marginTop: "2rem" }}>Libraries & Tools</p>
        <div className="skill-container">
          <div
            className="item item1 t1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={react} alt=""></img>
            <p>ReactJs</p>
          </div>
          <div
            className="item item2 t2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={redux} alt=""></img>
            <p>Redux </p>
          </div>
          <div
            className="item item3 t3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={git} alt=""></img>
            <p>GIT</p>
          </div>
          <div
            className="item item4 t4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={nodeJs} alt=""></img>
            <p>node Js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
