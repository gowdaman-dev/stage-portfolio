import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <main>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
