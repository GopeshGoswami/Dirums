import React from "react";
import footerImg from "../images/footer.jpeg";

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${footerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className=" text-white bg-black flex  gap-10 h-[20vh] items-center justify-center"
      style={footerStyle}
    >
      <div>
        <h1 className=" text-3xl font-bold">Subscribe to Dirums Newsletter</h1>
      </div>
      <div className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search for artworks, artists, theme and many more"
          className=" w-96 px-5 py-1 rounded-xl text-sm text-black"
        />
        <button className=" w-96 px-5 py-1 rounded-xl text-sm text-black bg-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
