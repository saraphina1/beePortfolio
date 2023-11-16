import "../styles/home.css";
import foto from "../assets/foto.png";

import { Link } from "react-router-dom";

import { HiBriefcase } from "react-icons/hi";
function Home() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Bunmi</span>
          <br />
          Frontend Developer{" "}
        </span>
        <p className="intropara">
          I am a skilled web designer with experience in creating
          <br /> virtually appealing and user-friendly websites.
        </p>
        <Link to="/contact">
          <button className="hireBtn">
            <HiBriefcase className="briefImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={foto} alt="mypic" className="myPic" />
    </section>
  );
}

export default Home;
