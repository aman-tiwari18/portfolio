import React from "react";
import "./project.css";
import pro1 from "../../assets/pricewise.png";
import pro2 from "../../assets/socialMedia.png";
import pro3 from "../../assets/typingApp.png";

import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Projects = () => {
  return (
    <div id="project" className="project-sec">
      <h1> Latest Projects</h1>
      <div class="main">
        <ul class="cards">
          <li class="cards_item">
            <div class="card" data-aos="fade-up">
              <div class="card_image">
                <a
                  href="https://pricewise-black.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pro1} alt="todo" />
                </a>
              </div>
              <div className="btn-democode">
                <a
                  href="https://github.com/aman-tiwari18/pricewise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={30} />
                </a>
                <a
                  href="https://github.com/aman-tiwari18/pricewise"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <BsLink45Deg size={30} />
                </a>
              </div>
              <div class="card_content">
                <a
                  href="https://github.com/aman-tiwari18/pricewise"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <h2 class="card_title">PriceWise</h2>
                </a>
                <div class="card_text">
                  <p>
                    {" "}
                    Developed a nextjs app. In this project I have implemented
                    the functionality for scraping the data of Amazon products
                    from the site after that we can track the product’s price
                    and get the notification via Hotmail.
                  </p>
                  <hr />
                  <p>
                    {" "}
                    In this project, I have used <strong>NextJs</strong> library
                    using <strong>Tailwind CSS</strong> and{" "}
                    <strong>Mongodb</strong> for the database.
                    <br />
                    Implemented mail service using Hotmail and BrightData to the
                    scrape data from the Amazon site.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card" data-aos="fade-up">
              <div class="card_image">
                <a
                  href="https://github.com/aman-tiwari18/SocialMedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pro2} alt="socialMedia" />
                </a>
              </div>
              <div className="btn-democode">
                <a
                  href="https://github.com/aman-tiwari18/SocialMedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={30} />
                </a>
                <a
                  href="https://github.com/aman-tiwari18/SocialMedia"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <BsLink45Deg size={30} />
                </a>
              </div>
              <div class="card_content">
                <a
                  href="https://github.com/aman-tiwari18/SocialMedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <h2 class="card_title">SocialMedia</h2>
                </a>
                <div class="card_text">
                  <p>
                    {" "}
                    Developed a complete MERN project. In this Social Media app,
                    a user can create a posts, like and comment on posts. A user
                    can follow another user and check his posts.
                  </p>
                  <hr />
                  <p>
                    {" "}
                    Utilized <strong>mongodb</strong>,{" "}
                    <strong>express.Js</strong>, and <strong>React.Js</strong>{" "}
                    JavaScript library for the frontend implementation.
                    <br />
                    Implemented API fetching with axios to retrieve data from
                    backend.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card" data-aos="fade-up">
              <div class="card_image">
                <a
                  href="https://github.com/aman-tiwari18/RabitTouch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pro3} alt="cryptoworld" />
                </a>
              </div>
              <div className="btn-democode">
                <a
                  href="https://github.com/aman-tiwari18/RabitTouch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={30} />
                </a>
                <a
                  href="https://aman-tiwari18.github.io/RabitTouch/"
                  target="_blank"
                  className=""
                  rel="noreferrer"
                >
                  <BsLink45Deg size={30} />
                </a>
              </div>
              <div class="card_content">
                <a
                  href="https://github.com/aman-tiwari18/RabitTouch"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <h2 class="card_title">Typing App</h2>
                </a>
                <div class="card_text">
                  <p>
                    Successfully developed a Typing Test App with a good UI and
                    User Experience. In this project, you can Enhance your
                    Typing Skill which will help in improving your speed and
                    accuracy.
                    <br />
                  </p>
                  <hr />
                  <p>
                    Utilized <strong>Css</strong>, and <strong>React.Js</strong>{" "}
                    JavaScript library for the frontend implementation
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
