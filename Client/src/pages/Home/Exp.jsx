import React from 'react';
import { experties } from '../../assets/home/asset';

const Exp = () => {
  const bgImage = {
    backgroundImage: `url(${experties})`,
  };

  return (
    <section
      aria-label="Our Expertise"
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center md:bg-fixed"
      style={bgImage}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60 z-10" />

      <div className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6">
        <div
          className="
            max-w-3xl mx-auto rounded-3xl border border-white/20 bg-white/10
            p-6 sm:p-8 md:p-12 text-center shadow-2xl backdrop-blur-sm
            transform transition-all duration-700 hover:scale-[1.02]
            hover:backdrop-blur-md hover:shadow-3xl
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide drop-shadow-md text-[#f3a933] sm:text-3xl md:text-4xl">
            Our Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
            Our mission is to revolutionize your workspace by providing the highest-quality AV solutions.
            We empower innovators to connect, collaborate, and share ideas seamlessly. From
            <span className="font-medium text-[#4286b9]"> boardrooms to training rooms </span>
            we design spaces that enable better communication through
            <span className="font-medium text-[#f3a933]"> dynamic audio-visual technology</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Exp;