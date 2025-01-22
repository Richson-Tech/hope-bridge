'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUsSection() {
  const [stats, setStats] = useState({
    volunteers: 0,
    sponsors: 0,
    branches: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Countdown animation logic
    const finalStats = { volunteers: 4000, sponsors: 111, branches: 36, awards: 22 };
    const duration = 2000; // Duration of the animation in ms
    const interval = 30; // Interval between updates in ms
    const steps = duration / interval;

    const incrementValues = {
      volunteers: Math.ceil(finalStats.volunteers / steps),
      sponsors: Math.ceil(finalStats.sponsors / steps),
      branches: Math.ceil(finalStats.branches / steps),
    };

    let currentStats = { ...stats };
    const timer = setInterval(() => {
      currentStats = {
        volunteers: Math.min(currentStats.volunteers + incrementValues.volunteers, finalStats.volunteers),
        sponsors: Math.min(currentStats.sponsors + incrementValues.sponsors, finalStats.sponsors),
        branches: Math.min(currentStats.branches + incrementValues.branches, finalStats.branches),
      };

      setStats(currentStats);

      if (
        currentStats.volunteers === finalStats.volunteers &&
        currentStats.sponsors === finalStats.sponsors &&
        currentStats.branches === finalStats.branches &&
        currentStats.awards === finalStats.awards
      ) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id='about'>
      <h2
        className="text-orange-500 text-center pt-5 text-xl lg:text-4xl font-bold"
        data-aos="fade-up"
      >
        ABOUT US
      </h2>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20 p-8"
        data-aos="fade-up"
      >
        {/* Left Side - Image and Stats */}
        <div className="relative" data-aos="zoom-in">
          <img
            src="/images/slide03.jpg"
            alt="Smiling children"
            className="rounded-xl w-full max-w-2xl"
          />
          <div
            className="rounded-3xl -translate-x-4 transform -rotate-4 shadow-lg shadow-black xs:w-[85%] absolute bottom-0 left-0 w-full bg-orange-500 text-white py-4 px-6 rounded-b-xl flex justify-around"
            data-aos="fade-up"
          >
            <div className="text-center">
              <p className="text-xl lg:text-3xl font-bold">{stats.volunteers}+</p>
              <p className='text-sm lg:text-lg px-2'>VOLUNTEERS</p>
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-3xl font-bold">{stats.sponsors}+</p>
              <p className='text-sm lg:text-lg px-2'>SPONSORS</p>
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-3xl font-bold">{stats.branches}</p>
              <p className='text-sm lg:text-lg px-2'>BRANCHES</p>
            </div>
            <div className="text-center">
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col gap-6 max-w-lg" data-aos="fade-right">
          <h1 className="text-4xl font-bold leading-tight">
            Our Work Promise To Uphold The Trust Placed
          </h1>
          <p className="text-gray-600">
            Repellendus litora velit irure ea nostrud cum autem, quam. Gravida
            harum incidunt varius voluptat facilisi purus.
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-center" data-aos="fade-left">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p className="ml-2">Porta tempora facilisi, hac.</p>
            </li>
            <li className="flex items-center" data-aos="fade-left">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p className="ml-2">Beatae hac ultrices, nisi.</p>
            </li>
            <li className="flex items-center" data-aos="fade-left">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p className="ml-2">Incidunt vel inci dunt.</p>
            </li>
          </ul>
          <div
            className="flex items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-orange-200 text-orange-500 text-center p-6 rounded-lg">
              <p className="text-4xl font-bold">28</p>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
