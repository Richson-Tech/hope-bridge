'use client';
import { useState, useEffect } from 'react';
import Slide from './Slide';

const slides = [
  {
    id: 1,
    image: '/images/slide01.jpg',
    caption: 'Together, We Can Make a Difference',
  },
  {
    id: 2,
    image: '/images/slide02.jpg',
    caption: 'Bringing Hope to Every Heart',
  },
  {
    id: 3,
    image: '/images/slide03.jpg',
    caption: 'Join Hands to Transform Lives',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Slide image={slide.image} caption={slide.caption} />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
