import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-white border-b border-gray-200 flex items-center justify-between px-6 rounded-b-2xl shadow-sm font-sans">

      {/* Left */}
      <div className="flex flex-col">
        <h1 className="text-gray-800 text-lg font-semibold tracking-wide">
          Dashboard
        </h1>
        <p className="text-xs text-gray-500">
          Welcome back, Jahid 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[260px] focus-within:ring-2 focus-within:ring-blue-500 transition">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm ml-2 text-gray-800 w-full placeholder:text-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="relative cursor-pointer">
          <FiBell className="text-gray-600 text-xl hover:text-gray-800 transition" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <FiSettings className="text-gray-600 text-xl cursor-pointer hover:text-gray-800 transition" />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full border border-gray-200"
          />
          <span className="text-sm font-medium text-gray-700 hidden md:block">
            Jahid
          </span>
        </div>

      </div>
    </div>
  );
};

export default Header;