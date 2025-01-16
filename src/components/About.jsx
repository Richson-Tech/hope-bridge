

export default function AboutUsSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      {/* Left Side - Image and Stats */}
      <div className="relative">
        <img 
          src="/images/slide03.jpg" 
          alt="Smiling children" 
          className="rounded-xl w-full max-w-md"
        />
        <div className="rounded-3xl -translate-x-3 transform -rotate-1 shadow-lg shadow-black xs:w-[85%] absolute bottom-0 left-0 w-full bg-orange-500 text-white py-4 px-6 rounded-b-xl flex justify-around">
          <div className="text-center">
            <p className="text-3xl font-bold">4k+</p>
            <p>VOLUNTEER</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">111+</p>
            <p>SPONSORS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">36</p>
            <p>BRANCHES</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">22+</p>
            <p>AWARDS</p>
          </div>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        <h2 className="text-orange-500 text-xl font-bold">ABOUT US</h2>
        <h1 className="text-4xl font-bold leading-tight">
          Our Work Promise To Uphold The Trust Placed
        </h1>
        <p className="text-gray-600">
          Repellendus litora velit irure ea nostrud cum autem, quam. Gravida harum incidunt varius voluptat facilisi purus.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <span className="text-orange-500 font-bold text-xl">✔</span>
            <p className="ml-2">Porta tempora facilisi, hac.</p>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 font-bold text-xl">✔</span>
            <p className="ml-2">Beatae hac ultrices, nisi.</p>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 font-bold text-xl">✔</span>
            <p className="ml-2">Incidunt vel inci dunt.</p>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="bg-orange-200 text-orange-500 text-center p-6 rounded-lg">
            <p className="text-4xl font-bold">28</p>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
