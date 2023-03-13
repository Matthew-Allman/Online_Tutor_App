import React from "react";

import { contactData } from "../constants/constants";
import { Button } from "../Components";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";

const Contact = () => {
  const { title, info, form } = contactData;

  return (
    <section id="contact" className="section w-full h-auto hero-gradient">
      <div className="w-full h-full mx-auto px-3 lg:px-4 flex flex-col lg:flex-row justify-center pt-16 lg:pt-10 md:gap-y-5 lg:gap-y-0">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-start gap-y-8">
          <h2 className="text-[45px] mb-4">{title}</h2>
          <div className="w-full flex flex-col items-start pr-20 gap-y-3 lg:gap-y-1">
            <h4 className="text-[25px] font-semibold">{info.title}</h4>
            <p className="text-[18px] md:text-[20px] text-dark">
              {info.subtitle}
            </p>
            <p className="flex flex-row justify-center items-center gap-x-3 hover:text-gray-500 transition duration-300 cursor-pointer">
              <FaPhoneAlt /> {info.phone.number}
            </p>
            <p className="flex flex-row justify-center items-center gap-x-3 hover:text-gray-500 transition duration-300 cursor-pointer">
              <FaEnvelope /> {info.email.address}
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex-1 flex justify-center items-center pt-8">
          <form className="flex flex-col gap-y-12 w-full">
            <input
              className="bg-transparent border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 hover:border-teal transition duration-150 focus:placeholder:text-white"
              placeholder={form.name}
              type="text"
            />
            <input
              className="bg-transparent border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 hover:border-teal transition duration-150 focus:placeholder:text-white"
              placeholder={form.email}
              type="text"
            />
            <input
              className="bg-transparent border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 hover:border-teal transition duration-150 focus:placeholder:text-white"
              placeholder={form.message}
              type="text"
            />
            {/* Button */}
            <Button
              icon={<FcCustomerSupport size={"20px"} />}
              text={"Send message now"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
