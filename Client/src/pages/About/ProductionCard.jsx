import React from 'react';
import { motion } from "framer-motion";

const ProductionCard = ({ image, title, desc }) => {
    return (
        <motion.div
            className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Section */}
            <div className="w-full bg-gray-200 overflow-hidden aspect-[4/3]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Text Section */}
            <motion.div
                className="flex flex-col justify-between flex-grow bg-gradient-to-r from-[#f3a933] to-[#f08c2e] p-4 sm:p-5 md:p-6 text-white text-center"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide">
                    {title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90">
                    {desc}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default ProductionCard;
