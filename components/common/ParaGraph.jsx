import React from 'react'

export default function ParaGraph({text}) {
  return (
    <p className="md:mb-7 tracking-[-0.5px] md:leading-[75px] text-center font-black text-[36px] md:text-[64px] text-white">
      {text}
    </p>
  );
}
