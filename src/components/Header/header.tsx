import React, { useState } from "react";
import { BsDiscord, BsCart3 } from "react-icons/bs";

import slashLogo from "@/assets/slash_sem_fundo.png";

import { MenuMobile } from "../MenuMobile/menuMobile";

interface CustomButtonProps {
  value: string;
  Icon?: React.ElementType;
}

const CustomButton = ({ value, Icon }: CustomButtonProps) => {
  const [hover, setHover] = useState(false);

  const iconStyle =
    value == "DISCORD"
      ? `${!hover ? "bg-blue-600" : "text-blue-600"} ${!hover ? "text-white" : "bg-white"} p-1 rounded-md`
      : `${hover ? "text-white" : "text-purple-500"}`;
  return (
    <button
      className="flex items-center gap-1 text-gray-400 font-extrabold	text-xl border-4 border-purple-500 p-2 -skew-x-[18deg] hover:boder-0 hover:bg-purple-500 hover:text-white transition duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {value}
      {Icon && <Icon className={iconStyle + " transition duration-75"} />}
    </button>
  );
};

export const Header = () => {
  return (
    <header className="w-screen flex items-center justify-between shadow-md py-3 px-8 bg-white">
      <figure className="w-20">
        <img src={slashLogo} alt="Imagem de uma caveira em desenho" className="w-full h-full" />
      </figure>

      <nav className="sm:hidden lg:block">
        <ul className="flex items-center gap-7 list-none">
          <li>
            <CustomButton value="DISCORD" Icon={BsDiscord} />
          </li>
          <li>
            <CustomButton value="LOJA" Icon={BsCart3} />
          </li>
          <li>
            <CustomButton value="LOREM IPSUM" />
          </li>
        </ul>
      </nav>

      <MenuMobile />
    </header>
  );
};
