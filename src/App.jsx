import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import { useState } from "react";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";


function App() {
  const [id, setId] = useState("");
  const [singleProject, setSingleProject] = useState({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setId={setId} setSingleProject={setSingleProject} />} />
          <Route path={`${id}`} element={<Details singleProject={singleProject} />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
