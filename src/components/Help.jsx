"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHandsHelping,
  FaBook,
  FaHeartbeat,
  FaTree,
  FaSchool,
  FaPeopleCarry,
  FaHome,
  FaWater,
  FaGift,
  FaSeedling,
} from "react-icons/fa";

const services = [
  {
    name: "Community Support",
    icon: <FaHandsHelping size={64} className="text-blue-600" />,
  },
  {
    name: "Education Initiatives",
    icon: <FaBook size={64} className="text-green-600" />,
  },
  {
    name: "Health Care",
    icon: <FaHeartbeat size={64} className="text-red-600" />,
  },
  {
    name: "Environmental Conservation",
    icon: <FaTree size={64} className="text-teal-600" />,
  },
  {
    name: "School Projects",
    icon: <FaSchool size={64} className="text-orange-600" />,
  },
  {
    name: "Disaster Relief",
    icon: <FaPeopleCarry size={64} className="text-purple-600" />,
  },
  {
    name: "Shelter Assistance",
    icon: <FaHome size={64} className="text-gray-600" />,
  },
  {
    name: "Water Projects",
    icon: <FaWater size={64} className="text-blue-400" />,
  },
  { name: "Donations", icon: <FaGift size={64} className="text-yellow-500" /> },
  {
    name: "Sustainable Farming",
    icon: <FaSeedling size={64} className="text-green-500" />,
  },
];

const Help = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
          Our Impactful Supports
        </h2>
        <div
          className="flex overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="20000"
          data-aos-easing="linear"
          data-aos-repeat="true"
        >
          <div className="flex animate-slide">
            {services.concat(services).map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                className="flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-110"
              >
                <div className="flex items-center justify-center rounded-md shadow-md hover:shadow-lg bg-white p-6">
                  {service.icon}
                </div>
                <p className="text-center mt-4 text-lg font-semibold">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
