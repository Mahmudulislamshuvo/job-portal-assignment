import React from "react";
import NavbarPublic from "../components/NavbarPublic";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="bg-background text-foreground antialiased">
      <NavbarPublic />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
