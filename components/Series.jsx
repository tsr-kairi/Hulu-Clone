import Image from "next/image";
import React from "react";
import ParaGraph from "./common/ParaGraph";
import SubHeader2 from "./common/SubHeader2";

export const series = [
  {
    title: "Past & Current Seasons",
    subTitle: "TV Shows",
    imageUrl:
      "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/01_ptfreb.jpg",
  },
  {
    title: "New & Classic",
    subTitle: "Movies",
    imageUrl:
      "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/02_inijjz.jpg",
  },
  {
    title: "Groundbreaking",
    subTitle: "Hulu Originals",
    imageUrl:
      "https://res.cloudinary.com/adityakmr7/image/upload/v1644419730/03_jbxkqs.jpg",
  },
  {
    title: "Add-on",
    subTitle: "Premiums",
    imageUrl:
      "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/04_una1og.jpg",
  },
];
function Series() {
  return (
    <div className="bg-black flex flex-col">
      <div className="items-center mt-[80px] flex flex-col">
        <SubHeader2 text={"INCLUDE IN ALL PLANS"} />
        <ParaGraph text={"All The TV You Love"} />
        <p className="max-w-[85%] md:max-w-[50%] text-lg md:text-xl text-center text-white">
          Stream full seasons of exclusive series, current-season episodes, hit movies,
          Hulu Originals, kids shows, and more.
        </p>
      </div>
      <div className="grid md:grid-flow-col gap-5 justify-center pt-14 pb-14 md:pb-28">
        {series.map((item, i) => {
          return (
            <div key={item.title} className="relative">
              <Image height={"450px"} width={"294px"} src={item.imageUrl} alt="image" />
              <div className="absolute top-0 p-6">
                <p className="text-white text-base">{item.title}</p>
                <p className="text-white font-black text-2xl">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Series;
