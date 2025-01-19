
import React from "react";

export default function CampaignCard({ image, title, raised, remaining, expireDate, progress }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-orange-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">Raised</p>
            <p className="font-bold text-gray-800">${raised.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Goal</p>
            <p className="font-bold text-gray-800">${remaining.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">To End</p>
            <p className="font-bold text-gray-800">{expireDate}</p>
          </div>
        </div>

        {/* Donate Button */}
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};