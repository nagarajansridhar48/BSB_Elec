import React, { useEffect, lazy, Suspense } from 'react';
import About_head from './About_head';
import About_Sec from './About_Sec';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

const Service = lazy(() => import('./Service'));
const Who_we = lazy(() => import('./Who_we'));

const About_main = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  // Handle scroll to hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return (
    <div >
      <About_head />
      <About_Sec />
      <Suspense fallback={<div>Loading...</div>}>
        <Service />
        <Who_we />
      </Suspense>
    </div>
  );
};

export default About_main;