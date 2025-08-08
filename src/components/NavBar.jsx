import React from "react";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/bg.png";
import dogeImage from "../assets/images/sibha.png";
const Navbar = () => {
  return (
    <div
      className="h-screen bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <div className="absolute inset-0 bg-grad from-[#F06500] to-transparent"></div> */}

      <nav className="flex items-center justify-between py-3 px-3 bg-[#000000BF]  text-[#ffffff]">
        <img src={logo} alt="logo" className="w-30" />
        <ul className="hidden md:flex space-x-6 text-sm ">
          <li>
            <a href="#" className="hover:text-[#F06500]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F06500]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F06500]">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F06500]">
              How to buy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F06500]">
              FAQ
            </a>
          </li>
        </ul>
        <button className=" mr-30 text-[#ffffff] px-4 py-2 font-bold rounded-3xl text-sm bg-gradient-to-r from-[#FFA800] to-[#F06500] cursor-pointer hover:bg-orange-600 ">
          Connect Wallet
        </button>
      </nav>
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="max-w-xl mb-20 ml-20">
          <h1 className="text-7xl font-bold  text-[#ffffff]">
            Accumsan <br /> ut orci vitae
          </h1>
          <p className="mt-4 text-base text-[#FFFFFF] w-[400px]">
            Velit eget sit nibh fringilla risus ullamcorper malesuada. Morbi
            nulla suscipit dolor, volutpat quam at urna donec rutrum. In
            vulputate congue arcu in et.
          </p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#FFA800] to-[#F06500] rounded-xl text-[#ffffff] font-semibold cursor-pointer">
            Connect Wallet
          </button>
        </div>
        <div className="max-w-sm  lg:mb-0">
          <img src={dogeImage} alt="Doge Character" className=" mr-50" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
