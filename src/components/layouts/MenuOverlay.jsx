// import React from "react";
// import NavLink from "./NavLink";

// const MenuOverlay = ({ links, closeMenu }) => {
//   return (
//     <ul className="flex flex-col py-4 items-center bg-[#f3a529] text-white">
//       {links.map((link, index) => (
//         <li key={index} onClick={closeMenu}>
//           <NavLink href={link.path} title={link.title} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MenuOverlay;
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu, isOpen }) => {
  return (
    <>
      {/* Full-screen overlay when the menu is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#f3a529] p-4 z-50 transition-transform duration-300 ${
          isOpen ? "transform-none" : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          {/* Close Button */}
          <button onClick={closeMenu} className="text-xl text-white">
            ×
          </button>
        </div>
        <ul className="flex flex-col space-y-4">
          {links.map((link, index) => (
            <li key={index} onClick={closeMenu}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuOverlay;
