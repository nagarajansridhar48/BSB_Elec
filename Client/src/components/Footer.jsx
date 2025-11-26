import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-pink-500", label: "Instagram" },
  { icon: <FaFacebookF />, href: "https://facebook.com", color: "hover:text-blue-500", label: "Facebook" },
  { icon: <FaWhatsapp />, href: "https://wa.me/917806868600", color: "hover:text-green-500", label: "WhatsApp" },
  { icon: <FaTwitter />, href: "https://twitter.com", color: "hover:text-sky-400", label: "Twitter" },
  { icon: <FaEnvelope />, href: "mailto:bsbsbelectronics@gmail.com", color: "hover:text-red-400", label: "Email" }
];

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" }
];

const contactInfo = [
  { type: "Phone", value: "+91 7806868600", href: "tel:+917806868600" },
  { type: "Landline", value: "04435 898309", href: "tel:04435898309" }
];

const Footer = () => {
  return (
    <footer className="relative w-full text-white bg-gray-900 py-10">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center md:text-left">
          {/* Logo & Social Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                BSBSB
              </span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Empowering Connections Through Technology
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`transition-colors duration-200 ${social.color} text-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Page Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-base text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h3>
            {contactInfo.map((contact, index) => (
              <div key={index}>
                <p className="text-xs uppercase text-gray-400">{contact.type}</p>
                <a
                  href={contact.href}
                  className="text-base text-gray-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Our Location
            </h3>
            <address className="not-italic text-base text-gray-400 space-y-2">
              <p>CG1, Puluthivakkam Pallavan Street,</p>
              <p>Chennai – 600091,</p>
              <p>Tamil Nadu, India</p>
              <a
                href="https://maps.google.com?q=CG1+Puluthivakkam+Pallavan+Street+Chennai+600091"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-amber-400 hover:text-amber-300 text-sm transition-colors duration-200"
              >
                View on map →
              </a>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BSBSB Technologies. All rights reserved by{" "}
            <a
              href="http://www.flaavin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              flaavin.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
