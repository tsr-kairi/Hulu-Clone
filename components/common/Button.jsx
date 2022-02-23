import React from 'react'

export default function Button({text}) {
  return (
    <button
      type="button"
      className="bg-white rounded-md px-10 py-4 mt-6 inline-flex items-center justify-center uppercase text-[14px] p-[0px/32px] text-[#040505] font-bold -tracking-tighter hover:text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 outline-none"
    >
      {text}
    </button>
  );
}
