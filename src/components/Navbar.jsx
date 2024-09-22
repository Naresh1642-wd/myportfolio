import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto  px-4 text-white sticky top-0 bg-black z-20 lg:w-full">
      <h1 className=" text-3xl font-bold text-[#9432d4] hover:text-white duration-300 lg:text-6xl">
        Naresh.
      </h1>
      <ul className="hidden md:flex lg:text-2xl">
        <li className="p-4 hover:text-[#9432d4]">
          <a href="#">Home</a>
        </li>
        <li className="p-4 hover:text-[#9432d4]">
          <a href="#About">About</a>
        </li>
        <li className="p-4 hover:text-[#9432d4]">
          <a href="#Skills">Skills</a>
        </li>
        <li className="p-4 hover:text-[#9432d4]">
          <a href="#Projects">Projects</a>
        </li>
        <li className="p-4 hover:text-[#9432d4]">
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <button
        onClick={handleNav}
        className="block md:hidden z-[100] text-[#9432d4] hover:text-white duration-300"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      <div
        className={
          nav
            ? "active fixed  top-0 left-0 right-0 w-full h-full z-100 bg-[#000300] ease-in-out duration-500"
            : " fixed top-[-100%] "
        }
      >
        <ul className="m-[100px]">
          <li className="p-10 text-center hover:text-[#9432d4] ">
            <a href="#" onClick={handleNav}>
              Home
            </a>
          </li>
          <li className="p-10 text-center hover:text-[#9432d4]">
            <a href="#About" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="p-10 text-center hover:text-[#9432d4]">
            <a href="#Skills" onClick={handleNav}>
              Skills
            </a>
          </li>
          <li className="p-10 text-center hover:text-[#9432d4]">
            <a href="#Projects" onClick={handleNav}>
              Projects
            </a>
          </li>
          <li className="p-10 text-center hover:text-[#9432d4]">
            <a href="#Contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
