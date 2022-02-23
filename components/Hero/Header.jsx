import Link from "next/link";
import React, { useState, Fragment } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import Button from "../common/Button";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-end mr-5 md:mr-9 h-20 items-center">
      <Link href={"/login"}>
        <span className=" text-white text-[14px] font-bold tracking-widest uppercase cursor-pointer md:block hidden">
          Log in
        </span>
      </Link>

      <div className="md:hidden flex inset-0">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          // onClick={openMenu}
          className="text-sm z-50 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {open ? (
            <VscClose className="text-black w-[28px] h-[28px] font-semibold" />
          ) : (
            <VscMenu className="text-white w-[24px] h-[24px]" />
          )}
        </button>
        <div
          className={`flex flex-col h-[84vh] z-40 cursor-pointer absolute top-0 bg-white left-0 w-full pl-9 pt-6 ${
            open
              ? "bottom-[100vh] transition-all duration-700 ease-in"
              : "top-[-100vh] transition-all duration-700 ease-in"
          }`}
        >
          <Link href={"/login"}>
            <span className="text-2xl flex flex-col transition-all duration-700 ease-in">
              Login
              <span
                className={` absolute h-1 w-14 bg-black left-9 top-16 ${
                  open
                    ? "left-[100%] transition-all duration-[7000ms] ease-in"
                    : "right-[-100%] transition-all duration-[100ms] ease-in"
                }`}
              ></span>
            </span>
          </Link>
          <Button text={"GET THE DISNEY BUNDLE"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
