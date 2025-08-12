import React, { useState } from "react";
import { FAQ_DATA } from "../utils/helper";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] flex flex-col items-center px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">FAQ</h2>
      <div className="max-w-4xl w-full space-y-2">
        {FAQ_DATA.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-[#151313] cursor-pointer transition"
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-[#151313] text-sm text-[#ffffff] opacity-70">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faq;
