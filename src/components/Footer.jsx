import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact link */}
        <Link to="/contact" className="text-sm hover:underline">
          Contact
        </Link>

        {/* Social links */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.instagram.com/gen_consult_ucla/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/generationalconsulting/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
