import { Link } from 'react-router-dom'
import img from '../assets/person/person.png'
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
        <img src={img} alt="" className='about-image' />
        <div className="about-content">
            <h1>About</h1>
            <button className='about-btn' ><Link to='/certificates' className='about-btn-link' >Certificates</Link></button>
        </div>
    </div>
  )
}

export default About