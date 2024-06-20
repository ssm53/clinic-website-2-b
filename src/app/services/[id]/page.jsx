"use client";
import React from "react";
import styled from "styled-components";
import servicesData from "../../../components/data";
import ServicesBar from "@/components/services_bar";

const ServicesPage = ({ params }) => {
  const serviceId = params.id;
  const serviceData = servicesData.find((service) => service.id === serviceId);

  return (
    <StyledWrapper>
      <ServicesBar />
      <div className="mx-auto bg-[#202123] text-white">
        <div
          className="flex flex-wrap justify-center"
          style={{ width: "100%" }}
        >
          <div className="text-sec w-[50%] md:w-1/2 px-2 lg:px-10 flex justify-center">
            <div className="flex flex-col justify-center">
              <StyledH1
                className="font-semibold py-4 text-[20px] lg:text-[30px]"
                style={{ width: "100%" }}
              >
                Comprehensive Physiotherapy Services in Melbourne
              </StyledH1>
              <StyledUl>
                <StyledListWrapper className="mb-2">
                  <li className="py-1 ">
                    {serviceData.id} sit amet consectetur adipisicing elit. Ut
                    velit dolorem
                  </li>
                  <li className="py-1 "> {serviceData.header}</li>
                  <li className="py-1"> {serviceData.body}</li>
                  <li className="py-1 "> {serviceData.jobs}</li>
                </StyledListWrapper>
              </StyledUl>
            </div>
          </div>
          <div
            className="image-sec md:w-1/2 flex justify-end w-[50%]"
            style={{ background: "green" }}
          >
            <img
              src="/svgs/cardDetails.jpg"
              alt="Service Image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ServicesPage;

const StyledWrapper = styled.div`
  /* padding: 7rem 0;
  padding-top: 10rem; */

  @media (max-width: 768px) {
    .flex-wrap {
      flex-direction: column;
    }
    .text-sec {
      width: 100%;
      text-align: center;
    }
    .image-sec {
      order: -1;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledListWrapper = styled.div`
  font-size: 20px;
  font-weight: 400;
  list-style-type: disc;
  li {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledSpan = styled.span`
  font-size: 22px;
`;

const StyledH1 = styled.h1`
  @media (max-width: 768px) {
    font-size: 25px;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const StyledUl = styled.ul`
  padding-right: 20px;
  li {
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
