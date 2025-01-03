"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import Twitter from "../../../public/icons/twitter-icon.svg";
import Whatsapp from "../../../public/icons/whatsapp-icon.svg";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
  { title: "Experience", path: "#experience" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menuRef = useRef(null);

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
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-40 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          F<span className="text-secondary-600">A</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white hover:text-secondary-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden socials md:flex flex-row gap-2">
          <Link
            href="https://github.com/Richson-Tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" className="h-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/folorunsho-ahmed-554620241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="h-10" />
          </Link>
          <Link
            href="https://www.twitter.com/richsongocrazy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Twitter} alt="Twitter Icon" className="h-10" />
          </Link>
          <Link
            href="https://wa.me/message/IANVGLPYCMKFG1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Whatsapp} alt="Whatsapp Icon" className="h-10" />
          </Link>
        </div>
      </div>
      {navbarOpen && (
        <div ref={menuRef}>
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
