import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
function MainLayout(){
    return (
      <>
      <NavBar />
      <Outlet />
      <Footer />
      </>
    );
}
export default MainLayout;