import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/bg.png";
import shibaImg from "../assets/images/sibha.png";
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
      <section className="relative overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10">
          <div className="max-w-xl text-white mt-8 md:mt-0 md:ml-10 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Accumsan <br /> ut orci vitae
            </h1>
            <p className="mt-4 text-gray-200 max-w-sm mx-auto md:mx-0">
              Velit eget sit nibh fringilla risus ullamcorper malesuada. Morbi
              nulla suscipit dolor, volutpat quam at urna donec rutrum. In
              vulputate congue arcu in et.
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#FFA800] to-[#F06500] px-6 py-3 rounded-3xl text-lg font-bold cursor-pointer">
              Connect Wallet
            </button>
          </div>
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src={shibaImg}
              alt="Shiba"
              className="w-56 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* <section className="px-6 md:px-16 py-10">
        <div className="bg-[#111111] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Cursus ligula habitant sed integer.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Una, aliquam volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus quis.
            Arcu et enim eget pellentesque neque. Nibh pellentesque lobortis
            eros sed. Cursus donec porttitor pharetra facilisi. At nunc donec
            eu, dui quis dui massa. Urna cursus nisi morbi magna tellus
            imperdiet tortor. Vulputate nec vulputate diam tristique facilisi in
            turpis velit laoreet id.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Navbar;
