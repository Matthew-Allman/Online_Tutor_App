import React from "react";

import { coursesData } from "../constants/constants";

import { Button } from "../Components/index";
import { CourseCards } from "../Components/index";

import { TbConfetti } from "react-icons/tb";

const Courses = () => {
  const { title, coursesArr, desc, btnText } = coursesData;

  return (
    <section id="courses" className="section w-full h-auto">
      <div className="w-full h-full mx-auto flex flex-col px-3 lg:px-4 mt-4 gap-y-16 lg:gap-y-6">
        {/* Title and text and button */}
        <div className="w-full flex-[0.75] flex flex-col lg:flex-row justify-between md:px-10 lg:px-0">
          {/* title and text */}
          <div className="flex-[1.25] flex flex-col justify-center items-start gap-y-6">
            <h3>{title}</h3>
            <p className="text-[17px] sm:text-[20px] lg:text-[18px] font-medium mb-4">
              {desc}
            </p>
          </div>
          {/* button */}
          <div className="flex-[0.75] flex justify-start lg:justify-end items-center">
            <Button icon={<TbConfetti size={"20px"} />} text={btnText} />
          </div>
        </div>
        {/* Courses */}
        <CourseCards courses={coursesArr} />
      </div>
    </section>
  );
};

export default Courses;
