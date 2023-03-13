import React from "react";

const Button = ({ icon, text }) => {
  return (
    <button
      onClick={() => {
        window.location.href = "#contact";
      }}
      className={`flex flex-row gap-x-3 justify-center items-center transition duration-300 hover:bg-transparent hover:border-2  border-teal bg-teal capitalize font-semibold w-[12.7rem] h-[2.5rem] rounded-lg`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
