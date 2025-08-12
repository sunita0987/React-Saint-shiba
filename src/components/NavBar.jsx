import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/bg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <nav className="bg-black/90 text-[#ffffff] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-[#FFA800] transition">
              Home
            </a>
            <a href="#" className="hover:text-[#FFA800] transition">
              About
            </a>
            <a href="#" className="hover:text-[#FFA800] transition">
              Tokenomics
            </a>
            <a href="#" className="hover:text-[#FFA800] transition">
              How to buy
            </a>
            <a href="#" className="hover:text-[#FFA800] transition">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-[#FFA800] to-[#F06500] px-4 py-2 cursor-pointer rounded-full font-medium shadow hover:opacity-90 transition">
              Connect Wallet
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block hover:text-[#FFA800] transition">
            Home
          </a>
          <a href="#" className="block hover:text-[#FFA800] transition">
            About
          </a>
          <a href="#" className="block hover:text-[#FFA800] transition">
            Tokenomics
          </a>
          <a href="#" className="block hover:text-[#FFA800] transition">
            How to buy
          </a>
          <a href="#" className="block hover:text-[#FFA800] transition">
            FAQ
          </a>
          <button className="w-full bg-gradient-to-r from-[#FFA800] to-[#F06500] px-4 py-2 rounded-full font-medium shadow hover:opacity-90 transition">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
