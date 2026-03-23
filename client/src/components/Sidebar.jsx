import React, { useState } from "react";
import {
  FiGrid,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiShoppingBag,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-[280px] h-screen bg-[#141414] text-gray-300 flex flex-col justify-between p-4 font-sans">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-black border border-gray-700 flex items-center justify-center text-yellow-400 font-bold">
            JH
          </div>
          <div>
            <h1 className="text-white font-semibold tracking-wide">
              Jahid.Hossen
            </h1>
            <p className="text-xs text-gray-500">MERN Stack Developer</p>
          </div>
        </div>

        <hr className="border-gray-800 mb-4" />

        {/* Menu */}
        <div className="space-y-3">
          {/* Dashboard */}
          <Link to="/">
            <div
              className="flex items-center gap-3 px-3 py-3 rounded-xl 
                         bg-gradient-to-r from-amber-500 to-amber-400 
                        text-white shadow-sm hover:shadow-md 
                         transition-all duration-200"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <FiGrid size={18} />
              </div>

              <span className="text-xs font-semibold tracking-widest uppercase">
                E-Commerce Admin Dashboard
              </span>
            </div>
          </Link>

          {/* E-Commerce Dropdown */}
          <div className="bg-[#1a1a1a] p-3 mt-4 rounded-xl">
            {/* Header */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-[#222]"
            >
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <FiShoppingBag size={18} />
                <span className="tracking-wide">E-Commerce</span>
              </div>

              {open ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {/* Sub Menu */}
            {open && (
              <div className="mt-2 space-y-1">
                <Link
                  to="/create-category"
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-[#222] px-3 py-2 rounded-md transition"
                >
                  <FiChevronRight size={14} />
                  <span className="text-sm">Create Category</span>
                </Link>
                <Link
                  to="/category-list"
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-[#222] px-3 py-2 rounded-md transition"
                >
                  <FiChevronRight size={14} />
                  <span className="text-sm">Category List</span>
                </Link>

                <Link
                  to="/orders"
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-[#222] px-3 py-2 rounded-md transition"
                >
                  <FiChevronRight size={14} />
                  <span className="text-sm">Orders</span>
                </Link>

                <Link
                  to="/products"
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-[#222] px-3 py-2 rounded-md transition"
                >
                  <FiChevronRight size={14} />
                  <span className="text-sm">Products</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom User */}
      <div className="flex items-center justify-between border-t border-gray-800 pt-4">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Alenn.design</span>
        </div>

        <FiLogOut className="cursor-pointer hover:text-white transition" />
      </div>
    </div>
  );
};

export default Sidebar;
