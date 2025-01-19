export default function CampaignCard({ image, title, raised, remaining, expireDate, progress }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <p>Raised</p>
              <p className="font-bold text-gray-800">${raised}</p>
            </div>
            <div>
              <p>Remaining</p>
              <p className="font-bold text-gray-800">${remaining}</p>
            </div>
            <div>
              <p>Expire Date</p>
              <p className="font-bold text-gray-800">{expireDate}</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-gray-300 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Raised Funds: {progress}%</p>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg transition duration-300 delay-150 hover:bg-orange-600 hover:scale-110">
              Donate Now
            </button>
            <button className="bg-transparent text-orange-500 text-sm px-4 py-2 transition duration-300 delay-150 hover:scale-110 border border-orange-500 rounded-lg">
                Program Details
              </button>
            </div>
          </div>
        </div>
      );
  }
  