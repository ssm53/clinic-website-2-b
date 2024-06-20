import React from "react";
import MainText from "../components/main_text";
import img1 from "../../public/Images/HomeImages/image1.svg";
import img2 from "../../public/Images/HomeImages/img2.svg";
import img5 from "../../public/Images/HomeImages/img5.svg";
import vector_icon from "../../public/Images/HomeImages/vector.svg";
import DividerText from "../components/divider_text";
import ContactForm from "../components/contact_form";
import Slider from "../components/slider";
import { sliderImg } from "../../public/JsonData/SliderData";
import ImageCont from "../components/image";
import Addressess from "../components/addresses";

const HomePage = () => {
  return (
    <div>
      <div id="home">
        <MainText
          title="Welcome To Beyond"
          subTitle="Helping You Move Through Life."
          link1="See Our Services >"
          link2="Meet The Team >"
          link3="Contact Us >"
          image={img1}
          textSize="largeSizeText"
          textColor="white"
        />
      </div>

      <div id="services">
        <DividerText
          title="Our Services Help You"
          subTitle="Move Through Life."
          image={vector_icon}
          bgColor="darkGolden"
          textColor="white"
          btnText="See Our Services"
        />
      </div>

      <Slider
        title="At Beyond we believe in a patient focused care model, by offering a range of services under the one roof and a team approach we want to help you ‘Move Through Life’."
        link2="See All Of Our Services >"
        textSize="smallSizeText"
        textColor="black"
        sliderImages={sliderImg}
      />

      <div id="team">
        <DividerText
          title="Our Team Help You"
          subTitle="Move Through Life."
          image={vector_icon}
          bgColor="darkGolden"
          textColor="white"
          btnText="Meet Our Team"
        />
      </div>

      <Slider
        title="Lorem ipsum dolor sit amet consectetur. Amet vel
              rhoncus neque facilisi adipiscing tincidunt. Euismod risus nunc vulputate ultriciesturpis.
              Lorem ipsum dolor sit amet consectetur. Amet vel
              rhoncus neque facilisi adipiscing tincidunt. Euismod risus nunc vulputate ultricies ac turpis."
        textSize="smallSizeText"
        textColor="black"
      />
      <div id="contact">
        <DividerText
          title="Contact Us"
          subTitle="Find Our Clinics Near You."
          image={vector_icon}
          bgColor="darkGolden"
          textColor="white"
          btnText="Contact Us"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#202123] text-white" id="about">
        <Addressess />
        <ImageCont image={img5} />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center  bg-[#202123] text-white">
        <ImageCont image={img5} />
        <Addressess />
      </div>
      <div className="flex flex-col md:flex-row items-center  bg-[#202123] text-white">
        <Addressess />
        <ImageCont image={img5} />
      </div>
      <ContactForm />
    </div>
  );
};

export default HomePage;
