import React from 'react'

export default function Heading({text}) {
  return (
    <h1 className="md:mb-7 tracking-[-0.5px] md:leading-[75px] text-center font-black text-[36px] md:text-[64px] text-white">
      {text}
    </h1>
  );
}
