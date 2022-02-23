import React from "react";
import Para from "./common/Para";
import SubHeader from "./common/SubHeader";
import { HiChevronDown, HiArrowNarrowRight } from "react-icons/hi";
import Heading from "./common/Heading";

function BillBoard() {
  return (
    <div className="h-[70vh] md:h-screen m-auto bg-zinc-900 md:pt-6 bg-lightBlack flex flex-col justify-center items-center">
      <div className=" max-w-4xl container flex justify-center items-center flex-col">
        <SubHeader text={"HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+"} />

        <Heading text={"Live TV Makes It Better"} />

        <Para
          text={
            "Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and events - plus the entire Hulu streaming library. Access endless entertainment with Disney+ and live sports with ESPN+. All three for a new price of $69.99/month."
          }
        />
        <p className="text-[10px] opacity-60 text-white md:leading-9 text-center">
          8+ only. Regional restrictions, blackouts and Live TV terms apply. Access
          content from each service separately and access ESPN+ content via Hulu. Location
          data required to watch certain content. Offer valid for eligible subscribers
          only.
        </p>
        <a
          className="flex underline opacity-80 text-white text-base mt-4 cursor-pointer"
          href="#"
        >
          VIEW CHANNELS IN YOUR AREA
          <HiArrowNarrowRight className="ml-1 mt-2" />
        </a>
        <HiChevronDown className="md:text-[40px] text-white my-6" />
      </div>
    </div>
  );
}

export default BillBoard;
