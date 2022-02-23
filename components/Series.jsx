import Image from "next/image";
import React from "react";
import Card from "./common/Card";
import Heading from "./common/Heading";
import Para from "./common/Para";
import SubHeader from "./common/SubHeader";

import CardData from "../data/card";

function Series() {
  return (
    // TODO: need to replace heading, subHeading and paragraph with components.
    <div className="bg-black flex flex-col">
      <div className="items-center mt-[80px] flex flex-col">
        <SubHeader text={"INCLUDE IN ALL PLANS"} />
        <Heading text={"All The TV You Love"} />
        <Para
          text={`Stream full seasons of exclusive series, current-season episodes, hit movies,
          Hulu Originals, kids shows, and more.`}
        />
      </div>
      <div className="grid md:grid-flow-col gap-5 justify-center pt-14 pb-14 md:pb-28">
        {CardData.map((item, i) => (
          <Card
            imageUrl={item.imageUrl}
            subTitle={item.subTitle}
            title={item.title}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Series;
