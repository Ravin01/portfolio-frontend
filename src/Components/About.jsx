import { Link } from "react-router-dom";
import img from "../assets/person/person.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container" id="about" >
      <img src={img} alt="" className="about-image" />
      <div className="about-content">
        <h1 className="about-header">About</h1>
        <div className="about-con1">
        Enthusiastic and skilled in Full Stack (MERN), I have completed a certification course. Eager to apply my knowledge and bring a dynamic approach to projects. Committed to learning, delivering impact solutions, creativity and contributing my skills to a collaborative team environment. Ready to embark on a journey of growth. 
        </div>
        <div className="about-con2">
          {/* <div className="about-text-div"> */}
          <div className="about-text">
            <i className="fa-solid fa-book"></i>
            <div className="about-edu">
              <h4>2015 - 2017</h4>
              <h5>SSLC - AMS School</h5>
              <p>percentage - 83</p>
            </div>
          </div>
          <div className="about-text">
            <i className="fa-solid fa-book"></i>
            <div className="about-edu">
              <h4>2017 - 2019</h4>
              <h5>HSC - JVMS</h5>
              <p>percentage - 81</p>
            </div>
          </div>
          <div className="about-text">
            <i className="fa-solid fa-graduation-cap"></i>
            <div className="about-edu">
              <h4>2019 - 2023</h4>
              <h5>B.E(ECE) - GCE - DPI</h5>
              <p>percentage - 78.3</p>
            </div>
          </div>
          <div className="about-text">
            <i className="fa-solid fa-code"></i>
            <div className="about-edu">
              <h4>2023(Nov)</h4>
              <h5>FSD(MERN) - Guvi(IITM)</h5>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="about-con3">
        <button className="about-btn">
        <Link to="/certificates" className="about-btn-link">
          Certificates
        </Link>
      </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
