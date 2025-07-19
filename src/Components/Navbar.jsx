import React, { useState } from "react";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Hamburger for Mobile */}
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <Menu size={28} />
          </button>
          {menuOpen && (
            <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-40 p-2 space-y-2 z-50">
              <a href="#" className="block hover:text-blue-600">Home</a>
              <a href="#" className="block hover:text-blue-600">Categories</a>
              <a href="/contactus" className="block hover:text-blue-600">ContactUs</a>
              <a href="#" className="block hover:text-blue-600">About Us</a>
            </div>
          )}
        </div>

        {/* Center Title (visible on md and up) */}
        <div className="text-lg font-semibold hidden md:block">
          Furniture Cleaning Services
        </div>

        {/* Menu Items (visible on md and up) */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Categories</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact Us</a>
          <a href="#" className="hover:text-yellow-400 transition">About Us</a>
        </div>

        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search me"
            className="rounded-full pl-10 pr-3 py-1 text-white placeholder-gray-500 focus:outline-none"
          />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </nav>
  );
}
