import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/", color: "hover:bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]", label: "Instagram" },
  { icon: <FaTwitter />, href: "https://twitter.com/", color: "hover:bg-[#1DA1F2]", label: "Twitter" },
  { icon: <FaEnvelope />, href: "mailto:bsbsbelectronics@gmail.com", color: "hover:bg-[#EA4335]", label: "Email" },
  { icon: <FaWhatsapp />, href: "https://wa.me/917806868600", color: "hover:bg-[#25D366]", label: "WhatsApp" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/", color: "hover:bg-[#1877F2]", label: "Facebook" }
];

const contactItems = [
  { title: "Phone", value: "+91 7806868600" },
  { title: "Email", value: "bsbsbelectronics@gmail.com" },
  { title: "Landline", value: "04435 898309" },
  { title: "Address", value: "CG1, Puluthivakkam Pallavan Street, Chennai – 600091, Tamil Nadu" }
];

const Leftcard = () => {
  return (
    <div
      className="p-6 md:p-10 lg:px-12 flex flex-col gap-6 text-center md:text-left bg-gradient-to-l from-[#4286b9] to-[#f3a933] text-white rounded-lg md:rounded-l-xl"
      data-aos="fade-right"
    >
      {/* Header */}
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">CONTACT US</h1>
        <p className="text-sm sm:text-base md:text-base">
          We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to help.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
        {contactItems.map((item, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={100 + index * 50}>
            <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
            <p className={item.title === "Address" ? "text-xs sm:text-sm md:text-base whitespace-pre-line" : ""}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Extra Info */}
      <div className="mt-3 text-xs sm:text-sm md:text-base text-center">
        <p>
          Serving 1000+ travel partners across 65+ cities in India, USA, Canada, and UAE.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-4 w-full flex justify-center ">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 items-center ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white bg-black/20 p-2 sm:p-3 rounded-full text-xl hover:text-white ${link.color} transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leftcard;