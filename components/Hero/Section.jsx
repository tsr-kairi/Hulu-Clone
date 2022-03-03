import React from "react";
import Image from "next/image";
import SubHeader from "../common/SubHeader";
import Para from "../common/Para";
import Button from "../common/Button";

function Section() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center px-10 py-[60px] mt-10">
        <SubHeader text={"bundle with any hulu plan & save"} />
        <Image
          className="object-contain mb-3"
          src="/images/site-logo.png"
          alt="Logo"
          width={600}
          height={130}
          min-width={100}
        />
        <Para
          text={
            "Get endless entertainment, live sports, and the shows and movies you love."
          }
        />
        <Button text={"get the disney bundle"} />
        <div className="flex m-0">
          <small className="text-[10px] text-[#868d9b] mt-4 font-bold underline cursor-pointer">
            Whats included?
          </small>
          <small className="text-[10px] text-[#868d9b] mt-4 mx-1 font-semibold">
            See
          </small>
          <small className="text-[10px] text-[#868d9b] mt-4 font-semibold underline cursor-pointer hover:text-gray-300">
            Bundle terms.
          </small>
        </div>
        <span className="font-medium text-[16px] text-[#f8f8f8] underline mt-4 cursor-pointer">
          Sign up for Hulu only
        </span>
      </section>
    </div>
  );
}

export default Section;
