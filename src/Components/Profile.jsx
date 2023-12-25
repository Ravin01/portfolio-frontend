/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../styles/Profile.css";
// import Lottie from 'lottie-react'
// import rocket from '../assets/Space/Rocket.json'
// import personHi from "../assets/person/person2.png";
// import person from "../assets/person/person.png";
// import me from "../assets/person/me3.jpeg";
// import hole from '../assets/source/blackhole.webm'
import logo from "../assets/source/mainIconsdark.svg";
import hole from "../assets/source/blackhole.webm";
import Particle from "./Particle";

const Profile = () => {
  return (
    <div className="profile-container" id="profile">
      <video autoPlay muted loop className="home-vdo">
        <source src={hole} type="video/webm" />
      </video>
      <div className="profile-content">
        <Particle />
        <div className="profile-text-div">
          <div className="profile-text-hi">
            <h2>Hi</h2>
            <h2 className="shake-animation">&#x1F44B;</h2>
          </div>
          <h2>I'm Ravin </h2>
          <h2>Full Stack Developer</h2>
          <span className="cursor"></span>
        </div>

        <div className="profile-buttons">
          <button className="profile-btn">
            <Link
              to="https://drive.google.com/file/d/1jgDJ5GKJdNvtS2BcqiAV7X5VyviIRkMs/view?usp=sharing"
              target="blank"
              className="profile-btn-link"
            >
              Resume
            </Link>
          </button>
          <button className="profile-btn">
            <Link to="" className="profile-btn-link">
              Let's Talk
            </Link>
          </button>
        </div>
      </div>
      <div className="profile-logo">
        <img className="profile-img" src={logo} />
        {/* <Lottie animationData={rocket} /> */}
      </div>
    </div>
  );
};

export default Profile;
