/* eslint-disable react/prop-types */
import { Parallax } from "react-scroll-parallax";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
import "../styles/Home.css";


const Home = ({ setId, setSingleProject }) => {
  return (
    <Parallax speed={-10}>

  
    <div className="video-container">

    <div className="content-container">

      <div className="home-background">
        <Profile />
        <About />
        <Skills />
        <Project setId={setId} setSingleProject={setSingleProject} />
        <Contact />
      </div>
    </div>
    <Navbar />
  </div>

  </Parallax>
  );
};

export default Home;
