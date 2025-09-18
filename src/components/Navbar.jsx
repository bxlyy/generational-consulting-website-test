import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <div className="text-2xl transform scale-y-125 font-georgia text-gray-900">
          <Link to="/">GENERATIONAL CONSULTING</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-inter text-lg">
          <li>
            <Link
              to="/"
              className="text-sm hover:text-gray-900 transition-colors duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-sm hover:text-gray-900 transition-colors duration-200"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sm hover:text-gray-900 transition-colors duration-200"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        {/* Mobile Menu Placeholder */}
        {/* <div className="md:hidden"> */}
        {/* You can add a hamburger icon here later */}
        {/* <button className="text-gray-700 hover:text-gray-900">&#9776;</button> */}
        {/* </div> */}
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white shadow-md px-6 py-4 space-y-4">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
