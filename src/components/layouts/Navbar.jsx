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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex lg:py-4 flex-wrap items-center justify-between  px-4 py-2">
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          LOGO
        </Link>
        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`flex items-center px-3 py-2 border rounded ${
              isScrolled
                ? "border-gray-800 text-gray-800 hover:text-black hover:border-black"
                : "border-gray-600 text-gray-200 hover:text-white hover:border-white"
            }`}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`text-xl font-semibold transition duration-300 px-3 py-2 rounded-md ${
                    isScrolled
                      ? "text-black hover:text-orange-500"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div ref={menuRef}>
          <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} menuRef={menuRef} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
