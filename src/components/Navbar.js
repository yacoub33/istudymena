import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-blue-800">
          iStudy MENA.
        </h1>
        <ul className="hidden md:flex">
          <li className="mr-4 hover:cursor-pointer hover:text-blue-800">
            Home
          </li>
          <li className="mr-4 hover:cursor-pointer hover:text-blue-800">
            About
          </li>
          <li className="mr-4 hover:cursor-pointer hover:text-blue-800">
            Partners
          </li>
          <li className="mr-4 hover:cursor-pointer hover:text-blue-800">
            Testimonials
          </li>
        </ul>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" size={25} />
          ) : (
            <AiOutlineClose className="w-5" size={25} />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-8 py-8"}>
        <li className="border-b-2 border-zinc-200 w-full mb-5">Home</li>
        <li className="border-b-2 border-zinc-200 w-full mb-5">About</li>
        <li className="border-b-2 border-zinc-200 w-full mb-5">Partners</li>
        <li className="border-b-2 border-zinc-200 w-full mb-5">Testimonials</li>
      </ul>
    </div>
  );
};

export default Navbar;
