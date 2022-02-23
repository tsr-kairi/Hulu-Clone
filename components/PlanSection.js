import React, { useState } from "react";

import { Switch } from "@headlessui/react";
import { ImInfo } from "react-icons/im";
import Image from "next/image";
const plan = [
  {
    id: 1,
    planName: "Streaming Library with thousands of TV episodes and movies",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 2,
    planName: "Most new episodes the day after they air^",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 2,
    planName: "Access to award-winning Hulu Originals",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 3,
    planName: "Watch on your TV, laptop, phone, or tablet",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 4,
    planName: "Up to 6 user profiles",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 5,
    planName: "Watch on 2 different screens at the same time",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 6,
    planName: "No ads in streaming library",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 7,
    planName: "No ads in streaming library",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 8,
    planName: "Download and watch",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 9,
    planName: "Live TV with 75+ top channels. No cable required.",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 10,
    planName: "Live TV guide to navigate channels",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 11,
    planName: "Record Live TV with 50 hours of Cloud DVR storage",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
  {
    id: 12,
    planName: "Endless entertainment with Disney+, ad-free",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
  {
    id: 13,
    planName: "Live sports with ESPN+, now on Hulu",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
];

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 font-bold text-[#00ed82]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="square"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

function PlanSection() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="pt-9 text-black w-full bg-white flex flex-col justify-center items-center">
      <p className="text-[32px] md:text-[64px] font-extrabold text-black">
        Select Your Plan
      </p>
      <p className="md:mt-3 text-black text-lg md:text-2xl text-center">
        No hidden fees, equipment rentals, or installation appointments.
      </p>
      <p className="text-black text-lg md:text-2xl md:my-2 font-extrabold text-center">
        Switch plans or cancel anytime.^^
      </p>

      <div className="w-full md:w-8/12 flex flex-col md:flex-row items-center sticky top-0 bg-white">
        <div className="mt-4 flex flex-col items-center md:items-start">
          <Image
            className="object-contain"
            src="/images/logo-disny.svg"
            alt="Logo"
            // layout="fill"
            width="165px"
            height="35px"
            min-width="100px"
          />
          <p className="text-black font-bold text-3xl flex items-center gap-4">
            Bundle & Save <ImInfo className="w-4 h-4 text-gray-400" />
          </p>
          <p className="text-black ">
            Includes Hulu(plan of your choice), <br /> Disney+, and ESPN+
          </p>
          <Switch
            className={`${
              isToggle ? "bg-black" : "bg-gray-200"
            } relative inline-flex items-center h-[30px] rounded-full w-[78px] mt-3`}
            checked={isToggle}
            onChange={setIsToggle}
          >
            <span
              className={`${
                isToggle ? "translate-x-11" : "translate-x-0"
              } inline-block w-9 h-9 transform bg-white rounded-full border border-gray-100`}
            />
          </Switch>
        </div>

        <div className="flex flex-row justify-between ml-0 md:ml-[180px] items-center w-[96%] md:w-3/5 mt-4 md:mt-16 mb-4 md:mb-0">
          <div className="text-center h-[178px] md:h-[210px]">
            <div className="mb-6 w-full">
              <button className="text-[#16181d] bg-[#00ed82] rounded-full tracking-[1px] uppercase px-5 py-2 text-[10px] font-medium">
                most popular
              </button>
            </div>
            <p className="text-[#888888] text-xs md:text-base font-semibold">30 DAY FREE TRAIL</p>
            <p className="text-black font-bold text-sm md:text-lg">Hulu</p>
            <button className="bg-black py-1 md:py-3 px-8 md:px-16 font-semibold rounded-md text-white">
              SELECT
            </button>
          </div>
          <div className="text-center">
            <p className="text-[#888888] text-xs md:text-base font-semibold">30 DAY FREE TRAIL</p>
            <p className="text-black font-bold text-sm md:text-lg">Hulu(No Ads)</p>
            <button className="bg-black py-1 md:py-3 px-8 md:px-16 font-semibold rounded-md text-white">
              SELECT
            </button>
          </div>
          <div className="text-center">
            <p className="text-[#888888] text-xs md:text-base font-semibold">DISNEY+, ESPN+</p>
            <p className="text-black font-bold text-sm md:text-lg">Hulu + Live TV</p>
            <button className="bg-black py-1 md:py-3 px-8 md:px-16 font-semibold rounded-md text-white">
              SELECT
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between md:w-8/12 mt-2 md:mt-0 md:gap-0 gap-2">
        <div className="md:w-4/12">
          <p>Monthly price</p>
        </div>
        <div>
          <p>$6.99/mo</p>
        </div>
        <div>
          <p>$12.99/mo</p>
        </div>
        <div>
          <p>$69.99/mo</p>
        </div>
      </div>
      <div className="w-[92%] md:w-8/12 my-6">
        {plan.map((item, i) => {
          return (
            <div key={item.id} className="flex my-6  flex-row justify-between  ">
              <div className="w-4/12">
                <p>{item.planName}</p>
              </div>
              <div>
                {item.hulu ? (
                  <CheckIcon className="text-[#00ed82]" />
                ) : (
                  <div className="bg-slate-300 w-px h-px" />
                )}
              </div>
              <div>
                {item.huluNoAdd ? (
                  <CheckIcon className="text-[#00ed82]" />
                ) : (
                  <div className="bg-slate-300 w-px h-px" />
                )}
              </div>
              <div>
                {item.huluLive ? (
                  <CheckIcon className="text-[#00ed82]" />
                ) : (
                  <div className="bg-slate-300 w-px h-px" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlanSection;
