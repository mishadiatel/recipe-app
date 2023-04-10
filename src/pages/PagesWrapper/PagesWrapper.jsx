import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const PagesWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PagesWrapper;
