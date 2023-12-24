/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { projectArray } from "../../config"
import '../styles/Details.css'

const Details = ({id}) => {
    const [project, setProject] = useState({})

    useEffect(()=>{
        const data = projectArray.find((item) => item.id === id)
        setProject(data)
    },[id])

  return (
    <>
    <div className="pro-container">
        <div className="pro-con">
        <h4>{project.name}</h4>
        </div>
    </div>
    </>
  )
}

export default Details