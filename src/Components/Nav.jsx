import React from "react";

const Nav = ({ navLinks }) => {
  return (
    <nav>
      <ul className="flex flex-row gap-x-7 xl:gap-x-10">
        {navLinks.map((item, index) => (
          <li
            className="font-semibold lg:text-[15px] xl:text-[18px] cursor-pointer hover:text-teal transition duration-200"
            key={index}
          >
            <a href={item.url}>{item.display}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
