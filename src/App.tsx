import React from "react";
import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

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
