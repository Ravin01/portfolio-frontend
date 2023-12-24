import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
        <i className="fa-solid fa-house"><Link to='#/profile' ></Link></i>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-list"></i>
        <i className="fa-solid fa-folder-open"></i>
        <i className="fa-solid fa-phone"></i>
    </div>
  )
}

export default Navbar