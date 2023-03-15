import "./Style/App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from "./Components/Home.jsx";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />    {/* missmatched url path gula ke replace kore dibe / diye => it will always shows home path  */}
      </Routes>
    </>
  );
}

export default App;
