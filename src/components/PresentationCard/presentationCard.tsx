import React from "react";

export const PresentationCard = () => {
  return (
    <div className="w-[14.5rem] text-center">
      <div className="w-full h-[8.6875rem] bg-gradient-to-br from-[#FF5EF9] to-[#AD00FF_70.31%] rounded-xl shadow-[0_0_0.9375rem_-0.125rem_rgb(0,17,167)]"></div>
      <p className="my-3 text-sm text-gray-400 font-medium">
        Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
      </p>
      <button className="w-full h-11 bg-gradient-to-br from-[#FF5EF9] to-[#AD00FF_70.31%] rounded-[0.25rem] text-white font-black text-xl shadow-[0_0_0.4375rem_-0.125rem_rgb(0,17,167)]">
        BOTÃO
      </button>
    </div>
  );
};
