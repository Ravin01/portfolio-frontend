/* eslint-disable react/prop-types */
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Particle from "../Components/Particle";
import Profile from "../Components/Profile";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
import "../styles/Home.css";
import world from '../assets/source/blackhole.webm'

const Home = ({ setId, setSingleProject }) => {
  return (
    <div className="video-container">
    {/* <video autoPlay muted loop className="home-vdo">
      <source src={world} type="video/webm" />
    </video> */}
    <div className="content-container">
      {/* <Particle /> */}
      <div className="home-background">
        <Profile />
        <About />
        <Skills />
        <Project setId={setId} setSingleProject={setSingleProject} />
        <Contact />
      </div>
    </div>
    <Navbar />
    {/* <Footer /> */}
  </div>
  );
};

export default Home;
