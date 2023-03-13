import React from "react";

import { ReasonsData } from "../constants/constants/";

const Reasons = () => {
  return (
    <section className="section h-auto xl:h-[400px] w-full bg-white mt-10">
      <div className="w-full h-full mx-auto flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-0 lg:gap-x-8 items-center px-3 lg:px-4 py-10 lg:py-4 xl:py-0">
        {ReasonsData.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center items-center bg-[#17bf9d13] rounded-full p-10 shadow-lg"
          >
            <i className={`${item.icon} text-[30px]`}></i>
            <div className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-1">
              <h4 className="text-[22px] text-center leading-normal">
                {item.title}
              </h4>
              <p className="text-[17px] sm:text-[20px] lg:text-[18px] font-medium mb-4 text-center leading-normal lg:leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
