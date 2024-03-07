import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Body/Home";
import About from "./Components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFOund from "./Components/NotFoundpage/NotFOund";
import CardDetail from "./Components/CardDetail/CardDetail";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFOund />} />
        <Route path="/products/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
