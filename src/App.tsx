import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
