import 'aos/dist/aos.css';
import { who } from '../../assets/home/asset';

const Who = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 md:py-20 px-4 sm:px-6 w-full" aria-labelledby="who-title">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Text section */}
        <div data-aos="fade-right" data-aos-delay="150">
          <h2
            id="who-title"
            className="mb-6 text-3xl font-bold uppercase leading-tight text-[#4286b9] sm:text-4xl md:text-5xl"
          >
            Who Are We?
          </h2>

          <p className="mb-4 text-base leading-relaxed sm:text-lg">
            At <span className="font-semibold text-[#f3a933]">BSBSB Electronics</span>, we transcend the ordinary. We
            transform remote meetings into <strong>immersive, real-world experiences using innovative audio-visual technology.</strong>
          </p>

          <p className="mb-4 text-base leading-relaxed sm:text-lg">
            We are passionate about delivering top-tier solutions that make your ideas come to life.
          </p>

          <p className="text-base leading-relaxed sm:text-lg">
            Whether it's a conference room or a smart home, we specialize in <strong>creating high-end AV setups</strong> that redefine communication.
          </p>
        </div>

        {/* Image section */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="w-full"
        >
          <div>
            <img
              src={who}
              alt="BSBSB Electronics Overview"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;