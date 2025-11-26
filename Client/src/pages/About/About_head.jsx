import assets from "../../assets/about/about_asset";
import "./about.css";

const About_head = () => {
  const aboutImages = [
    assets.about1,
    assets.about2,
    assets.about3,
    assets.about4,
  ];

  return (
    <div className="pb-5">
      {/* Header */}
      <div
        className="relative min-h-[450px] w-full overflow-hidden bg-gradient-to-r from-[#4286b9] to-[#f3a933] flex flex-col items-center"
        data-aos="fade-down"
      >
        <div className="mt-32 sm:mt-36 text-center px-4 text-gray-900">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-85"
            data-aos="zoom-in"
          >
            About Us
          </h1>
          <p
            className="mt-2 text-sm sm:text-base md:text-lg py-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are managed by the masters. We collaborate with tycoons in the
            industry to deliver the best output. Make meetings easier with us.
          </p>
        </div>
      </div>

      {/* Images */}
      <div
        className="relative flex flex-wrap gap-4 -mt-24 lg:-mt-24 justify-center items-center px-4"
        data-aos="fade-up"
      >
        {aboutImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`about-${index + 1}`}
            className={`w-28 sm:w-40 md:w-52 rounded-lg shadow-md ${
              index % 2 === 0 ? "image1" : "image2"
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 400}
          />
        ))}
      </div>

      {/* Commitment Section */}
      <div
        className="w-full flex flex-col items-center justify-center mt-20 px-6 md:px-20"
        data-aos="fade-up"
      >
        <h1
          className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center pb-10"
          data-aos="fade-up"
        >
          Our Commitment
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <div className="w-full md:w-1/2">
            <p
              className="text-justify text-sm sm:text-base md:text-lg lg:text-xl"
              data-aos="fade-down"
            >
              Make a meeting more easier with us. We are and will always be in
              your business by resolving pain products of collaboration. Beat
              local audio or video with a specialization in the domain of
              immersive video collaboration and learning points.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p
              className="text-justify text-sm sm:text-base md:text-lg lg:text-xl"
              data-aos="fade-up"
            >
              We connect the world on the principle of innovation and
              excellence. Giving the personal best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_head;