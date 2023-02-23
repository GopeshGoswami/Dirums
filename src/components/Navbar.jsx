import React, { useEffect, useState } from "react";
import { BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlineUser } from "react-icons/ai";
import logo from "../images/logo.webp";
import { HiOutlineTranslate } from "react-icons/hi";

export default function Navbar(props) {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 20) {
      setFix(true);
      console.log(window.scrollY);
    } else setFix(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });
  console.log(fix);
  return (
    // For Sticky, set the classes: sticky, top-0 left-0
    <nav className=" transition-all duration-1000 sticky top-0 left-0 z-20 backdrop-blur-lg">
      {/* Top Nav */}
      <div
        className={`  bg-[#212121] flex justify-around items-center sticky w-full   `}
      >
        {/* Logo */}
        <div className=" ml-40">
          <img src={logo} alt="Code Logo" className=" w-28" />
        </div>

        {/* Search Bar */}
        <div className=" flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for artworks, artists, theme and many more"
            className=" w-96 px-5 py-1 rounded-l-xl text-sm text-black"
          />
          <BsSearch className="cursor-pointer mr-10 text-[#C3925B] bg-white h-7 rounded-r-xl pr-3 text-3xl" />
          <select
            name="currency"
            id="currency"
            className="bg-transparent font-bold text-[#C3925B]"
          >
            <option value="INR">INR</option>
            <option value="INR">USD</option>
          </select>
        </div>

        {/* Main Nav */}
        <div>
          <ul className=" flex items-center">
            <li>
              <AiOutlineHeart
                onClick={() => {
                  props.setDarkMode(!props.darkMode);
                }}
                className=" cursor-pointer text-2xl mr-5 text-[#C3925B] tet"
              />
            </li>
            <li>
              <BsBag className="cursor-pointer text-2xl mr-5 text-[#C3925B] tet" />
            </li>
            <li>
              <AiOutlineUser className="cursor-pointer text-2xl mr-5 text-[#C3925B] tet" />
            </li>
          </ul>
        </div>
      </div>
      {/* Top Nav Ends */}
      {/* Bottom Nav */}
      <div>
        <ul
          className={` flex gap-12  items-center justify-center bg-[#C3925B] text-white py-2 uppercase font-medium`}
        >
          <li>Artworks</li>
          <li>Paintings</li>
          <li>Sculpture</li>
          <li>Drawings</li>
          <li>Artists</li>
          <li>Exhibition</li>
          <li>Personalize</li>
          <li>Art magazine</li>
        </ul>
      </div>
    </nav>
  );
}
