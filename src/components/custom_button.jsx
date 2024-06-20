import React from "react";

const button = (props) => {
  const baseClasses = "border text-[20px] px-3 py-2";
  const colorClasses = {
    white: "text-[#202123] bg-[#B0B3B8] hover:bg-white hover:text-[#2A2D36]",
    golden:
      "text-[#202123] bg-[#B0B3B8] hover:bg-white hover:text-[#2A2D36] hover:border-[#2A2D36]",
  };

  return (
    <button
      className={`${baseClasses} ${
        colorClasses[props.color] || "hover:bg-gray-700 border"
      }`}
    >
      {props.btnText}
    </button>
  );
};

export default button;
