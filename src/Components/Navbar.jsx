// import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../styles/Navbar.css'
import logo from "../assets/person/me.jpeg"
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* <div className="nav-logo"> */}
        <img src={logo} alt="" className='nav-logo' />
      {/* </div> */}
      <div className="nav-link">
        <HashLink to='#home' smooth >
      <i className="fa-solid fa-house"></i>
        </HashLink>
        <HashLink to='#about' smooth >
      <i className="fa-solid fa-user"></i>
        </HashLink>
        <HashLink to='#skill' smooth >
      <i className="fa-solid fa-list"></i>
        </HashLink>
        <HashLink to='#project' smooth >
      <i className="fa-solid fa-folder-open"></i>
        </HashLink>
        <HashLink to='#contact' smooth >
      <i className="fa-solid fa-phone"></i>
        </HashLink>
        {/* <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-list"></i>
        <i className="fa-solid fa-folder-open"></i>
        <i className="fa-solid fa-phone"></i> */}
      </div>
    </div>
  )
}

export default Navbar