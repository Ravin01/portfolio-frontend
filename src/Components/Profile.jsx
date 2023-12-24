/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import Lottie from 'lottie-react'
import rocket from '../assets/Space/Rocket.json'
// import personHi from "../assets/person/person2.png";
// import person from "../assets/person.png";

const Profile = () => {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-content">
        <div className="profile-text-div">
          <div className="profile-text-hi">
            <h2>Hi</h2>
            <h2 className="shake-animation">&#x1F44B;</h2>
          </div>
          <h2>I'm Ravin </h2>
          <h2>Full Stack Developer</h2>
          <span className="cursor" ></span>
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
            <Link to="" className="profile-btn-link" >let's Talk</Link>
          </button>
        </div>
      </div>
      <div className="profile-logo">
        {/* <img className="profile-img" src={person} /> */}
        <Lottie animationData={rocket} />
      </div>
    </div>
  );
};

export default Profile;
