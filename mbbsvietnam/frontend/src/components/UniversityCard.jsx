import React, { useState } from "react";

export default function UniversityCard({ university = {} }) {
  const { name, shortName, fee, image, highlights = [] } = university;
  const [imgErr, setImgErr] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden mt-12 max-w-4xl mx-auto">
      {/* Image */}
      <div className="relative">
        {!imgErr ? (
<img
  src={image}
  alt={name}
  className="w-full h-64 object-cover rounded-2xl"
/>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600 text-2xl font-bold">
            {shortName ?? name?.slice(0, 3)}
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-[#CC1B1B] text-white px-4 py-2 rounded-lg shadow-md">
          ₹ {fee} / Year
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-[#CC1B1B]">
          {name}
          {shortName && (
            <span className="text-gray-600 font-medium"> ({shortName})</span>
          )}
        </h2>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 shadow-sm"
            >
              <span className="text-lg">{h.icon}</span>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 px-5 py-3 bg-[#CC1B1B] text-white font-bold rounded-lg hover:bg-red-700 transition">
            Apply Now →
          </button>
          <button className="flex-1 px-5 py-3 bg-[#F5C518] text-black font-bold rounded-lg hover:bg-yellow-400 transition">
            Download Brochure
          </button>
        </div>
      </div>
    </article>
  );
}