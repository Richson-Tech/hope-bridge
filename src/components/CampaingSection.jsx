import React from "react";

const CampaignCard = ({
  image,
  title,
  raised,
  remaining,
  expireDate,
  progress,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

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
            <p className="font-bold text-gray-800">
              ${raised.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Goal</p>
            <p className="font-bold text-gray-800">
              ${remaining.toLocaleString()}
            </p>
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
    <section id="events">
      <div className="py-10 bg-gray-100 container">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div
            className="text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3
              className="text-orange-500 text-lg lg:text-4xl font-bold uppercase"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Recent Campaign
            </h3>
            <h2
              className="text-3xl font-bold text-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Donate To Charity Campaign Around The World!
            </h2>
          </div>

          {/* Campaign Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="1000"
              >
                <CampaignCard {...campaign} />
              </div>
            ))}
          </div>

          {/* View All Campaigns Button */}
          <div
            className="text-center mt-8"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <button className="bg-orange-500 text-white text-lg px-6 py-3 rounded-lg transition duration-300 delay-150 hover:bg-orange-600 hover:scale-110">
              View All Campaigns
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
