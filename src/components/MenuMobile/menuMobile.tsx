import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const MenuMobile = () => {
  const [translate, setTranslate] = useState("0");

  return (
    <>
      <button onClick={() => setTranslate("-208px")}>
        <IoMdMenu className="text-purple-500 text-4xl" />
      </button>
      <div className={`fixed top-0 right-[-208px] translate-x-[${translate}] z-20 w-52 h-screen bg-purple-500`}></div>
    </>
  );
};
