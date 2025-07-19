import React from "react";
import LeftContent from "./Leftcontent";
import Rightbar from "./Rightbar";

export default function PageLayout() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl flex gap-6">
        {/* Left Side */}
        <div className="w-3/5">
          <LeftContent />
        </div>

        {/* Right Side */}
        <div className="w-2/5">
          <div className="sticky top-6">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
