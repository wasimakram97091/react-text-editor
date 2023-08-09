import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Textsummary from "./components/TextSummary/Textsummary";
import React, { useState } from "react";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} />

      <Routes>
        <Route path="/" element={<Textsummary mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
