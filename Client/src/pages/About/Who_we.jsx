import { features } from "../../service/about_data";
import ProductionCard from "./ProductionCard";

const Who_we = () => {

    return (
        <div className="w-full py-16 px-6 flex flex-col items-center text-center">
            {/* Section Heading */}
            <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
                data-aos="fade-down"
            >
                Our Products
            </h2>
            <p
                className="mt-4 max-w-2xl text-gray-600 text-sm sm:text-base"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Explore our cutting-edge solutions designed to elevate your business.
            </p>

            {/* Product Cards */}
            <div
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl"
                data-aos="zoom-in-up"
                data-aos-delay="300"
            >
                {features.map((feature, index) => (
                    <ProductionCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Who_we;
