import React, { useState } from "react";
import { BsDiscord, BsCart3 } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={onToggle}>
        <IoMdMenu className="text-purple-500 text-4xl" />
      </button>
      <div
        className={`fixed top-0 right-[-208px] ${
          isOpen ? "translate-x-[-208px]" : "translate-x-0"
        } z-30 w-52 h-screen bg-purple-500 transition delay-300 px-3`}>
        <button onClick={onToggle} className="absolute top-5 right-5">
          <IoMdClose className="text-white text-3xl" />
        </button>
        <nav className="mt-24">
          <ul className="list-none flex flex-col gap-4">
            <li
              onClick={onToggle}
              className="flex items-center gap-3 text-xl font-normal text-white border-b-[1px] border-[rgba(255,255,255,0.7)] pb-1">
              Discord <BsDiscord className="" />
            </li>
            <li
              onClick={onToggle}
              className="flex items-center gap-3 text-xl font-normal text-white border-b-[1px] border-[rgba(255,255,255,0.7)] pb-1">
              Loja <BsCart3 />
            </li>
            <li
              onClick={onToggle}
              className="flex items-center gap-3 text-xl font-normal text-white border-b-[1px] border-[rgba(255,255,255,0.7)] pb-1">
              Lorem Ipsum
            </li>
          </ul>
        </nav>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`w-screen h-screen bg-gray-500 opacity-30 fixed top-0 left-0 z-20 ${!isOpen ? "hidden" : "block"}`}
      />
    </>
  );
};
