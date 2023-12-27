/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import logo from "../assets/source/mainIconsdark.svg";
import hole from "../assets/source/blackhole.webm";
import { HashLink } from "react-router-hash-link";



const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <video autoPlay muted loop className="home-vdo">
        <source src={hole} type="video/webm" />
      </video>
      <div className="profile-content">
        <div className="profile-text-div">
          <div className="profile-text-hi">
            <h2>Hi</h2>
            <h2 className="shake-animation">&#x1F44B;</h2>
          </div>
          <h2 className="profile-text-name" >I'm Ravin </h2>
          <h2 className="profile-text-full" >Full Stack Developer</h2>
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
            <HashLink className="profile-btn-link" to='#contact' smooth >

              Let's Talk
            </HashLink>
            
          </button>
        </div>
      </div>
      <div className="profile-logo">
        <img className="profile-img" src={logo} />
      </div>
    </div>
  );
};

export default Profile;
