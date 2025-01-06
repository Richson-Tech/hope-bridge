import Image from "next/image";

const Slide = ({ image, caption }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt={caption}
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 mt-24">
          {caption}
        </h1>
        <div className="space-x-4">
          <button className="bg-[#f3a529] text-white py-2 px-6 rounded shadow-lg transition duration-300 delay-150 hover:bg-gray-200 hover:text-black hover:scale-110">
            Donate Funds
          </button>
          <button className="bg-transparent border border-white rounded-md text-[#f3a529] py-2 px-6 shadow-lg transition duration-300 delay-150 hover:bg-gray-200 hover:scale-110">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
