import React, { useState } from "react";
import { AC } from "../../../assets/dummy/asset";
import { motion } from "framer-motion";

const products = [
  {
    code: "AC-INV18000BTU",
    title:
      "1.5 Ton Inverter Air Conditioner, Energy Efficient, Turbo Cooling, Wi-Fi Enabled",
    image: AC,
  },
  {
    code: "AC-INV18000B",
    title:
      "1.7 Ton Inverter Air Conditioner, Energy Efficient, Turbo Cooling, Wi-Fi Enabled",
    image: AC,
  },
  {
    code: "AC-INV20000C",
    title: "2 Ton Inverter AC with Advanced Cooling",
    image: AC,
  },
];

const FlipCard = ({ item, flipped, toggleFlip }) => {
  return (
    <motion.div
      className="relative w-full h-[380px] transition-transform duration-700 [transform-style:preserve-3d]"
      animate={{ rotateY: flipped ? 180 : 0 }}
    >
      {/* Front Side */}
      <div
        className="absolute inset-0 bg-white p-4 shadow-md hover:shadow-xl [backface-visibility:hidden] flex flex-col rounded-xl"
        style={{
          border: "2px solid transparent",
          borderImage: "linear-gradient(to right, #4286b9, #f3a933) 1",
          borderRadius: "1rem",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          overflow: "hidden",
        }}
      >
        <p className="text-xs text-gray-400 mb-1">{item.code}</p>
        <h2 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 flex">
          {item.title}
        </h2>

        <div className="flex justify-center my-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-52 h-auto object-contain transition duration-300"
          />
        </div>

        <button
          type="button"
          onClick={toggleFlip}
          className="mt-auto w-full py-2 rounded-full bg-gradient-to-l from-[#4286b9] to-[#f3a933] text-white text-sm font-medium hover:scale-y-105 transition-all duration-300"
        >
          Know More
        </button>
      </div>

      {/* Back Side */}
      <div
        className="absolute inset-0 bg-gray-200 p-4 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col rounded-xl"
        style={{
          border: "2px solid transparent",
          borderImage: "linear-gradient(to right, #4286b9, #f3a933) 1",
          borderRadius: "1rem",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          overflow: "hidden",
        }}
      >
        <h3 className="text-lg font-semibold mb-2">Product Details</h3>
        <ul className="text-sm space-y-1 mb-4 list-disc list-inside">
          <li>1.5 Ton Cooling Capacity</li>
          <li>Inverter Technology for Energy Saving</li>
          <li>Turbo Cooling Mode</li>
          <li>Wi-Fi Smart Control with Mobile App</li>
        </ul>
        <button
          type="button"
          onClick={toggleFlip}
          className="mt-auto w-full py-2 rounded-full bg-black text-white text-sm font-medium hover:scale-90 transition-all duration-300"
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};

const AC_Section = () => {
  const [flippedCards, setFlippedCards] = useState(() => {
      const saved = localStorage.getItem("ac");
      return saved ? JSON.parse(saved) : Array(products.length).fill(false);
    });
    const toggleFlip = (index) => {
      const newFlipped = [...flippedCards];
      newFlipped[index] = !newFlipped[index];
      setFlippedCards(newFlipped);
      localStorage.setItem("ac", JSON.stringify(newFlipped)); // persist to localStorage
    };
  
    return (
      <div className="w-full py-10">
        <h1 className="w-full text-3xl font-medium mb-6">Air Conditioner</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((item, index) => (
            <FlipCard
              key={index}
              item={item}
              flipped={flippedCards[index]}
              toggleFlip={() => toggleFlip(index)}
            />
          ))}
        </div>
      </div>
    );
};

export default AC_Section;