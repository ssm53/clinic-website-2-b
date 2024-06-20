import React from "react";
import ServicesBar from "@/components/services_bar";
import ServicesText from "@/components/services_text";
import ImageCont from "@/components/image";
import imgo from "../../../public/Images/HomeImages/imgo.jpg";
import ServicesCard from "@/components/services_cards";

const services = () => {
  return (
    <div className="bg-[#202123] ">
      <ServicesBar />
      <div className="flex flex-col md:flex-row text-white">
        <ServicesText />
        <ImageCont image={imgo} />
      </div>
      <ServicesCard />
    </div>
  );
};

export default services;
