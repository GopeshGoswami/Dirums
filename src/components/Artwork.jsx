import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import artwork1 from "../images/artwork1.jpeg";

const Artwork = () => {
  return (
    <div className=" text-white bg-[#212121] w-screen">
      <div className=" mb-5">
        <h1 className=" text-3xl font-semibold">
          More Artwork from Gopal Sharma
        </h1>
      </div>
      <div className=" flex gap-20 items-center ml-10">
        <div>
          <img src={artwork1} alt="" className=" h-60" />
          <h1 className=" font-bold text-lg text-[#e2b179]">3 Men Sittin</h1>
          <p className=" text-sm">Acrylic on Canvas</p>
          <p className=" text-sm font-bold">$3,20,000</p>
        </div>
        <div>
          <img src={artwork1} alt="" className=" h-60" />
          <h1 className=" font-bold text-lg text-[#e2b179]">3 Men Sittin</h1>
          <p className=" text-sm">Acrylic on Canvas</p>
          <p className=" text-sm font-bold">$3,20,000</p>
        </div>
        <div>
          <img src={artwork1} alt="" className=" h-60" />
          <h1 className=" font-bold text-lg text-[#e2b179]">3 Men Sittin</h1>
          <p className=" text-sm">Acrylic on Canvas</p>
          <p className=" text-sm font-bold">$3,20,000</p>
        </div>
        <BsArrowRightCircleFill className=" text-5xl text-[#e2b179] bg-white rounded-full hover:shadow-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Artwork;
