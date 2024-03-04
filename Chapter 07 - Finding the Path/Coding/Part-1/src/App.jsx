import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./Components/About/About";
import CartPage from "./Components/CartPage/CartPage";
import Error from "./Components/ErrorPAge/Error";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
