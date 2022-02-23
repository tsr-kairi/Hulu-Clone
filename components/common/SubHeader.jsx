import React from "react";

export default function SubHeader({ text }) {
  return (
    <small className="text-[12px] text-[#00ed82] uppercase font-bold mb-5">
      {text}
    </small>
  );
}
