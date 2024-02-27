import React from "react";
import logo from "../asserts/logo.png";

const Navbar = () => {
  return (
    <div className="flex w-full h-fit items-center justify-center mb-3 ">
      <img src={logo} alt="Logo" className=" h-32" />
    </div>
  );
};

export default Navbar;
