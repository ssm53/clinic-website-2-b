"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/svgs/logodarktheme.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Button from "./custom_button";
import { Sidebar } from "@/components/sidebar";
import { motion, sync, useCycle } from "framer-motion";

import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div>
      <div className="flex justify-between px-[24px] bg-[#B0B3B8] ">
        <div className="flex justify-between items-center">
          <span className="pl-3">
            <FaInstagram />
          </span>
          <span className="pl-3">
            <FaTwitter />
          </span>
          <span className="pl-3">
            <FaLinkedin />
          </span>
        </div>
        <div className="italic" style={{ fontWeight: "300" }}>
          +60123397028
        </div>
      </div>
      <nav className="border-gray-500 border-b-2 px-[24px] p-3 bg-[#202123] ">
        <div className="flex flex-wrap items-center justify-between ">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} width={68} height={68} alt="logo error" />
            <h1 className="text-20 text-[#B0B3B8] pl-5 font-semibold">LOGO</h1>
          </Link>
          <div className="flex w-170 justify-between">
            <div
              className="button-wrapper hidden md:block"
              style={{
                zIndex: isOpen ? 0 : 2,
                transitionDelay: isOpen ? "0s" : "1s",
                transitionDuration: isOpen ? "0s" : "1s",
                marginRight: "3rem",
              }}
            >
              <Link href="/#contact">
                <Button color="white" btnText="Contact Us >" />
              </Link>
            </div>
          </div>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            toggleOpen={toggleOpen}
            isOpenToggle={isOpen}
          />
        </div>
      </nav>
    </div>
  );
}
