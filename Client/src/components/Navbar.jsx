import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets/home/asset';
import { HiMenu, HiX } from 'react-icons/hi'; // hamburger & close icons

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    const baseClass =
      "relative text-lg after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full";
    const activeClass = "text-[#4286b9]";
    const inactiveClass = "text-black hover:text-amber-500";

    return location.pathname === path
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  const renderedLinks = useMemo(
    () =>
      navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={getLinkClass(link.path)}
          onClick={() => setMenuOpen(false)} // close menu on click
        >
          {link.name}
        </Link>
      )),
    [location.pathname]
  );

  return (
    <header className="bg-white/40 backdrop-blur-2xl w-full h-20 flex items-center justify-center shadow sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-6" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Company Logo" className="lg:w-[200px] w-[180px] h-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {renderedLinks}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40">
          {renderedLinks}
        </div>
      )}
    </header>
  );
};

export default Navbar;