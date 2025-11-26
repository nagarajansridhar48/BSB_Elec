import React, { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Banner';
import Who from './Who';
import Exp from './Exp';

const Our_Services = lazy(() => import('./OurServices'));

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 120,
      delay: 100,
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <Banner />
      <Who />
      <Exp /> 
       <Suspense
        fallback={
          <div className="flex justify-center py-10 text-gray-600">
            Loading services...
          </div>
        }
      >
        <Our_Services />
      </Suspense>
    </>
  );
};

export default Home;