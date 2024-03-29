/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import { projectArray } from "../../config.js";


const Project = ({setId, setSingleProject}) => {
  const [projectData, setProjectData] = useState(projectArray);


  

  const handleFilterAll = () => {
    setProjectData(projectArray);
    setActiveBtn('All')
  };
  const handleFilter = (type) => {
    const data = projectArray.filter((item) => item.type === type);
    setProjectData(data);
    setActiveBtn(type)
  };

  const handleOpenDetails = (id)=>{
    setId(id)
    const data = projectArray.find((item) => item.id === id)
    setSingleProject(data)
  }

  const [activeBtn, setActiveBtn] = useState('All')


  return (
    <>
    
    <div className="project-container" id="project" >
      <h3 className="project-heading" >Projects</h3>
      
      <div className="project-filters">
        <button className={activeBtn === 'All' ? 'project-active-btn' : 'project-filter-btn'} onClick={handleFilterAll}>
          All
        </button>
        <button
          className={activeBtn === 'Full Stack Project' ? 'project-active-btn' : 'project-filter-btn'}
          onClick={() => handleFilter("Full Stack Project")}
        >
          Full Stack
        </button>
        <button
          className={activeBtn === 'FrontEnd Project' ? 'project-active-btn' : 'project-filter-btn'}
          onClick={() => handleFilter("FrontEnd Project")}
        >
          Front-End
        </button>
        <button
         className={activeBtn === 'BackEnd Project' ? 'project-active-btn' : 'project-filter-btn'}
          onClick={() => handleFilter("BackEnd Project")}
        >
          Back-End
        </button>
        <button
         className={activeBtn === 'UI' ? 'project-active-btn' : 'project-filter-btn'}
          onClick={() => handleFilter("UI")}
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
              <button className="project-item-btn-live">
                <Link to={d.details.live} target="_blank" className="project-btn-link" >
          Live
                  </Link>
              </button>

              <button className="project-item-btn-code">
                <Link to={d.details.github} target="_blank" className="project-btn-link" >
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
