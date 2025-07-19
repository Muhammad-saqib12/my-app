import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='bg-gray-500 h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-extrabold text-black'>Furniture cleaning service</h1>
        <div className='flex gap-5 py-8'>
              <Link to="/" className="text-white font-bold text-2xl hover:underline">Home</Link>
              <Link to="/about" className="text-white font-bold text-2xl hover:underline">About</Link>
               <Link to="/categories" className="text-white font-bold text-2xl hover:underline">Categories</Link>
              <Link to="/term and condition" className="text-white  text-2xl font-bold hover:underline">Term and Conditions</Link>
               <Link to="/privacy policy" className="text-white text-2xl font-bold hover:underline">Privacy Policy</Link>
              <Link to="/stemap" className="text-white font-bold text-2xl hover:underline">Stemap</Link>
        </div>

      
    </div>
  )
}
