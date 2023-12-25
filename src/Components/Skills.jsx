import { skillsArray } from "../../config";
import "../styles/Skills.css";
import cards from "../assets/source/cards-video.webm";
import Particles from "@tsparticles/react";

const Skills = () => {
  return (
    <>
      <div className="skill-container">
        <video autoPlay muted loop className="skill-vdo">
          <source src={cards} type="video/webm" />
        </video>
        <div className="skill-con2">
          {/* <Particles /> */}
          <h3 className="skill-heading">Skills</h3>
          <div className="skill-content">
            {skillsArray.map((d, i) => (
              <div className="skill-item" key={i}>
                <img src={d.img} alt="" className="skill-icon" />
                <h6>{d.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
