import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="align-element">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
