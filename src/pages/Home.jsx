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

const Home = ({ setId }) => {
  return (
    <div className="home-container">
      <Particle />
      <div className="home-background">
        <Profile />
        <About />
        <Skills />
        <Project setId={setId} />
        <Contact />
      <Navbar />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
