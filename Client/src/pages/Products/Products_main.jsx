import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperSec from "./SwiperSec";
import Sections from "./Sections";
import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Products_main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <SwiperSec />

      <div className="flex flex-col lg:flex-row lg:gap-5 px-4 md:px-8 py-6">
        {/* Mobile Menu Button */}
        <div
          className="flex lg:hidden items-center gap-2 mb-4 
             px-3 py-2 rounded-lg bg-gray-100 cursor-pointer 
             hover:bg-gray-200 transition"
          onClick={() => setOpen(!open)}
        >
          <IoMenu size={28} className="text-gray-700" />
          <span className="text-gray-800 font-medium">Menu</span>
        </div>

        <aside
          className={`
            md:w-1/4 w-full
            ${open ? "block" : "hidden"} lg:block
            bg-white md:bg-transparent rounded-lg md:rounded-none
            shadow-md md:shadow-none
            mb-6 md:mb-0
          `}
        >
          <Sections closeMenu={() => setOpen(false)} />
        </aside>

        {/* Main Outlet Content */}
        <main className="lg:w-3/4 w-full lg:p-4 md:p-6 bg-white rounded-lg shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Products_main;