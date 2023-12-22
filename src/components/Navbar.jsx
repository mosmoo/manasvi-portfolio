import React from "react";

function Navbar() {
  return (
    <div className="p-4 pt-10 font-serif flex justify-center bg-white w-full top-0 z-50 sm:text-sm fixed">
      <ul className="flex space-x-4 text-stone-600">
        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600 ">
          <a href="#home">Home</a>
        </li>

        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#projects">Projects</a>
        </li>

        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#aboutme">About Me</a>
        </li>
        
        <li className="hover:text-white rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#resume">Resume</a>
        </li>
        <li className="hover:text-white rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
