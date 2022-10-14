import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Banner } from "./components/Banner";
import Ui from "./components/ui/UI";
import React, { Component } from "react";

const RomCham = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Home />
      <div className="mt-5">
        <Ui />
      </div>
    </>
  );
};

export default RomCham;
