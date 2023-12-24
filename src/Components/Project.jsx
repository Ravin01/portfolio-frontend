/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import { projectArray } from "../../config.js";


const Project = ({setId}) => {
  const [projectData, setProjectData] = useState(projectArray);


  

  const handleFilterAll = () => {
    setProjectData(projectArray);
  };
  const handleFilter = (type) => {
    const data = projectArray.filter((item) => item.type === type);
    setProjectData(data);
  };

  const handleOpenDetails = (id)=>{
    setId(id)
    console.log(id)
  }


  return (
    <>
    
    <div className="project-container">
      <h3 className="project-heading" >Projects</h3>
      <div className="project-filters">
        <button className="project-filter-btn" onClick={handleFilterAll}>
          All
        </button>
        <button
          className="project-filter-btn"
          onClick={() => handleFilter("full")}
        >
          Full Stack
        </button>
        <button
          className="project-filter-btn"
          onClick={() => handleFilter("front")}
        >
          Front-End
        </button>
        <button
          className="project-filter-btn"
          onClick={() => handleFilter("back")}
        >
          Back-End
        </button>
        <button
          className="project-filter-btn"
          onClick={() => handleFilter("ui")}
        >
          UI
        </button>
      </div>
      <div className="project-items-con">
        {projectData.map((d, i) => (
          <div className="project-item" key={i}>
            <img src={d.image} alt="" className="project-item-img" />

              <h4>{d.name}</h4>
            <div className="project-btn">
              <button className="project-item-btn">
                <Link to={d.details.live} target="_blank" className="project-btn-link" >Live</Link>
              </button>

              <button className="project-item-btn">
                <Link to={d.details.github} target="blank" className="project-btn-link" >
                  <i className="fa-solid fa-code project-btn-icon" ></i>Code
                </Link>
              </button>

              <button className="project-item-btn" onClick={()=>handleOpenDetails(d.id)}>
              <Link to={`/${d.id}`} className="project-btn-link" >Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Project;
