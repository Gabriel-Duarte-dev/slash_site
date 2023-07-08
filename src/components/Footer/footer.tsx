import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord, BsTiktok } from "react-icons/bs";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen min-h-[12.5rem] flex items-center justify-center bg-purple-500 relative">
      <div className="flex justify-center items-center sm:gap-5 md:gap-10">
        <div className="flex flex-col items-center">
          <AiOutlineInstagram className="sm:text-2xl md:text-4xl bg-white text-purple-500 rounded-md" />
          <p className="sm:text-sm md:text-base mt-1 font-bold text-white">@Slash RP</p>
        </div>
        <div className="flex flex-col items-center">
          <BsDiscord className="sm:text-2xl md:text-4xl bg-white text-blue-600 rounded-md p-1" />
          <p className="sm:text-sm md:text-base mt-1 font-bold text-white">Slash RP</p>
        </div>
        <div className="flex flex-col items-center">
          <BsTiktok className="sm:text-2xl md:text-4xl bg-black text-white rounded-md p-1" />
          <p className="sm:text-sm md:text-base mt-1 font-bold text-white">@Slash RP</p>
        </div>
      </div>

      <p className="text-white font-light sm:text-[10px] md:text-[0.75rem] absolute bottom-0 left-1/2 -translate-x-2/4">
        Copyright © 2023 - {currentYear} - Todos os direitos reservados a Slash RP
      </p>
    </footer>
  );
};
