import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="py-8">
      <div className="w-full xl:w-container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl">LiquiPe</div>
        <div className="pl-32 space-x-16">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/emiCalculator" className="text-white hover:text-gray-400">
            EMI Calculator
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
