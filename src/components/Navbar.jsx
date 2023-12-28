import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 pt-10 font-serif flex justify-center bg-white w-full top-0 z-50 sm:text-sm fixed">
      {/* Hamburger icon for small screens */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden md:hidden text-gray-600 focus:outline-none"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-4 lg:text-stone-600 md:flex md:space-x-4 md:text-stone-600`}
      >
        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#home">Home</a>
        </li>

        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#projects">Projects</a>
        </li>

        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#aboutme">About Me</a>
        </li>

        <li className="hover:text-white rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="https://github.com/mosmoo/manasvi-portfolio/blob/main/src/Images/Manasvi%20Saluja%20ATS%20Resume.pdf">Resume</a>
        </li>

        <li className="hover:text-white rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
