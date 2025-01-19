// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "Events", path: "/#events" },
//   { title: "Blog", path: "/#blog" },
//   { title: "Contact", path: "/#contact" },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef(null);

//   // Track scroll position to toggle blur effect and text color
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close navbar if clicking outside the menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setNavbarOpen(false);
//       }
//     };

//     if (navbarOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [navbarOpen]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-md text-black"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className={`text-2xl md:text-5xl font-semibold transition-colors duration-300 ${
//             isScrolled ? "text-black" : "text-white"
//           }`}
//         >
//           LOGO
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className={`flex items-center px-3 py-2 border rounded ${
//                 isScrolled
//                   ? "border-gray-800 text-gray-800 hover:text-black hover:border-black"
//                   : " text-gray-200 hover:text-white hover:border-white"
//               }`}
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className={`flex items-center px-3 py-2 border rounded ${
//                 isScrolled
//                   ? "border-gray-800 text-gray-800 hover:text-black hover:border-black"
//                   : "border-gray-400 text-gray-200 hover:text-white hover:border-white"
//               }`}
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-40">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   href={link.path}
//                   className={`text-xl font-semibold transition duration-300 px-3 py-2 rounded-md ${
//                     isScrolled
//                       ? "text-black hover:text-orange-500 hover:border-orange-500 border-2"
//                       : "text-white hover:text-orange-500 hover:border-orange-500 border-2"
//                   }`}
//                 >
//                   {link.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen && (
//         <div ref={menuRef}>
//           <MenuOverlay
//             links={navLinks}
//             closeMenu={() => setNavbarOpen(false)}
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Events", path: "/#events" },
  { title: "Blog", path: "/#blog" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Track scroll position to toggle blur effect and text color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close navbar if clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${
                isScrolled
                  ? "border-gray-800 text-gray-800 hover:text-black hover:border-black"
                  : " text-gray-200 hover:text-white hover:border-white"
              }`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${
                isScrolled
                  ? "border-gray-800 text-gray-800 hover:text-black hover:border-black"
                  : "border-gray-400 text-gray-200 hover:text-white hover:border-white"
              }`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-40">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`text-xl font-semibold transition duration-300 px-3 py-2 rounded-md ${
                    isScrolled
                      ? "text-black hover:text-orange-500 hover:border-orange-500 border-2"
                      : "text-white hover:text-orange-500 hover:border-orange-500 border-2"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      {navbarOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-[#f3a529]/90 z-50 flex justify-end"
        >
          <div className="w-3/4 bg-[#f3a529]">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setNavbarOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>
            <MenuOverlay
              links={navLinks}
              closeMenu={() => setNavbarOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
