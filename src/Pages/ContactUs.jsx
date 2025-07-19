import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='bg-gray-100 flex flex-col items-center justify-center gap-9 h-[1100px] w-screen'>
        <div><h1 className='text-black text-3xl font-bold'>Contact Us</h1>
        <div className='flex gap-1.5'> <Link to="/" className='text-3xl font-bold'>Home:</Link><h1 className='text-black font-bold text-3xl'>Contact Us</h1></div></div>
        
        <div className='bg-gray-100 shadow-2xl  w-[1100px] h-[700px]  rounded-xl flex flex-col gap-10'>
           <div className="flex flex-col space-y-2 mb-4">
  <label htmlFor="name" className="text-lg font-medium text-gray-800">
    Name:
  </label>
  <input
    type="text"
    id="name"
    placeholder="Write your name here..."
    className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-black placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               transition-all duration-300 hover:shadow-md"
  />
</div>

        <div></div>

        </div>
       

       


      </div>

      
    </div>
  )
}
