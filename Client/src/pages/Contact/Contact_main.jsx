import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Leftcard from './Leftcard';
import Rightcard from './Rightcard';
import { useLocation } from 'react-router-dom';

const Contact_main = () => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //     easing: 'ease-out-quad',
  //   });
  //   AOS.refresh();
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // }, [pathname]);

  return (
    <div className="min-h-screen w-full flex justify-center items-start md:items-center  bg-gray-50">
      <div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 shadow-lg rounded-xl overflow-hidden bg-white p-3 md:p-4"
        data-aos="fade-up"
      >
        <Leftcard />
        <Rightcard />
      </div>
    </div>
  );
};

export default Contact_main;
