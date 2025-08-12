import React from "react";
import buyImg from "../assets/images/table.png";
import { STEPS_DATA } from "../utils/helper";

function HowToBuy() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Buy</h2>
          <p className="text-[#ffffff] opacity-70 mb-8 max-w-lg">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus.
          </p>
          <div className="space-y-4">
            {STEPS_DATA.map((step, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-full ${
                  step.active ? "bg-[#0C0B0B]" : "bg-[#151313]"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full  font-bold mr-4 ${
                    step.active
                      ? "bg-gradient-to-r from-[#FFA800] to-[#F06500]"
                      : "bg-[#ffffff] text-[#000000]"
                  }`}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className={`font-bold ${
                      step.active ? "text-[#ffffff]" : "text-[#ffffff]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#ffffff] opacity-70 text-sm">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={buyImg}
            alt="How to Buy"
            className="rounded-lg shadow-lg w-full md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
export default HowToBuy;
