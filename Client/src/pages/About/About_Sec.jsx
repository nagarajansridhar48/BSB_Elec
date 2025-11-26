import { who } from "../../assets/home/asset";

const About_Sec = () => {
  // bullet list content defined once for clarity & DRY
  const features = [
    "Life-like real-size images",
    "Excellent eye contact during conversations",
    "HD clarity audio with clear left & right separation",
    "Clear visibility of gestures & body language",
    "Seamless collaboration",
  ];

  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
        {/* Image Section */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={who}
            alt="about section"
            loading="lazy" // ✅ better performance
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] rounded-xl shadow-lg object-cover"
          />

          {/* Quote Box */}
          <div
            className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-12 
                       bg-white shadow-xl rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 
                       w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] text-center"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <h1 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              “We are managed by the masters”
            </h1>
            <p className="text-xs sm:text-sm text-gray-700 mt-1">Social Founder</p>
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left mt-6 sm:mt-8 lg:mt-0"
          data-aos="fade-down"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight tracking-tight">
            Meet Our Team
          </h1>

          <p
            className="text-justify text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We create high-resolution solutions you didn’t think were possible.
            Enriching your experience with no errors, we do things that others don’t.
          </p>

          {/* Bullet List */}
          <ul
            className="list-disc list-inside text-left text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About_Sec;
