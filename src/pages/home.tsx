import React from "react";

import slashBanner from "@/assets/slash_sem_fundo.png";
import { PresentationSection } from "@/components/PresentationSection/presentationSection";

export const Home = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center relative">
      <section className="w-full mt-40 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <figure className="w-[39.625rem]">
            <img src={slashBanner} alt="Logo Slash com uma caveira no meio" className="w-full" />
          </figure>
          <h1 className="text-4xl text-black font-extrabold opacity-5 mt-8">O MELHOR ROLEPLAY QUE EXISTE</h1>
        </div>
      </section>

      <PresentationSection />
    </main>
  );
};
