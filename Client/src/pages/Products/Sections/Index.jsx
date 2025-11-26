import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AC, Fridge, VC, Wash, TV } from "../../../assets/dummy/asset";

const products = [
  // TV 
  {
    code: "TV-SMART43FHD",
    title: "43-inch Smart LED TV, Full HD Display, Built-in Apps, Wi-Fi Enabled",
    image: TV,
    category: 'tv'
  },
  {
    code: "TV-UHD55SMART",
    title: "55-inch 4K Ultra HD Smart TV, HDR10, Voice Remote, Dolby Audio",
    image: TV,
    category: "tv"
  },
  {
    code: "TV-OLED65PRO",
    title: "65-inch OLED Premium Smart TV, Ultra Thin Design, AI Picture Engine",
    image: TV,
    category: "tv"
  },

  // AC
  {
    code: "AC-INV18000BTU",
    title:
      "1.5 Ton Inverter Air Conditioner, Energy Efficient, Turbo Cooling, Wi-Fi Enabled",
    image: AC,
    category: "ac"
  },
  {
    code: "AC-INV18000B",
    title:
      "1.7 Ton Inverter Air Conditioner, Energy Efficient, Turbo Cooling, Wi-Fi Enabled",
    image: AC,
    category: "ac"
  },
  {
    code: "AC-INV20000C",
    title: "2 Ton Inverter AC with Advanced Cooling",
    image: AC,
    category: "ac"
  },

  // VC
  {
    code: "CAM-DSLR24MP",
    title:
      "24MP DSLR Camera with 18-55mm Lens, Full HD Video Recording, Wi-Fi & Bluetooth",
    image: VC,
    category: "vc"
  },
  {
    code: "CAM-MIRRORLESS32",
    title:
      "32MP Mirrorless Camera with Interchangeable Lenses, 4K Video, Fast Autofocus",
    image: VC,
    category: "vc"
  },
  {
    code: "CAM-POCKET20X",
    title:
      "20X Zoom Compact Digital Camera, Optical Image Stabilization, Touchscreen",
    image: VC,
    category: "vc"
  },

  //wash
  {
    code: "WM-FRONT7KG",
    title:
      "7kg Front Load Washing Machine, Inverter Motor, Quick Wash, Energy Efficient",
    image: Wash,
    category: "Wash"
  },
  {
    code: "WM-TOP8KG",
    title:
      "8kg Top Load Washing Machine, Smart Inverter Technology, Auto Restart",
    image: Wash,
    category: "Wash"
  },
  {
    code: "WM-FRONT10KG",
    title:
      "10kg Front Load Washer-Dryer Combo, Steam Wash, Wi-Fi Enabled, Child Lock",
    image: Wash,
    category: "Wash"
  },

  // frige

  {
    code: "FR-DBL360L",
    title:
      "360L Double Door Refrigerator, Frost-Free, Energy Efficient, Convertible Freezer",
    image: Fridge,
    category: "Fridge"
  },
  {
    code: "FR-SGL250L",
    title:
      "250L Single Door Refrigerator, Direct Cool, Toughened Glass Shelves",
    image: Fridge,
    category: "Fridge"
  },
  {
    code: "FR-SIDE560L",
    title:
      "560L Side-by-Side Refrigerator, Inverter Compressor, Smart Wi-Fi Controls",
    image: Fridge,
    category: "Fridge"
  },
];


const FlipCard = ({ item, flipped, toggleFlip }) => {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg h-[380px] sm:h-[400px] md:h-[400px] transition-transform duration-700 [transform-style:preserve-3d]"
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
        <p className="text-xs text-gray-700 mb-1">{item.code}</p>
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-snug line-clamp-2 flex">
          {item.title}
        </h2>

        <div className="flex justify-center my-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-36 sm:w-48 md:w-52 h-auto object-contain transition duration-300"
          />
        </div>

        <button
          type="button"
          onClick={toggleFlip}
          className="mt-auto w-full py-2 rounded-full bg-gradient-to-l from-[#4286b9] to-[#f3a933] text-white text-sm sm:text-base font-medium hover:scale-y-105 transition-all duration-300"
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Product Details</h3>
        <ul className="text-sm sm:text-base space-y-1 mb-4 list-disc list-inside">
          <li>1.5 Ton Cooling Capacity</li>
          <li>Inverter Technology for Energy Saving</li>
          <li>Turbo Cooling Mode</li>
          <li>Wi-Fi Smart Control with Mobile App</li>
        </ul>
        <button
          type="button"
          onClick={toggleFlip}
          className="mt-auto w-full py-2 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:scale-90 transition-all duration-300"
        >
          Back
        </button>
      </div>
    </motion.div>

  );
};


const Banner = ({ text }) => {
  return (
    <motion.div
      className="relative flex items-center"
      initial={{ x: "-100%" }}   // start off-screen to the left
      animate={{ x: 0 }}         // slide to its natural position
      transition={{ duration: 1.5, ease: "easeOut" }} // adjust speed and easing
    >
      <div className="bg-gradient-to-r from-[#4286b9] to-[#f3a933] italic text-black/80 text-xl px-8 py-3 shadow-md skew-x-12 text-center font-semibold uppercase tracking-wide">
        {text}
      </div>
    </motion.div>
  );
};


const Index = () => {
  const [flippedCards, setFlippedCards] = useState(
    () => JSON.parse(localStorage.getItem("tv")) || Array(products.length).fill(false)
  );

  const toggleFlip = (index) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
    localStorage.setItem("tv", JSON.stringify(newFlipped));
  };

  // Group products by category
  const categories = products.reduce((acc, item) => {
    if (!acc[item.category.toLowerCase()]) {
      acc[item.category.toLowerCase()] = [];
    }
    acc[item.category.toLowerCase()].push(item);
    return acc;
  }, {});




  return (
    <div className="relative min-h-screen w-full">
      <div className="w-full lg:py-10 max-w-6xl mx-auto">
        <h1 className="w-full text-3xl font-medium mb-6">All Products</h1>
        {Object.keys(categories).map((category, idx) => (
          <div key={idx} className="mb-12">
            {/* Category Title */}
            <div className="p-2 flex justify-end">
              <Banner text={category} />
            </div>
            {/* Category Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {categories[category].map((item, index) => {
                const globalIndex = products.findIndex(p => p.code === item.code);
                return (
                  <FlipCard
                    key={item.code}
                    item={item}
                    flipped={flippedCards[globalIndex]}
                    toggleFlip={() => toggleFlip(globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Index;
