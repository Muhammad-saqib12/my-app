import React from "react";
import Navbar from "../Components/Navbar";
import Next from "../Components/Next";
import Rightbar from "../Components/Rightbar";
import Leftcontent from "../Components/Leftcontent";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar />
      <Next />

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start px-6 gap-6">
        {/* Left Content */}
        <div className="flex-1">
          <Leftcontent />
        </div>

        {/* Sticky Rightbar */}
        <div className="w-full md:w-[300px] sticky top-24 self-start">
          <Rightbar />
        </div>
        
      </div>
      <div className="h-[400px] w-screen">
            <Footer/>
      </div>

    
    </div>
  );
}
