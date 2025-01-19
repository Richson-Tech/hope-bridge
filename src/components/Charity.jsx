"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CharitySection = () => {
  const tags = [
    "Audio",
    "Charity",
    "Donation",
    "Education",
    "Environment",
    "future",
    "Generation",
    "Helping",
    "Islam",
    "Poverty",
    "Sponser",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50">
          <Image
            src="/charity.avif"
            alt="Hero Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <p className="text-orange-400 mb-4 text-3xl font-bold">GET INVOLVE</p>
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-8">
            We've Funded 12,503 Charity Projects For 25M People Around The World
          </h1>
          <button className="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-colors">
            Get Involve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
