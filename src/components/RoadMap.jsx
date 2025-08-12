import React from "react";
import { ROADMAP_DATA } from "../utils/helper";

export default function Roadmap() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Roadmap
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0  w-1 bg-white h-full hidden sm:block"></div>
        <div className="space-y-16">
          {ROADMAP_DATA.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row items-center sm:items-start"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="flex-1 text-right pr-6 hidden sm:block mr-30">
                    <h3 className="text-xl font-bold">{item.phase}</h3>
                    <p className="text-gray-300 mt-2 ">{item.text}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 border-4 border-black z-10"></div>
                  <div className="sm:hidden text-center mt-10">
                    <h3 className="text-xl font-bold">{item.phase}</h3>
                    <p className="text-gray-300 mt-2">{item.text}</p>
                  </div>
                  <div className="flex-1"></div>
                </>
              ) : (
                <>
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 border-4 border-black z-10"></div>
                  <div className="flex-1 text-left pl-6 hidden sm:block ml-30">
                    <h3 className="text-xl font-bold">{item.phase}</h3>
                    <p className="text-gray-300 mt-2">{item.text}</p>
                  </div>
                  <div className="sm:hidden text-center mt-10">
                    <h3 className="text-xl font-bold">{item.phase}</h3>
                    <p className="text-gray-300 mt-2">{item.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
