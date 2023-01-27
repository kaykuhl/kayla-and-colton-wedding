import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar"
import './App.css'

function App() {
  return (
    <Router>
      
      <div>
        <NavBar />
        <Routes><Route path="/" element={<Home/>} /></Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
