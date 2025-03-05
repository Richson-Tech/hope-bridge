import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import FacebookIcon from "@/app/assets/icons/facebook-circle.svg";
import TwitterXIcon from "@/app/assets/icons/twitter-x.svg";
import YoutubeIcon from "@/app/assets/icons/youtube-fill.svg";
import InstagramIcon from "@/app/assets/icons/instagram-fill.svg";

const MenuOverlay = ({ links, closeMenu, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-white z-50 flex flex-col items-center pt-24 pb-10 overflow-y-auto"
    >
      {/* Close Icon */}
      <button
        onClick={closeMenu}
        className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 transition-all"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>

      {/* Menu Links */}
      <ul className="w-full flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <li key={index} onClick={closeMenu} className="text-center">
            <Link
              href={link.path}
              className="block text-2xl font-bold text-black hover:text-gray-600 transition-all"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex gap-6 text-3xl justify-center items-center mt-12 text-brand-secondary">
        <Image src={FacebookIcon} alt="Facebook" width={32} height={32} />
        <Image src={TwitterXIcon} alt="TwitterX" width={32} height={32} />
        <Image src={YoutubeIcon} alt="YouTube" width={32} height={32} />
        <Image src={InstagramIcon} alt="Instagram" width={32} height={32} />
      </div>
    </div>
  );
};

export default MenuOverlay;
