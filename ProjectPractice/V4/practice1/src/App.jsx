// import React, { Suspense, lazy } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Body/Home";
import About from "./Components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFOund from "./Components/NotFoundpage/NotFOund";
import CardDetail from "./Components/CardDetail/CardDetail";
import { lazy } from "react";

// const About = lazy(() => import("./Components/About/About"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loding</h1>}>
              <About />
            </Suspense>
          }
        /> */}
        <Route path="*" element={<NotFOund />} />
        <Route path="/products/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
