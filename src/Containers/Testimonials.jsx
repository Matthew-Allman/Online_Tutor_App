import React from "react";

import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { testimonialData } from "../constants/constants";

const Testimonials = () => {
  const { testimonialArr } = testimonialData;

  return (
    <section
      id="testimonial"
      className="w-full section h-[500px] mt-10 about-gradient"
    >
      <div className="w-full h-full mx-auto px-3 lg:px-4 flex items-center">
        {/* Slider */}
        <div className="flex-1 flex flex-col justify-center items-center gap-y-8 h-full">
          <h3 className="lg:text-[30px] sm:text-[29px] text-[27px]">
            Our Students' Voices
          </h3>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="w-[325px] sm:w-[600px] lg:w-[800px] xl:max-w-[1200px]"
          >
            {testimonialArr.map((item, index) => (
              <SwiperSlide key={index} className="bg-[#17bf9dd0]">
                <div className="flex flex-col justify-center items-center p-9">
                  <h6 className="text-[20px] font-bold text-center leading-relaxed mb-2">
                    {item.title}
                  </h6>
                  <p className="text-dark text-[14px] sm:text-[18px] lg:text-[16px] font-medium mb-4 text-center">
                    {item.desc}
                  </p>
                  <div className="flex flex-col">
                    <h6 className="text-[17px] text-center">{item.name}</h6>
                    <p className="text-dark font-light text-[15px]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
