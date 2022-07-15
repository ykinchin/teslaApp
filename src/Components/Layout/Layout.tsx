import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout:FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
