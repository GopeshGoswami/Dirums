import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import artwork1 from "../images/artwork1.jpeg";

const Artwork = () => {
  return (
    <div className=" text-black mt-10  w-screen">
      <div className=" mb-5">
        <h1 className=" text-3xl font-semibold ml-10">Artworks you may like</h1>
      </div>
      <div className=" flex gap-20 items-center justify-center">
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
        <div>
          <img src={artwork1} alt="" className=" h-60" />
          <h1 className=" font-bold text-lg text-[#e2b179]">3 Men Sittin</h1>
          <p className=" text-sm">Acrylic on Canvas</p>
          <p className=" text-sm font-bold">$3,20,000</p>
        </div>
        <BsChevronCompactRight className=" text-6xl text-[#e2b179] bg-white  cursor-pointer" />
      </div>
      <div className=" block h-1 border-0 border-t-2 border-[#9b9b9b75] m-[1em]"></div>

      {/* Recently Viewed */}
      <div className=" mb-5">
        <h1 className=" text-3xl font-semibold ml-10">Recently Viewed</h1>
      </div>
      <div className=" flex gap-20 items-center justify-center">
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
        <div>
          <img src={artwork1} alt="" className=" h-60" />
          <h1 className=" font-bold text-lg text-[#e2b179]">3 Men Sittin</h1>
          <p className=" text-sm">Acrylic on Canvas</p>
          <p className=" text-sm font-bold">$3,20,000</p>
        </div>
        <BsChevronCompactRight className=" text-6xl text-[#e2b179] bg-white  cursor-pointer" />
      </div>
    </div>
  );
};

export default Artwork;
