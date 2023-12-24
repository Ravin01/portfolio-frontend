import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import { useState } from "react";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";


function App() {
  const [id, setId] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setId={setId} />} />
          <Route path={`${id}`} element={<Details id={id} />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
