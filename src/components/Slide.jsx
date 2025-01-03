const Slide = ({ image, caption }) => {
    return (
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            {caption}
          </h1>
          <div className="space-x-4">
            <button className="bg-green-600 text-white py-2 px-6 rounded shadow-lg hover:bg-green-700 transition">
              Donate Funds
            </button>
            <button className="bg-white text-green-600 py-2 px-6 rounded shadow-lg hover:bg-gray-200 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slide;
  