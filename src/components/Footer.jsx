import React from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center bg-black/80 text-white mt-6">
      <div className="p-4 space-y-2 text-xs">
        <p>Copyright © 2016, PT Company</p>
        <div className="flex justify-center space-x-2">
          <FaFacebookSquare size={20} />
          <FaTwitterSquare size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
