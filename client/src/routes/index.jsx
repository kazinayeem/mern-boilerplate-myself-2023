import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../pages/header";
import Contact from "../pages/contact";
import Body from "../pages/body";
export default function MainRouter() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
