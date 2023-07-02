import React from "react";

import gangsta from "@/assets/gangsta.png";
import man from "@/assets/Tale1.webp";

import { PresentationCard } from "../PresentationCard/presentationCard";
import { WaveSVG } from "../waveSvg";

export const PresentationSection = () => {
  return (
    <>
      <WaveSVG className="w-screen fill-white drop-shadow-xl" />
      <section className="w-screen bg-white z-10 flex justify-center items-center gap-4">
        <figure className="w-60">
          <img
            src={gangsta}
            alt="Desenho de um homem armado com terno roxo"
            className="w-full"
            style={{ transform: "rotateY(180deg)" }}
          />
        </figure>
        <div className="flex gap-14">
          <PresentationCard />
          <PresentationCard />
          <PresentationCard />
        </div>
        <figure className="w-48">
          <img src={man} alt="Desenho de um homem com braço com jaqueta preta" className="w-full" />
        </figure>
      </section>
    </>
  );
};
