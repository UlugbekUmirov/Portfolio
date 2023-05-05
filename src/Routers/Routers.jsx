import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Contact from "../components/Contact";
import About from "../components/About";
import Stack from "../components/Stack";
import Project from "../components/Project";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route>
          <Route path="/stack" element={<Stack />} />
        </Route>
        <Route>
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
