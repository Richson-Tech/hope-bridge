import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    // <ul className="flex flex-col py-4 items-center bg-[#f3a529] text-white">
    <ul className="flex flex-col fixed top-0 left-0 right-0 bottom-0 h-full pb-10 pt-4 overflow-y-auto bg-white">
        {links.map((link, index) => (
          <li key={index} onClick={closeMenu}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
    </ul>
  );
};

export default MenuOverlay;
