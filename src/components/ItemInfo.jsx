import React from "react";
import { useState, useCallback } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi";
import { SiAdguard } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaHands } from "react-icons/fa";
import {
  BsWhatsapp,
  BsLink45Deg,
  BsBag,
  BsHeart,
  BsImage,
  BsTruck,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import auth from "../images/auth.jpeg";
import "../CSS/popup.css";
import Artwork from "./Artwork";

const ItemInfo = () => {
  const [text, setText] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit labore at voluptate consequuntur id ea. Dolorem repellat odit quaerat, molestiae omnis quia fugiat, similique reprehenderit, nisi iste distinctio earum neque est quod. Earum, omnis! Rerum voluptate nisi quos autem optio voluptates. Aspernatur facilis illo suscipit ut accusantium ratione, libero sunt."
  );
  const [shortened, setShortened] = useState(false);
  const shortenText = (maxLength) => {
    setShortened(!shortenText);
    setText(text.substr(0, maxLength));
  };

  const copyLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.textContent = "Link Copied";

        const button = document.activeElement;
        const buttonRect = button.getBoundingClientRect();
        popup.style.top = `${buttonRect.bottom}px`;
        popup.style.left = `${buttonRect.left}px`;

        document.body.appendChild(popup);

        console.log("Link Copied");

        setTimeout(() => {
          popup.remove();
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard", error);
      });
  };

  return (
    <div>
      {/* Title */}
      <div className=" text-black">
        <h1 className=" font-semibold text-2xl">Lord Buddha With Monks</h1>
        <p>By Gopal Sharma | India</p>
        {/* Rating */}
        <div className=" flex gap-2 text-lg text-[#C3925B] items-center">
          {/* Stars */}
          <div className=" flex items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <p className=" text-sm text-black">Expert Rating</p>
          </div>
          <div className=" border-l-2 border-gray-300 h-[40px]"></div>
          <div className=" text-gray-500 flex items-center gap-4">
            <FaFacebookF className=" cursor-pointer" />
            <FaTwitter className=" cursor-pointer" />
            <BsWhatsapp className=" cursor-pointer" />
            <BsLink45Deg
              className=" text-2xl text-[#C3925B] cursor-pointer"
              onClick={copyLink}
            />
          </div>
        </div>
      </div>
      {/* Title End */}

      {/* Details */}
      <div className=" flex items-end">
        <div>
          <div className=" flex mt-7 items-center gap-4">
            <h1 className=" text-3xl font-bold">$8000</h1>
            <div className=" flex gap-1">
              <p className=" font-bold underline">Make an offer</p>
              <HiCurrencyRupee className=" text-2xl font-thin text-[#C3925B]" />
            </div>
          </div>
          <div className=" mt-3">
            <p>Painting | Acrylic On Canvas | 2016</p>
            <div className=" flex gap-1">
              <p className=" font-semibold">Size(inch):</p>
              <p>36w x48h</p>
            </div>
            <div className=" flex gap-1">
              <p className=" font-semibold">Size(cm):</p>
              <p>36w x48h</p>
            </div>
            <div className=" flex gap-1">
              <p className=" font-semibold">Artwork Made By:</p>
              <p>Gopal Sharma</p>
            </div>
            <div className=" flex gap-1">
              <p className=" font-semibold">Artwork Sold By:</p>
              <p>Random Gallery</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className=" flex gap-2 ml-10 items-center">
          <BsHeart className=" text-5xl rounded-md border-2 border-[#F7CD88] p-2 drop-shadow-lg hover:drop-shadow-2xl text-[#C3925B]" />
          <BsBag className=" text-5xl rounded-md border-2 border-[#F7CD88] p-2 drop-shadow-lg hover:drop-shadow-2xl text-[#C3925B]" />
          <button className=" text-xl bg-[#F7CD88] px-10 py-2 rounded-md font-bold drop-shadow-lg hover:bg-[#ffda9f] ease-in-out transition-all duration-300">
            BUY NOW
          </button>
        </div>
      </div>
      {/* Details End */}

      {/* Policies */}
      <div className=" mt-10 border-2 border-[#e5e7eb4a] px-10 py-10 flex gap-20 shadow-xl">
        <div className=" flex items-center flex-col">
          <BsImage className=" text-5xl rounded-md text-[#C3925B] mb-7" />
          <div>
            <h1 className=" font-bold">Best Curated Artwork</h1>
            <p className=" text-sm text-center">
              Authentic Artwork from <br /> all around the globe
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col">
          <FaHands className=" text-5xl rounded-md text-[#C3925B] mb-7" />
          <div>
            <h1 className=" font-bold">Best Curated Artwork</h1>
            <p className=" text-sm text-center">
              Authentic Artwork from <br /> all around the globe
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col">
          <BsTruck className=" text-5xl rounded-md text-[#C3925B] mb-7" />
          <div>
            <h1 className=" font-bold">Best Curated Artwork</h1>
            <p className=" text-sm text-center">
              Authentic Artwork from <br /> all around the globe
            </p>
          </div>
        </div>
      </div>
      {/* Policies End */}

      {/* Shipment */}
      <div className=" mt-10 mb-10 flex gap-10 items-center">
        <SiAdguard className=" text-5xl rounded-md" />
        <div>
          <h2 className=" font-bold text-lg">Shipment Includes:</h2>
          <div className=" flex items-center gap-2">
            <p className=" text-sm">7 days money back guarantee</p>
            <BsFillCheckCircleFill className=" text-gray-500" />
          </div>
          <div className=" flex items-center gap-2">
            <p className=" text-sm">
              Artist Signature is present on the front of the artwork
            </p>
            <BsFillCheckCircleFill className=" text-gray-500" />
          </div>
        </div>
      </div>
      <div className=" block h-1 border-0 border-t-2 border-[#9b9b9b75] m-[1em]"></div>
      {/* Shipment Ends */}

      {/* Certificate */}
      <div className="flex mt-10 mb-10 items-center gap-5 ">
        <img src={auth} alt="" className=" w-12 rounded-full " />
        <h2 className=" text-lg font-bold">
          Comes with Authentication Certificate
        </h2>
      </div>
      <div className=" block h-1 border-0 border-t-2 border-[#9b9b9b75] m-[1em]"></div>
      {/* Certificate End */}

      {/* About Start */}
      <div className=" max-w-lg mt-10">
        <h1 className=" text-xl font-bold mb-2">About the Artwork</h1>
        <p className=" text-sm">{text}</p>
        <p
          className=" mt-3 text-[#C3925B] font-semibold"
          onClick={() =>
            shortened
              ? setText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit labore at voluptate consequuntur id ea. Dolorem repellat odit quaerat, molestiae omnis quia fugiat, similique reprehenderit, nisi iste distinctio earum neque est quod. Earum, omnis! Rerum voluptate nisi quos autem optio voluptates. Aspernatur facilis illo suscipit ut accusantium ratione, libero sunt."
                )
              : shortenText(20)
          }
        >
          {shortened ? "Read More" : "Read Less"}
        </p>
      </div>
      <div className=" block h-1 border-0 border-t-2 border-[#9b9b9b75] m-[1em]"></div>
      {/* About End */}

      {/* Highlights */}
      <div className=" mt-10">
        <h1 className=" font-bold text-xl mb-3">Highlights</h1>
        <ul className=" font-bold flex flex-col gap-2">
          <li className=" flex">
            <p>Category: </p>
            <p className="font-normal">Painting</p>
          </li>
          <li className=" flex">
            <p>Medium: </p>
            <p className="font-normal">Acrylic</p>
          </li>
          <li className=" flex">
            <p>Size(inch): </p>
            <p className="font-normal">36W x 48H</p>
          </li>
          <li className=" flex">
            <p>Size(cm): </p>
            <p className="font-normal">36W x 48H</p>
          </li>
          <li className=" flex">
            <p>Orientation: </p>
            <p className="font-normal">Potrait</p>
          </li>
          <li className=" flex">
            <p>Original: </p>
            <p className="font-normal">One of a kind</p>
          </li>
          <li>
            <p>Shipping Included</p>
          </li>
        </ul>
      </div>
      {/* Highlights End */}

      <div className=" block h-1 border-0 border-t-2 border-[#9b9b9b75] m-[1em]"></div>

      {/* Policyes */}
      <div className=" mt-10 max-w-2xl text-sm ">
        <h1 className=" font-bold text-xl mb-3">Return Policy</h1>
        <ul className=" flex flex-col gap-3">
          <li>
            <p>
              <b>
                3 days if ordered as unframed. <br />{" "}
              </b>{" "}
              Not applicable if ordered as <br />
              Framed or in Custom Size, or if <br />
              Delivery is outside India.
            </p>
          </li>
          <li className="flex">
            <p>
              <b> Time taken for delivery: </b> Typically it takes 5-7 business
              days for domestic <br /> shipments and 10-14 business days for
              international shipments.
            </p>
          </li>
          <li className="flex">
            <p>
              <b> Returns and refunds:refunds:</b> 7-day return policy, No
              Questions asked. (Check Policy){" "}
            </p>
          </li>
          <li className="flex">
            <p>
              <b> Delivery Cost:</b> Shipping is included*(Check Policy){" "}
            </p>
          </li>
          <li className="flex">
            <p className=" font-bold">Shipping Country: </p>
            <p>India</p>
          </li>
          <li className="flex">
            <p className=" underline">
              Artists are responsible for packaging and adhering to Drums'
              packaging guidelines.
            </p>
          </li>
          <li className="flex">
            <p>
              <b> Customs: </b> International shipment may attract custom
              charges as per their countries rules and regulations. All customs
              will be paid by the buyer at the time of delivery.
            </p>
          </li>
          <li className="flex">
            <p>
              For any special orders and requests the above facilities will not
              be applicable. <b>Contact Us</b>
            </p>
          </li>
        </ul>
      </div>
      {/* Policies End */}
    </div>
  );
};

export default ItemInfo;
