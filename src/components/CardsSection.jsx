"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandsHelping, FaDonate, FaHandshake } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: <FaHandsHelping size={40} />,
    title: "Become a Volunteer",
    description:
      "Join our team and help us make a difference in the community.",
    buttonText: "Join Us Now",
    animation: "fade-up", // Animation type
  },
  {
    id: 2,
    icon: <FaDonate size={40} />,
    title: "Donate to Support",
    description: "Your contributions will go a long way to help those in need.",
    buttonText: "Donate Now",
    animation: "fade-down", // Animation type
  },
  {
    id: 3,
    icon: <FaHandshake size={40} />,
    title: "Become a Partner",
    description: "Collaborate with us to drive positive change.",
    buttonText: "Learn More",
    animation: "fade-left", // Animation type
  },
];

const CardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-8 bg-gray-100">
      <div className="text-center mb-8">
        <p className="text-[#f3a529] font-semibold text-xl">GET INVOLVED</p>
        <h1 className="text-3xl font-bold">Make a Difference</h1>
        <p className="text-gray-600">
          Get involved and help us create a better world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white h-80 w-80 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            data-aos={card.animation} // Apply AOS animation
          >
            <div className="text-[#f3a529] mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="bg-[#f3a529] text-white px-6 py-2 rounded-full hover:bg-orange-500">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
