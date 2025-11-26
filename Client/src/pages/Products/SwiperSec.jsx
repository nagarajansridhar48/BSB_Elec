import asset from "../../assets/about/about_asset";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  asset.about1,
  asset.about2,
  asset.about3,
  asset.about4,
  asset.about5
];

const SwiperSec = () => {
  return (
    <section className="relative w-full">
      {/* Swiper Carousel */}
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-72 sm:h-0 md:h-[500px] lg:h-[600px]" // hide height on small screens
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover hidden sm:block md:block lg:block"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-90"
          data-aos="zoom-in"
        >
          Products
        </h1>
        <p
          className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We are managed by the masters. We collaborate with tycoons in the industry
          to deliver the best output. Make meetings easier with us.
        </p>
      </div>
    </section>
  );
};

export default SwiperSec;