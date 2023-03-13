import React, { useState } from "react";

import { MobileNav, Nav } from "../Components";
import { navLinks } from "../constants/constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className="w-full h-[150px] section">
      <div className="w-full h-full pt-10 lg:pt-3 px-7 sm:px-10 md:px-10 lg:px-6 flex flex-row justify-between lg:items-center">
        {/* Logo */}
        <div className="xl:flex-[0.5] w-auto">
          <h2 className="flex flex-row items-center justify-start gap-x-[0.2rem] font-[500] text-[23px] sm:text-[27px] md:text-[33px] lg:text-[28px] xl:text-[30px] cursor-pointer">
            <i className="ri-pantone-line"></i> Online Tutors
          </h2>
        </div>
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-[1.5] h-full justify-end items-center lg:pr-6 xl:pr-16 lg:gap-x-6 xl:gap-x-8">
          <Nav navLinks={navLinks} />

          <div className="flex items-center">
            <p className="flex justify-center gap-x-2 text-[16px] cursor-pointer hover:text-teal transition duration-200">
              <i className="ri-phone-line text-[15px]"></i> +1 (365) 776 9254
            </p>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="w-auto flex justify-start lg:hidden pt-2 sm:pt-0">
          <i
            onClick={handleClick}
            className={`${
              toggle
                ? "ri-close-line text-[30px] sm:text-[40px] top-[2rem] fixed right-[1rem] z-[20]"
                : "ri-menu-3-fill text-[25px] sm:text-[35px] z-[20]"
            }`}
          ></i>

          <div
            className={`${
              toggle
                ? "h-full w-full bg-pearl fixed top-0 left-0 duration-[800ms] transition translate-y-[none]"
                : "-translate-y-[100vh] duration-[1000ms] transition bg-pearl"
            } z-10`}
          >
            <div className="gs"></div>
            <MobileNav navLinks={navLinks} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
