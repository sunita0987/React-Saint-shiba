import React from "react";
import dogeImage from "../assets/images/sibha.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000000] text-white font-sans">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#ffffff]">
          <h2 className="text-3xl font-semibold mb-4">
            Cursus ligula habitant sed integer.
          </h2>
          <p className="text-[#ffffff] opacity-70 mb-2 w-[950px]">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
            aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna
            tellus imperdiet tortor. Volutpat nec vulputate diam tristique
            facilisi in turpis vel elit.
          </p>
          <p className="text-[#ffffff] opacity-70">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
            aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna
            tellus imperdiet tortor. Volutpat nec vulputate diam tristique
            facilisi in turpis vel elit.
          </p>
        </div>
      </div>
      <div className="  max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 py-20">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Cursus ligula habitant sed integer.
          </h2>
          <p className="text-[#ffffff] opacity-70 mb-6">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus.
          </p>
          <button className="bg-gradient-to-r from-[#FFA800] to-[#F06500]  text-[#ffffff] cursor-pointer  px-5 py-2 rounded-3xl font-semibold transition duration-300">
            Learn more
          </button>
        </div>
        <div className="flex-1 text-center">
          <img
            src={dogeImage}
            alt="Doge character"
            className="max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
