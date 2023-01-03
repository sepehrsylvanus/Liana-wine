import React from "react";
import Home from "./components/home/Home";
import './app.css'
import { Routes,Route } from "react-router-dom";
import About from "./components/about/About";
import Uni from "./components/uni/Uni";


const App = () => {
  return (
    <div className="allPages">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/university" element={<Uni/>}/>
      </Routes>
    </div>
  );
};

export default App;
