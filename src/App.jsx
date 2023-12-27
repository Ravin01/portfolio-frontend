import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import { useState } from "react";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  const [id, setId] = useState("");
  const [singleProject, setSingleProject] = useState({})
  return (
    <>
    <ParallaxProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setId={setId} setSingleProject={setSingleProject} />} />
          <Route path={`${id}`} element={<Details singleProject={singleProject} />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </BrowserRouter>
      
    </ParallaxProvider>
    </>
  );
}

export default App;
