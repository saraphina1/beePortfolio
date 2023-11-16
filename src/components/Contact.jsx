import "../styles/contact.css";
import linkedln from "../assets/linkedln.png";
import x from "../assets/x.jpg";
import insta from "../assets/insta.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozpongh",
        "template_8jrd9ig",
        form.current,
        "xAwy14H-paYPUNwlB"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunies.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="contactBtn">
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/sarah-oyeyemi-b39031183/">
            {" "}
            <img src={linkedln} alt="image" className="linkImage" />
          </a>
          <img src={x} alt="image" className="linkImage" />
          <img src={insta} alt="image" className="linkImage" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
