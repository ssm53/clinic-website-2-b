import React from "react";
import Image from "next/image";

const AddressTitleIcons = (props) => {
  const colorStyle = {
    dark: "text-black",
    ligth: "text-white",
  };

  return (
    <div className="flex flex-col w-64 my-5">
      <div className="flex ">
        <div className="mr-5 cursor-pointer">
          <Image src={props.image} alt="" width="27" height="27" />
        </div>
        <div className="flex-col">
          <h3
            className={`${
              colorStyle[props.customColor]
            } || text-base font-bold cursor-pointer`}
          >
            {props.title}
          </h3>
          <p
            className={`${
              colorStyle[props.customColor]
            } || text-white text-sm font-normal cursor-pointer`}
          >
            {props.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressTitleIcons;
