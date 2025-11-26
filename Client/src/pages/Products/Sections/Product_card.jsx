import { motion } from "framer-motion";
import React, { useState } from "react";
import { TV } from '../../../assets/dummy/asset'
const ProductCard = ({
  code = "TV-BD100",
  title = "55 Inch 4K TV Board Display, AI Optimized, Ultra-Thin Design, HDR10+, Smart Features",
  image = TV
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-72 h-[320px] perspective">
      <div className="w-full h-auto py-10">
        <h1 className="w-full text-3xl font-medium"> Business Display</h1>
      </div>
      <motion.div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        <div
          className="absolute inset-0 bg-white text-white p-4 shadow-md hover:shadow-xl [backface-visibility:hidden] flex flex-col"
          style={{
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #4286b9, #f3a933) 1",
            borderRadius: "1rem",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            overflow: "hidden", 
          }}
        >
          <p className="text-xs text-gray-400 mb-1">{code}</p>
          <h2 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 flex">
            {title}
          </h2>
          <div className="flex justify-center my-3">
            <img
              src={image}
              alt={title}
              className="w-52 h-auto object-contain transition duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
            className="w-full py-2 rounded-full  bg-gradient-to-l from-[#4286b9] to-[#f3a933] text-white text-sm font-medium hover:bg-blue-700 cursor-pointer hover:scale-y-105 transition-all transform duration-300"
          >
            Know More
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-200 p-4 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col"
          style={{
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #4286b9, #f3a933) 1",
            borderRadius: "1rem",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)", // ensures rounded clipping
            overflow: "hidden", // helps with child elements
          }}>
          <h3 className="text-lg font-semibold mb-2">Product Details</h3>
          <ul className="text-sm  space-y-1 mb-4 list-disc list-inside">
            <li>Ultra-thin TV design</li>
            <li>AI Optimized Display</li>
            <li>HDR10+ for rich contrast</li>
            <li>Smart features with voice control</li>
          </ul>
          <p className="text-xs mb-5">
            This product is engineered for modern business and home needs, offering immersive visuals and long-lasting performance.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="mt-auto w-full py-2 rounded-full bg-black text-white text-sm font-medium cursor-pointer transition-all transform hover:scale-90 duration-300"
          >
            Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
