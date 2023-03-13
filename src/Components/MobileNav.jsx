import React from "react";

const MobileNav = ({ navLinks, setToggle }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <div className="w-full h-full absolute flex flex-col justify-center items-center gap-y-12 sm:gap-y-16">
        <ul className="flex flex-col justify-center items-center gap-y-8">
          {navLinks.map((item, index) => (
            <li
              onClick={() => setToggle(false)}
              className="font-semibold text-[20px] sm:text-[34px]"
              key={index}
            >
              <a href={item.url}>{item.display}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <p className="flex justify-center gap-x-2 text-[19px] sm:text-[35px] cursor-pointer hover:text-teal transition duration-200">
            <i className="ri-phone-line text-[18px] sm:text-[30px]"></i> +1
            (365) 776 9254
          </p>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
