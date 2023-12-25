/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"
// import { projectArray } from "../../config"
import "../styles/Details.css";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";

const Details = ({ singleProject }) => {
  const project = singleProject;

  return (
    <>
      <div className="pro-container">
        <Particle />
        <div className="pro-con">
          <h3 className="pro-name">{`${project.name} - ${project.type} (${project.details.time})`}</h3>
          <div className="pro-text">
            <h4>Deployed URL</h4>
            <button className="pro-btn-live">
              <Link to={project.details.live} className="pro-btn-link">
                Live
              </Link>
            </button>
          </div>
          {project.details.github ? (
            <div className="pro-text">
              <h4>Frontend Github URL</h4>
              <button className="pro-btn">
                <Link to={project.details.github} className="pro-btn-link">
                  Code
                </Link>
              </button>
            </div>
          ) : (
            ""
          )}
          {project.details.githubBack ? (
            <div className="pro-text">
              <h4>Backend Github URL</h4>
              <button className="pro-btn">
                <Link to={project.details.githubBack} className="pro-btn-link">
                  Code
                </Link>
              </button>
            </div>
          ) : (
            ""
          )}
          {project.details.user ? (
            <div className="pro-text">
              <h4>Demo user credentials</h4>
              <div className="pro-text-user">
                <div className="pro-text-value">
                  <h6>email :</h6>
                  <h6>{project.details.user.email}</h6>
                </div>
                <div className="pro-text-value">
                  <h6>password :</h6>
                  <h6>{project.details.user.password}</h6>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="pro-con2">
            <div className="pro-tech">
              <h3>Technologies</h3>
              <div className="pro-tech-div">
                <ul className="pro-tech-ul">
                  {project.details.tech.map((d, i) => (
                    <li className="pro-tech-li" key={i}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pro-fea">
              <h3>Features</h3>
              <div className="pro-fea-div">
                <ul className="pro-fea-ul">
                  {project.details.features.map((d, i) => (
                    <li className="pro-fea-li" key={i}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
