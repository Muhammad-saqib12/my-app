"use client";
import React from "react";

const articles = [
  {
    title: "The Ultimate Guide to Upholstery Cleaning: Keep Your...",
    img: "/img.1.jpeg",
    author: "Edward",
    date: "2023-05-07",
  },
  {
    title: "How to Extend the Life of Your Sofa with Proper Cleaning...",
    img: "/img.2.jpeg",
    author: "Alexander",
    date: "2023-09-18",
  },
  {
    title: "Eco-Friendly Furniture Cleaning: Safe and Natural Ways to...",
    img: "/img.3.jpeg",
    author: "Lucas",
    date: "2023-09-10",
  },
];

export default function FurnitureCleaning() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/img.4.webp')" }}
    >
      {/* Light Overlay (less dark and no blur) */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-12">
        
        {/* Right Section: Cards */}
        <div className="flex-1 w-full grid gap-6 max-w-xl">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 p-4 bg-black/20"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-32 w-32 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center text-white w-full">
                <a
                  href="#"
                  title={item.title}
                  className="text-lg font-semibold leading-snug line-clamp-2 hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </a>
                <div className="flex items-center gap-3 text-sm text-white/70 mt-2">
                  <span>{item.author}</span>
                  <span className="text-white/50">•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Section: Text */}
        <div className="text-white max-w-xl py-25 flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Professional<br />Furniture Cleaning
          </h1>
          <p className="text-lg md:text-4xl text-white/80 font-light">
            Revive, Refresh, and Restore – Clean Furniture for a Healthier Space!
          </p>
        </div>
      </div>
    </div>
  ); 
}
