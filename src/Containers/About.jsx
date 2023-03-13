import React from "react";

import { aboutData } from "../constants/constants";
import CountUp from "react-countup";

const About = () => {
  const { title, desc, image, countUpArr } = aboutData;

  return (
    <section
      id="about"
      className="section h-auto lg:h-[650px] about-gradient lg:pt-0"
    >
      <div className="w-full h-full flex flex-col-reverse justify-between items-center lg:flex-row px-1 lg:px-4 lg:pt-0 gap-y-4 lg:gap-y-0 lg:gap-x-10">
        {/* Image */}
        <div className="flex-1 h-full flex items-center mb-10 lg:mb-0">
          <img src={image} alt="Learner" className="rounded-full h-[60%]" />
        </div>
        {/* Text and title */}
        <div className="flex-1 h-full flex flex-col justify-center items-start gap-y-5 lg:gap-y-8 lg:pl-16 pl-0 pt-16 lg:pt-0">
          {/* Title and text */}
          <div className="flex flex-col items-center lg:items-start px-5 md:px-10 lg:px-0 gap-y-3">
            <h3>{title}</h3>
            <p className="text-center lg:text-left text-[17px] sm:text-[20px] lg:text-[18px] font-light">
              {desc}
            </p>
          </div>
          {/* Counter */}
          <div className="w-full flex flex-row justify-around md:justify-center lg:justify-start items-center h-auto md:gap-x-10 mb-6 lg:mb-0">
            {countUpArr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start justify-center"
              >
                <span>
                  <CountUp
                    start={item.startTime}
                    end={item.endTime}
                    duration={item.duration}
                    suffix={item.suffix}
                    className="font-semibold text-[23px] lg:text-[26px]"
                  />
                </span>
                <p className="text-[15px] sm:text-[18px] lg:text-[17px] font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
