import React from "react";

function Navbar() {
  return (
    <div className="p-4 pt-16 flex justify-center">
      <ul className="flex space-x-4 text-stone-600">
        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600 hover:bg-stone-600 ">Home</li>
        <li className="hover:text-indigo-100 rounded-full px-4 py-2 border border-stone-600  hover:bg-stone-600">Projects</li>
        <li className="hover:text-white rounded-full px-4 py-2 border border-stone-600  hover:bg-stone-600">Resume</li>
      </ul>
    </div>
  );
}
export default Navbar;
