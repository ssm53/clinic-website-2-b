import React from "react";
import Image from "next/image";

const ImageCont = (props) => {
  return (
    <div className="w-[100%] md:w-[50%]">
      <Image
        src={props.image}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ImageCont;
