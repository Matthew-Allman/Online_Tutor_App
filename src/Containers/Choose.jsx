import React, { useState } from "react";

import { chooseData } from "../constants/constants";

import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

const Choose = () => {
  const [isOpen, setOpen] = useState(false);

  const { title, desc, image } = chooseData;

  return (
    <section id="whyUs" className="section w-full h-auto mt-20">
      <div className="w-full h-full mx-auto px-3 lg:px-4 flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-6">
        {/* Title and text */}
        <div className="flex-1 h-full flex flex-col justify-center gap-y-5 px-5 md:px-10 lg:px-0">
          <h3>{title}</h3>
          <p className="text-[17px] sm:text-[20px] lg:text-[18px] font-medium lg:w-[90%]">
            {desc}
          </p>
        </div>
        {/* Image and video */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="flex-1 relative px-5 md:px-10"
        >
          <img
            src={image}
            alt="Benefits of Online learning"
            className="rounded-full"
          />
          <span className="play_icon">
            <i className="ri-play-circle-line hover:text-dark transition duration-300"></i>
          </span>
          <p className="text-[13px] sm:text-[18px] lg:text-[15px] text-center mt-4">
            Video Full Rights and Credits:{" "}
            <a
              className="text-teal hover:text-dark transition duration-300"
              href="https://www.youtube.com/@tutorcompinfotech4706"
            >
              Tutor Comp
            </a>
          </p>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="DimGpf4ImI0"
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
