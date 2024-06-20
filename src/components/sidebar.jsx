import * as React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions.js";
import { MenuToggle } from "./menu_toggle.jsx";
import { Navigation } from "./navigation.jsx";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 207px 62px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 260px 70px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = ({ toggleOpen, isOpenToggle }) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        isOpenToggle
      ) {
        toggleOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, isOpenToggle, toggleOpen]);
  const closeSidebar = () => {
    toggleOpen();
  };

  return (
    <motion.nav
      className="framenav"
      initial={false}
      animate={isOpenToggle ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation closeSidebar={closeSidebar} />
      <MenuToggle isOpenToggle={isOpenToggle} toggle={toggleOpen} />
    </motion.nav>
  );
};
