import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import About from "./About";
import BookingLayout from "./BookingLayout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Congrats from "./Congrats";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingLayout />}>
          <Route index element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="congrats" element={<Congrats />} />
        </Route>
      </Route>
    </Routes>
  );
}
