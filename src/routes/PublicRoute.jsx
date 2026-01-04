import React from "react";
import NavbarPublic from "../components/public/NavbarPublic";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PublicRoute = () => {
  return (
    <>
      <NavbarPublic />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PublicRoute;
