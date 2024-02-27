import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="p-2">
      <div className=" bg-red-600 text-white flex justify-evenly items-center h-[100px] m-3 flex-wrap">
        <p className="flex gap-1 justify-center items-center">
          <FiPhone />
          Toll free 1800 200 1234
        </p>

        <p className="flex gap-1 justify-center items-center">
          <FaFacebook />
          www.facebook.com/cripumps
        </p>
        <p className="flex gap-1 justify-center items-center">
          <AiOutlineGlobal />
          www.crigroups.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
