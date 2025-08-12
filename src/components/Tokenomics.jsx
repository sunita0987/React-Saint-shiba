import React from "react";
import shibaImg from "../assets/images/sibha.png";
import chartImg from "../assets/images/saint.png";
import { STATS_DATA, LEGEND_DATA, TABLE_DATA } from "../utils/helper";

function Tokenomics() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {STATS_DATA.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111111] p-6 rounded-lg text-center shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">
              when Buying
              <span className="text-white font-semibold">{item.buy}</span>
            </p>
            <p className="text-gray-300">
              when Selling
              <span className="text-white font-semibold">{item.sell}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#111111] p-6 rounded-lg mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={chartImg} alt="Chart" className="w-48 sm:w-60" />
          <div className="space-y-3">
            {LEGEND_DATA.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-sm"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-gray-300 text-sm sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src={shibaImg} alt="Shiba" className="w-48 sm:w-60" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#111111] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left text-gray-300 text-sm sm:text-base">
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">Percentage</th>
              <th className="px-4 py-3">Token Price</th>
              <th className="px-4 py-3">Token Price</th>
              <th className="px-4 py-3">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((row, idx) => (
              <tr
                key={idx}
                className="text-gray-300 hover:bg-[#1a1a1a] text-sm sm:text-base"
              >
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.token}</td>
                <td className="px-4 py-3">{row.percentage}</td>
                <td className="px-4 py-3">{row.tokenPrice}</td>
                <td className="px-4 py-3">{row.tokenPrice2}</td>
                <td className="px-4 py-3">{row.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Tokenomics;
