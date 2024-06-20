"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MainText = (props) => {
  // const sizes = {
  // largeSizeText: "text[35px] lg:text-[40px]",
  // smallSizeText:
  // "text-[24px] font-normal text-[16px] font-normal sm:text-[16px] md:text-[24px] lg:text-[24px]",
  // };
  const colors = {
    white: "text-white ",
    black: "text-black",
    green: "text-[#5E5E3C]",
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id ${id} not found.`);
    }
  };

  return (
    <div className=" flex justify-end bg-[#202123]">
      <div className="flex flex-col md:flex-row h-full w-[100%] ">
        <div className="flex flex-col justify-center md:w-1/2 pl-[24px] mt-8 md:my-10 mr-10 text-[20px] sm:text-[30px] lg:text-[40px]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className={`${colors[props.textColor]}`}
          >
            {props.title}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className={`${colors[props.textColor]}`}
          >
            {props.subTitle}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="my-8 md:my-10 w-[13rem]"
          >
            <Link href="/services">
              <p className="text-[15px] md:text-[20px] font-normal text-[#B0B3B8] hover:text-[#ffffff]">
                {props.link1}
              </p>
            </Link>

            <p
              className="text-[15px] md:text-[20px] font-normal text-[#B0B3B8] hover:text-[#fafaf6] cursor-pointer"
              onClick={() => scrollToSection("team")}
            >
              {props.link2}
            </p>

            <p
              className="text-[15px] md:text-[20px] font-normal text-[#B0B3B8] hover:text-[#f8f8f7] cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              {props.link3}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="flex md:w-1/2"
        >
          <Image src={props.image} alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default MainText;
