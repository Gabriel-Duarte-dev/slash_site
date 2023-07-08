import React from "react";

import gangsta from "@/assets/gangsta.png";
import man from "@/assets/Tale1.webp";

import { PresentationCard } from "../PresentationCard/presentationCard";
import { WaveSVG } from "../waveSvg";

export const PresentationSection = () => {
  return (
    <>
      <WaveSVG className="w-screen fill-white drop-shadow-xl" />
      <section className="w-screen bg-white z-10 flex sm:flex-col lg:justify-center items-center gap-4 pb-40 sm:pt-28 lg:pt-0">
        <figure className="sm:hidden w-60">
          <img
            src={gangsta}
            alt="Desenho de um homem armado com terno roxo"
            className="w-full"
            style={{ transform: "rotateY(180deg)" }}
          />
        </figure>
        <div className="flex gap-14 flex-wrap justify-center">
          <PresentationCard />
          <PresentationCard />
          <PresentationCard />
        </div>
        <figure className="sm:hidden w-48">
          <img src={man} alt="Desenho de um homem com braço com jaqueta preta" className="w-full" />
        </figure>
      </section>
    </>
  );
};
