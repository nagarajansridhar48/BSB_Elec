import React from "react";
import "aos/dist/aos.css";
import { banner } from "../../assets/home/asset";

const Banner = () => {
  return (
    <section
      className=" w-full h-auto inset-0 overflow-hidden bg-gradient-to-t from-black/40 to-black/20"
      data-aos="fade-in"
      data-aos-delay="100 "
    >
      {/* Background Image */}
      <img
        src={banner}
        alt="Banners"
        className="w-full h-   object-cover"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default Banner;