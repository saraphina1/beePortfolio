import "../styles/portfolio.css";

import movie from "../assets/movie.jpg";
import shop from "../assets/shop.jpg";
import test from "../assets/test.jpg";

function Portfolio() {
  return (
    <section className="project">
      <h2 className="projectTitle">My Portfolio</h2>
      <span className="projectDesc">
        I take pride in paying attention to the smaillest detail and making sure
        that my work is pixel
        <br />
        perfect. I am excited to bring my skills and experience to help
        businesses
        <br /> achieve their goals and create a strong online presence
      </span>
      <div className="projectImg">
        <img src={movie} alt="image" className="projectImage" />
        <img src={shop} alt="image" className="projectImage" />
        <img src={test} alt="image" className="projectImage" />
      </div>
    </section>
  );
}

export default Portfolio;
