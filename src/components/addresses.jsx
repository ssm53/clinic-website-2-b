"use client";
import React from "react";
import AddressTitleIcons from "./address_title_icons";
import location_icon from "../../public/Images/icons/location.svg";
import phone_icon from "../../public/Images/icons/phone.svg";
import whatsapp_icon from "../../public/Images/icons/whatsapp.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Addressess = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col w:[100%] align-center justify-center md:w-[50%] py-4">
      <div className="w-[100%] px-6 md:px-8">
        <div className="w-[100%]">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="font-bold text-[20px] md:text-[30px] lg:text-[40px]"
          >
            Branch Name
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="font-normal md:text-[12px] lg:text-[24px]"
          >
            Lorem ipsum dolor sit amet consectetur. Amet rhoncus neque facilisi
            adipiscing tincidunt. Euismodrisus nunc vulputate ultricies ac
            turpis.
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="mt-5"
          style={{ width: "60%" }}
        >
          <AddressTitleIcons
            image={location_icon}
            title="Location: "
            subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
          />

          <AddressTitleIcons
            image={phone_icon}
            title="Phone: "
            subTitle="(432) 123446098"
          />

          <AddressTitleIcons
            image={whatsapp_icon}
            title="Whatsapp: "
            subTitle="+923 123446098"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Addressess;
