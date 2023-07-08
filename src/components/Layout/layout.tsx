import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";

export const Layout = () => {
  return (
    <div className="w-full h-full bg-slate-50 flex flex-col items-center overflow-x-hidden">
      <Header />
      <div className="w-full sm:max-w-[320px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
