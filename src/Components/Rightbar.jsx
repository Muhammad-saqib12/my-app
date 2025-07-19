import React from "react";

export default function Rightbar() {
  return (
    <div className="w-full max-w-xs space-y-6">

      {/* About Us Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/img.1.jpeg" // Replace with actual image path
          alt="About Us"
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">About Us</h2>
          <p className="text-sm text-gray-700">
            At Furniture Cleaning Services, we specialize in providing top-notch cleaning solutions
            tailored to maintain and restore the beauty of your furniture.
          </p>
        </div>
      </div>

      {/* Categories Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/img.2.jpeg" // Replace with actual image path
          alt="Categories"
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">Categories</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex justify-between">
              <span>Residential Furniture Cleaning</span>
              <span className="text-gray-500">(3)</span>
            </li>
            <li className="flex justify-between">
              <span>Commercial Furniture Cleaning</span>
              <span className="text-gray-500">(2)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Editor's Choice Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/img.3.jpeg" // Replace with actual image path
          alt="Editor's Choice"
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-3">Editor's Choice</h2>

          {/* Article 1 */}
          <div className="mb-4">
            <h3 className="font-semibold leading-tight text-gray-800">
              Go Green, Stay Clean – Natural Solutions for a Fresh Home!
            </h3>
            <p className="text-sm text-gray-600">
              Eco-Friendly Furniture Cleaning: Safe and Natural Ways to Refresh Your Home
            </p>
            <p className="text-xs text-gray-500 mt-1">Lucas • 2023-09-10</p>
          </div>

          {/* Article 2 */}
          <div className="mb-4">
            <h3 className="font-semibold leading-tight text-gray-800">
              Fresh & Stain-Free: Keep Your Office Furniture Looking and Smelling Great!
            </h3>
            <p className="text-sm text-gray-600">
              How to Remove Stains and Odors from Office and Commercial Furniture
            </p>
            <p className="text-xs text-gray-500 mt-1">Thomas • 2022-05-09</p>
          </div>

          {/* Article 3 */}
          <div>
            <h3 className="font-semibold leading-tight text-gray-800">
              Revive, Refresh, Impress – Professional Furniture Cleaning for a Spotless Business!
            </h3>
            <p className="text-sm text-gray-600">
              The Importance of Professional Furniture Cleaning for Businesses
            </p>
            <p className="text-xs text-gray-500 mt-1">Charlie • 2022-01-20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
