import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideHeaderFooter && <Navbar />}
      <div className="min-h-[calc(100vh-160px)] container mx-auto px-5">
        <Outlet />
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
