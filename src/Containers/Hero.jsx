import React from "react";

import { heroData } from "../constants/constants";
import { Button } from "../Components/index";

import { FaUserGraduate } from "react-icons/fa";

const Hero = () => {
  const { desc, image, tagline } = heroData;

  return (
    <section className="section w-full h-auto">
      <div className="w-full h-full flex flex-col gap-y-10 lg:gap-x-0 lg:flex-row justify-center items-center px-1 lg:px-4 pt-1 md:pt-30 lg:pt-0">
        {/* title and text */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-y-7 text-center lg:text-left">
          <div className="flex flex-col gap-y-4 lg:gap-y-2 sm:mb-3 lg:mb-1">
            <p className="font-normal text-[18px] text-teal">{tagline}!</p>
            <h2 className="text-[23px] md:text-[33px] lg:text-[29px] xl:text-[33px] leading-[2rem] sm:leading-[3rem] lg:leading-normal tracking-[0.02rem]">
              Anytime Anywhere, <br />
              Learn on your Schedule
            </h2>
          </div>
          <div className="flex flex-col gap-y-5 xl:pr-[8rem] lg:pr-[3rem] px-5 md:px-10 lg:pl-0">
            <p className="text-[17px] sm:text-[20px] lg:text-[18px] font-medium mb-4">
              {desc}
            </p>
            <div className="w-full flex justify-center lg:justify-start">
              <Button icon={<FaUserGraduate />} text={"Start Learning Now"} />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="lg:flex-1 w-full h-full justify-center items-center flex flex-col">
          <img
            src={image}
            alt="Online tutor"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
