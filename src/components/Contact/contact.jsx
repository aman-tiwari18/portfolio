import React, { useRef } from "react";
import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkedIn from "../../assets/linkedIn.png";
import leetCode from "../../assets/leetcode.png";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqmiq3c",
        "template_huqvk1g",
        form.current,
        "TYeQ8iuzBhZuRAbYe"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            className="name"
            type="text"
            placeholder=" Your Name"
            name="from_name"
          />
          <input
            className="email"
            type="email"
            placeholder=" Your Email"
            name="user_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a
              href="https://github.com/aman-tiwari18"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github" className="link" />
            </a>
            <a
              href="https://leetcode.com/amantiwariald18/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={leetCode} alt="leetCode" className="link" />
            </a>
            <a
              href="https://www.instagram.com/aman_tiwarii18/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={insta} alt="instagram" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/amantiwari18/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedIn} alt="linkedIn" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
