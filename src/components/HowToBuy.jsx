import React from "react";
import shibaswapImage from "../assets/images/table.png";
import { STEPS_DATA } from "../utils/helper";

const HowToBuy = () => {
  return (
    <section className="bg-[#1D1A1A] text-[#ffffff] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">How to Buy</h2>
          <p className="text-[#ffffff] opacity-70 mb-10">
            Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
            viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
            Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
            etiam sed. Cursus donec porttitor fames tellus.
          </p>
          <div className="space-y-4">
            {STEPS_DATA.map((step) => (
              <div
                key={step.number}
                className={`flex items-center gap-4 p-4 rounded-full hover:bg-[#151313]  transition-all duration-300 ${
                  step.active ? "bg-[#0C0B0B]" : "bg-[#151313]"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center  rounded-full font-bold ${
                    step.active
                      ? "bg-gradient-to-r from-[#FFA800] to-[#F06500] text-[#ffffff]"
                      : "bg-[#ffffff] text-[#000000]"
                  }`}
                >
                  {step.number}
                </div>
                <div>
                  <p className="font-semibold text-xl">{step.title}</p>
                  <p className="text-[#FFFFFF] opacity-70 text-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src={shibaswapImage}
            alt="Shibaswap dashboard"
            className="rounded-lg w-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
