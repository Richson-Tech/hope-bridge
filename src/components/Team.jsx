'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Folorunsho Ahmed",
      role: "DIRECTOR",
      description: "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
      image: "/team/ahmed.JPG"
    },
    {
      name: "Jenny White",
      role: "VOLUNTEER",
      description: "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
      image: "/team/team2.avif"
    },
    {
      name: "James Smith",
      role: "VOLUNTEER",
      description: "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
      image: "/team/team3.webp"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for smooth animations
      once: true, // Animations will only trigger once
    });
  }, []);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2">MEET OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Optimistic Volunteer</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg bg-white shadow-lg"
              data-aos="fade-up" // AOS fade-up animation
            >
              {/* Image Container */}
              <div className="relative h-[400px] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-orange-400 font-medium mb-1">{member.role}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex flex-col gap-3">
                    <button className="w-8 h-8 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
                      <Facebook size={16} />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
                      <Instagram size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
