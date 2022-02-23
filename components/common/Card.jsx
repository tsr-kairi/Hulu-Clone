import Image from "next/image";
import React from "react";

export default function Card({ title, subTitle, imageUrl }) {
  return (
    <div className="relative">
      <Image height={"450px"} width={"294px"} src={imageUrl} alt="image" />
      <div className="absolute top-0 p-6">
        <p className="text-white text-base">{title}</p>
        <p className="text-white font-black text-2xl">{subTitle}</p>
      </div>
    </div>
  );
}
