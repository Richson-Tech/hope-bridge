'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from './Slide';

const slides = [
  {
    id: 1,
    image: '/images/image3.jpg',
    caption: 'Together, We Can Make a Difference',
  },
  {
    id: 2,
    image: '/images/image1.jpg',
    caption: 'Bringing Hope to Every Heart',
  },
  {
    id: 3,
    image: '/images/image2.jpg',
    caption: 'Join Hands to Transform Lives',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          <Slide
            image={slides[currentSlide].image}
            caption={slides[currentSlide].caption}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={previousSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default HeroSection;
