import React from "react";

const CourseCards = ({ courses }) => {
  return (
    <div className="flex-[1.25] flex flex-col lg:flex-row items-start justify-center gap-y-16 lg:gap-y-0 lg:gap-x-12 md:px-10 lg:px-0">
      {courses.map((item, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col justify-center gap-y-3 lg:gap-y-5"
        >
          {/* Course image and title */}
          <div className="flex-[1.5] flex flex-col gap-y-5">
            <div
              id="container"
              className="flex static lg:relative overflow-hidden"
            >
              <img
                src={item.ImgUrl}
                alt={item.imgAlt}
                className="rounded-lg lg:rounded-lg md:rounded-full w-full h-full"
              />
              <div className="overlay-top rounded-lg hidden lg:block">
                <button
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                  id="text"
                  className="bg-teal text-black capitalize p-3 rounded-full hover:bg-black hover:text-white transition duration-300"
                >
                  Register now!
                </button>
              </div>
            </div>
            <p className="text-[19px] text-dark font-semibold text-center lg:text-left leading-[1.8rem] lg:leading-[2.2rem] tracking-[0.02rem]">
              {item.title}
            </p>
          </div>
          {/* course content */}
          <div className="flex-[0.5] flex flex-col gap-y-1 lg:gap-y-3">
            <div className="flex-1 flex flex-row lg:justify-between justify-between md:justify-around">
              <span className="flex justify-center items-center gap-x-1">
                <i className="ri-book-open-line"></i>
                <p className="text-dark font-medium">{item.lesson} Lessons</p>
              </span>
              <span className="flex justify-end items-center gap-x-1">
                <i className="ri-user-line"></i>
                <p className="text-dark font-medium">{item.students}K</p>
              </span>
            </div>
            <div className="flex-1 flex flex-row lg:justify-between justify-between md:justify-around">
              <span className="flex justify-center items-center gap-x-1">
                <i className="ri-star-fill"></i>
                <p className="text-dark font-medium">{item.rating}K</p>
              </span>
              <span className="flex justify-end items-center gap-x-1">
                <a
                  href="#contact"
                  className="text-teal hover:text-[#808080b0] transition duration-300 text-[15px]"
                >
                  Enroll Now
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
