import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-4">
        {/* branding */}
        <div className="flex items-center space-x-3">
          {/* logo */}
          <Link to="/">
            <img
              src="/assets/clublogo.png"
              alt="Generational Consulting Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* gen con text */}
          <Link
            to="/"
            className="text-xl transform scale-y-125 md:text-xl font-georgia text-gray-900 hidden sm:inline-block"
          >
            GENERATIONAL CONSULTING
          </Link>
        </div>

        {/* desktop links */}
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

        {/* mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            &#9776; {/* hamburger icon */}
          </button>
        </div>
        {/* Mobile Menu Placeholder */}
        {/* <div className="md:hidden"> */}
        {/* You can add a hamburger icon here later */}
        {/* <button className="text-gray-700 hover:text-gray-900">&#9776;</button> */}
        {/* </div> */}
      </nav>
      {/* mobile menu */}
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
