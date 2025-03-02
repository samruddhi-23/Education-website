import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Ensure this file exists
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Alumni from "./pages/Alumni";
import Navbar from "./components/Navbar"; // Ensure this file exists too!

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}

export default App;