// App.jsx
import React from "react";
import shibaImg from "../assets/images/sibha.png";

function HeroSection() {
  return (
    <div className="bg-[#000000] text-[#ffffff]">
      <section className="px-6 md:px-16 py-12 flex justify-center">
        <div className="bg-[#111111] p-6 rounded-lg shadow-lg max-w-7xl border-1 border-[#ffffff]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Cursus ligula habitant sed integer.
          </h2>
          <p className="text-[#ffffff] opacity-70 leading-relaxed">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
            aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna
            tellus imperdiet tortor. Volutpat nec vulputate diam tristique
            facilisi in turpis vel elit.
          </p>
          <p className="text-[#ffffff] opacity-70 leading-relaxed mt-4">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
            aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna
            tellus imperdiet tortor. Volutpat nec vulputate diam tristique
            facilisi in turpis vel elit.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-16 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cursus ligula habitant sed integer.
          </h2>
          <p className="text-[#ffffff] opacity-70 mb-6">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus.
          </p>
          <button className="bg-gradient-to-r from-[#FFA800] to-[#F06500] px-6 py-3 rounded-3xl font-semibold">
            Learn more
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={shibaImg}
            alt="Shiba"
            className="w-66 sm:w-72 md:w-80 lg:w-96"
          />
        </div>
      </section>
    </div>
  );
}
export default HeroSection;
