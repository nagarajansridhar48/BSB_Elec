import React, { useState, Suspense } from 'react';
import { useTransition, animated, config } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

import {
  Auditoriums,
  Board_Rooms,
  Cafeterias,
  Collaboration_Spaces,
  Command_Centres,
  Conference_Rooms,
  Huddle_Spaces,
  Innovative_Solutions,
  Meeting_Rooms,
  Reception_Areas,
  Smart_Homes,
  Training_Rooms
} from "../../assets/Home_service/service_asset";

export const cardsData = [
  { id: 1, title: "Huddle Spaces", description: "Smart, tech-enabled zones for quick collaboration.", image: Huddle_Spaces },
  { id: 2, title: "Meeting Rooms", description: "Professional setups for productive discussions.", image: Meeting_Rooms },
  { id: 3, title: "Conference Rooms", description: "AV-equipped spaces for impactful conferences.", image: Conference_Rooms },
  { id: 4, title: "Board Rooms", description: "Premium environments for strategic decision-making.", image: Board_Rooms },
  { id: 5, title: "Training Rooms", description: "Modern classrooms designed for learning and development.", image: Training_Rooms },
  { id: 6, title: "Auditoriums", description: "Large-scale venues for events and presentations.", image: Auditoriums },
  { id: 7, title: "Reception Areas", description: "Welcoming spaces designed to create lasting first impressions.", image: Reception_Areas },
  { id: 8, title: "Command Centres", description: "High-tech control hubs for monitoring and coordination.", image: Command_Centres },
  { id: 9, title: "Collaboration Spaces", description: "Flexible areas that foster teamwork and idea-sharing.", image: Collaboration_Spaces },
  { id: 10, title: "Smart Homes", description: "Innovative home automation solutions for modern living.", image: Smart_Homes },
  { id: 11, title: "Cafeterias", description: "Comfortable dining spaces for relaxation and networking.", image: Cafeterias },
  { id: 12, title: "Innovative Solutions", description: "Tailored AV and tech solutions for unique business needs.", image: Innovative_Solutions }
];

export default function AnimatedCards() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleItems = cardsData.slice(0, visibleCount);

  // Spring animation for cards
  const transition = useTransition(visibleItems, {
    keys: item => item.id,
    from: { opacity: 0, transform: 'scale(0.95) translateY(30px)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0px)' },
    leave: { opacity: 0, transform: 'scale(0.9) translateY(-20px)' },
    trail: 80,
    config: config.gentle,
  });

  const handleCardClick = (section) => navigate(`/about#${section}`);
  const handleViewMore = () => setVisibleCount(prev => Math.min(prev + 8, cardsData.length));

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-[#4286b9] text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        <div data-aos="fade-up" data-aos-delay="200">
          <Suspense fallback={<div className="text-center py-12">Loading services...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
              {transition((style, item) => (
                <animated.div
                  key={item.id}
                  style={{
                    ...style,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/40 min-h-[220px]"
                  onClick={() => handleCardClick(item.id)}
                  aria-label={`View details of ${item.title}`}
                >
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-4">
                    <div className="bg-white/90 p-4 rounded-xl shadow backdrop-blur-sm">
                      <h3 className="text-black text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </animated.div>
              ))}
            </div>

            {visibleCount < cardsData.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleViewMore}
                  aria-label="View more services"
                  className="group cursor-pointer relative inline-block px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#4286b9] to-[#f3a933] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <span className="relative z-10">View More</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-white/10 group-hover:w-full transition-all duration-300 ease-in-out" />
                </button>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
}