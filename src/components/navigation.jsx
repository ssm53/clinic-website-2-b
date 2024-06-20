import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu_item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};

const menuItems = [
  { title: "Home", key: "home", href: "/#home" },
  { title: "About Us", key: "about", href: "/#about" },
  { title: "Contact Us", key: "contact", href: "/#contact" },
  { title: "Our Team", key: "team", href: "/#team" },
  { title: "Our Services", key: "services", href: "/#services" },
];

export const Navigation = ({ closeSidebar }) => {
  const handleClick = (href) => {
    closeSidebar();
    window.location.href = href;
  };
  return (
    <motion.ul variants={variants} className="toogle-ul">
      {menuItems.map((item, i) => (
        <MenuItem item={item} key={i} onClick={() => handleClick(item.href)} />
      ))}
    </motion.ul>
  );
};
