import React from "react";
import Slider from "./Slider";
import ItemInfo from "./ItemInfo";
import Artwork from "./Artwork";
import ArtworkLike from "./ArtworkLike";
import Footer from "./Footer";

const Items = () => {
  return (
    <div>
      <div className=" flex justify-around w-screen">
        <Slider />
        <ItemInfo />
      </div>
      <Artwork />
      <ArtworkLike />
      <Footer />
    </div>
  );
};

export default Items;
