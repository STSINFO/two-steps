import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="app">
      <Nav />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
