import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVGLogo from "../assets/logoInverted.svg";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Login", path: "/login" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function desktopLinks() {
    return navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.path}
        className="py-5 px-3 hover:bg-gray-600 rounded transition duration-300"
      >
        {link.title}
      </Link>
    ));
  }

  function mobileLinks() {
    return navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.path}
        className="block py-2 px-4 text-sm hover:bg-gray-600"
      >
        {link.title}
      </Link>
    ));
  }

  return (
    <nav className="bg-gray-700 text-white px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center py-5 px-2">
              <img src={SVGLogo} alt="" className="h-6 w-6 mr-1" />
              <span className="font-bold">ackathon Global</span>
            </Link>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {desktopLinks()}
          </div>
        </div>
        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {mobileLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
