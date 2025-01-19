import React from "react";
import CampaignCard from "./CampaignCard";

const CampaignSection = () => {
  const campaigns = [
    {
      image: "/campaign/boys.webp",
      title: "Financial Help For Poor Families",
      raised: 7000,
      remaining: 10000,
      expireDate: "19 Jun, 2021",
      progress: 70,
    },
    {
      image: "/campaign/girls.webp",
      title: "Send Child To School For Education",
      raised: 8500,
      remaining: 10000,
      expireDate: "19 Jun, 2021",
      progress: 85,
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-orange-500 text-lg lg:text-4xl font-bold uppercase">
            Recent Campaign
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            Donate To Charity Campaign Around The World!
          </h2>
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>

        {/* View All Campaigns Button */}
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white text-lg px-6 py-3 rounded-lg transition duration-300 delay-150 hover:bg-orange-600 hover:scale-110">
            View All Campaigns
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
