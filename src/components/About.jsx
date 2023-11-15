import "../styles/about.css";
import uiDesign from "../assets/uiDesign.jpg";
import webDesign from "../assets/webDesign.jpg";
import respDesign from "../assets/respDesign.jpg";

function About() {
  return (
    <section className="about">
      <span className="aboutTitle">What I do</span>
      <span className="aboutDesc">
        I am skilled and passionate web developer with experience in creating
        vitual appealing and user-friendly
        <br />
        websites. I have a strong understanding of design and a keen eye for
        detail. I am proficient in HTML, CSS,
        <br />
        Javacript, React.js and TypeScript
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={webDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Web/App Development</h2>
            <p>
              translating design mockups and wireframes into fully functional
              websites or applications,
              <br /> by writing clean, efficient, and maintainable code using
              HTML, CSS, JavaScript and React.JS
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={respDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Responsive Design</h2>
            <p>
              I ensure that websites and applications are responsive across
              different devices and screen sizes.<br/>By utilizing responsive design
              techniques,<br/>I make sure that the user experience remains
              consistent and optimal, regardless of the device being used.
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={uiDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>
              I collaborate closely with designers to ensure that the user
              interface (UI) is visually appealing,<br/> user-friendly, and aligned
              with the projects goals and target audience. <br/>I also leverage my
              knowledge of UI design principles to create intuitive and engaging
              experiences for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
