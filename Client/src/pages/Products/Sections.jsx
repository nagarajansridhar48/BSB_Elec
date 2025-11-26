import React from "react";
import { NavLink } from "react-router-dom";

const productLinks = [
  { to: "/products/tv", label: "Business Display & Consumer TV" },
  { to: "/products/ac", label: "AC Products" },
  { to: "/products/vc", label: "VC Products" },
  { to: "/products/wash", label: "Washing Machines" },
  { to: "/products/fridge", label: "Consumer Products" },
];

const Sections = ({setOpen}) => {
  return (
    <div
      className="
        w-full                 
        py-8 md:py-12
        sticky top-0 z-10
        bg-white shadow-sm
        rounded-lg md:rounded-xl
      "
    >
      {/* Heading Section */}
      <div className="w-full text-center relative py-4">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[3px] w-24 sm:w-36 md:w-32 rounded-full bg-gradient-to-r from-[#4286b9] to-[#f3a933]"></div>
        <h1 className="inline-block text-2xl lg:text-2xl sm:text-5xl md:text-xl font-extrabold tracking-wide bg-gradient-to-r from-[#4286b9] to-[#f3a933] bg-clip-text text-transparent drop-shadow-lg">
          Products
        </h1>
      </div>

      {/* Links Section */}
      <div
        className="
          flex flex-col sm:flex-row sm:flex-wrap
          justify-center md:justify-start
          items-center
          px-4 sm:px-6 py-6
          gap-3 sm:gap-4
          text-base sm:text-lg font-medium
          max-w-6xl  
        "
      >
        {productLinks.map(({ to, label }, index) => (
          <NavLink
            key={index}
            to={to}
            end={to === "/products/"}
            onClick={()=>setOpen(false)}
            aria-label={`Navigate to ${label}`}
            className={({ isActive }) =>
              `
        w-full sm:w-auto lg:w-full        
        text-center
        px-4 sm:px-5 py-2 sm:py-3
        rounded-xl
        border border-gray-200
        shadow-sm
        transform transition duration-300 ease-in-out
        ${isActive
                ? "bg-gradient-to-r from-[#4286b9] to-[#f3a933] text-white shadow-md"
                : "bg-white text-gray-800 hover:shadow-md hover:text-white hover:bg-gradient-to-r from-[#4286b9] to-[#f3a933]"
              }
      `
            }
          >
            {label}
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Sections;
