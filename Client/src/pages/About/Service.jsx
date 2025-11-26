import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, containerVariants, fadeDown } from "../../service/motion";
import { serviceSections } from "../../service/service_data";

const Service = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind lg breakpoint
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.h1
        className="p-8 text-center text-4xl sm:text-5xl font-medium"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Services
      </motion.h1>

      {serviceSections.map((sec) => (
        <motion.section
          key={sec.id}
          id={sec.id}
          className="rounded-xl py-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Content */}
          <div className="flex flex-col lg:flex-row justify-center w-full px-5 lg:px-25">
            {["right", "left"].includes(sec.align) && (
              <>
                {/* Image Section */}
                <motion.div
                  className={`w-full lg:w-1/2 p-5 flex justify-center items-center ${sec.align === "right" ? "order-1 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  variants={isDesktop ? (sec.align === "right" ? fadeLeft : fadeRight) : fadeUp}
                  whileHover={isDesktop ? { scale: 1.08, rotate: sec.align === "right" ? -1.5 : 1.5 } : {}}
                >
                  <motion.img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full sm:w-[80%] h-[250px] sm:h-[300px] md:h-[320px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className={`w-full lg:w-1/2 p-5 flex flex-col ${sec.align === "right" ? "order-2 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  variants={isDesktop ? (sec.align === "right" ? fadeRight : fadeLeft) : fadeUp}
                >
                  {/* Title */}
                  <motion.div className={`py-4 flex ${sec.align === "right" ? "justify-end" : "justify-start"}`} variants={fadeUp}>
                    <p
                      className={`bg-black text-white font-bold text-xl sm:text-2xl w-[90%] uppercase p-3 shadow-lg ${sec.align === "right" ? "text-right pe-4" : "text-left ps-4"
                        }`}
                    >
                      {sec.title}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <p className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-justify ${sec.align === "left" ? "lg:text-start" : ""}`}>
                    {sec.description}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default Service;
