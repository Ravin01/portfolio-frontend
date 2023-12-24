import { skillsArray } from "../../config"
import '../styles/Skills.css'

const Skills = () => {
    const frontArray = skillsArray.filter((item) => item.type === 'front')
    const backArray = skillsArray.filter((item) => item.type === 'Back')
    const apiArray = skillsArray.filter((item) => item.type === 'api')
    const versionArray = skillsArray.filter((item) => item.type === 'version')
    const packageArray = skillsArray.filter((item) => item.type === 'package')
  return (
    <div className="skill-container">
          <h3 className="skill-heading" >Skills</h3>
          <div className="skill-content">
          {frontArray.map((d,i)=>(
            <div className="skill-front" key={i} >
                <h6>{d.name}</h6>
            </div>
        ))}
        {backArray.map((d,i)=>(
            <div className="skill-back" key={i} >
                <h6>{d.name}</h6>
            </div>
        ))}
        {apiArray.map((d,i)=>(
            <div className="skill-api" key={i} >
                <h6>{d.name}</h6>
            </div>
        ))}
        {versionArray.map((d,i)=>(
            <div className="skill-version" key={i} >
                <h6>{d.name}</h6>
            </div>
        ))}
        {packageArray.map((d,i)=>(
            <div className="skill-package" key={i} >
                <h6>{d.name}</h6>
            </div>
        ))}
          </div>
       
    </div>
  )
}

export default Skills