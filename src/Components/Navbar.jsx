import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="flex px-10 py-5 items-center justify-between  ">
        <img src="/images/tour guide.png" alt="logo" className="forced-color-adjust-auto"/>
        <ul className=" hidden lg:flex gap-10 items-center  ">
          <li className=" font-[600] text-[15px]"><Link to="/">Home</Link></li>
          <li className=" font-[600] text-[15px]"><Link to="/CityTour">City Tour</Link></li>
          <li className=" font-[600] text-[15px]"><Link to="/CityList">City List</Link></li>
          <li className=" font-[600] text-[15px]"><Link to="/MyProfile">My Profile</Link></li>
          <li className="text-[#2932ef] font-[600] text-[15px]"> <button className="px-6 py-2 bg-amber-300 rounded-[8px]">Sign  in </button></li>
        </ul>
        <button onClick={toggleMenu} className="md:hidden cursor-pointer   focus:outline-none">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>


      <div className="">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden "
        >
          <ul className="flex  flex-col lg:hidden items-center  ">
            <li className="bg-[#9fff] border-t-2 rounded-b-lg py-3 text-center w-full border-b-2 border-[black]"><Link to="/">Home</Link></li>
            <li className="bg-[#9fff] py-3 rounded-b-lg  text-center w-full border-b-2 border-[black]"><Link to="/CityTour">City Tour</Link></li>
            <li className="bg-[#9fff] py-3 text-center rounded-b-lg  w-full border-b-2 border-[black]"><Link to="/CityList">City List</Link></li>
            <li className="bg-[#9fff] py-3 text-center w-full rounded-b-lg  border-b-2 border-[black]"><Link to="/MyProfile">My Profile</Link></li>
            <li className="bg-[#9fff] py-3 text-center w-full border-b-2 rounded-b-lg  border-[black]"> Sign  in</li>
          </ul>
        </motion.div>
      </div>

    </div>
  )
}

export default Navbar
