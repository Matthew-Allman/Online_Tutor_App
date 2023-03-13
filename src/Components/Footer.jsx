import React from "react";

import { footerData } from "../constants/constants";
import { contactData } from "../constants/constants";

const Footer = () => {
  const { quickLinks, infoLinks, tagline } = footerData;
  const { info } = contactData;

  return (
    <section className="section w-full h-[700px] lg:h-[350px] mt-[8rem] lg:mt-40 flex flex-col gap-y-3">
      <div className="flex-[1.8] w-full h-full mx-auto flex flex-col lg:flex-row justify-center mt-4 items-start px-3 lg:px-4 gap-y-5 lg:gap-y-0 lg:gap-x-5 pt-10 lg:pt-16 border-t border-dark pb-10 lg:pb-0">
        <div className="flex-1 flex flex-col lg:gap-y-4">
          <h2 className="flex flex-row justify-start gap-x-[0.2rem] font-semibold lg:font-medium text-[20px] sm:text-[22px] md:text-[29px] lg:text-[23px] xl:text-[25px] cursor-pointer">
            <i className="ri-pantone-line"></i> Online Tutors
          </h2>
          <p className="font-light text-[18px] md:text-[20px] text-dark">
            {tagline}!
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          <h5 className="text-[20px] font-semibold">Explore</h5>
          <div className="flex flex-col items-start gap-y-2">
            {quickLinks.map((item, index) => (
              <a
                className="font-normal text-[16px] md:text-[17px] text-dark hover:text-teal transition duration-300"
                key={index}
                href={item.url}
              >
                {item.display}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h5 className="text-[20px] font-semibold">Information</h5>
          <div className="flex flex-col items-start gap-y-2">
            {infoLinks.map((item, index) => (
              <a
                className="font-normal text-[16px] md:text-[17px] text-dark hover:text-teal transition duration-300"
                key={index}
                href={item.url}
              >
                {item.display}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h5 className="text-[20px] font-semibold">Get in Touch</h5>
          <div className="flex flex-col items-start gap-y-2">
            <span>
              <a
                className="font-normal text-[16px] md:text-[17px] text-dark hover:text-teal transition duration-300"
                href="#"
              >
                {info.phone.number}
              </a>
            </span>
            <span>
              <a
                className="font-normal text-[16px] md:text-[17px] text-dark hover:text-teal transition duration-300"
                href="#"
              >
                {info.email.address}
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-0.2 flex justify-center items-center">
        <p>
          Powered by{" "}
          <a
            className="text-teal hover:text-dark transition duration-300"
            href="https://www.lexxwebdesigns.com"
          >
            Lexx Web Designs
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
