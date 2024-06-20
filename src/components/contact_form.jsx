import React from "react";
import Button from "./custom_button";

const ContactForm = () => {
  return (
    <div className="w-[100%]  bg-[#B0B3B8] py-[80px]">
      <h1 className="text-[40px] font-normal flex justify-center">
        Send an Inquiry
      </h1>
      <form className="py-[40px] w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row  justify-between gap-[10px] sm:gap-[40px]">
          <div className="w-full">
            <label htmlFor="Name">
              Name: <span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              required
              className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">
              Phone: <span className=" text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment">
            Message: <span className=" text-red-500">*</span>
          </label>
          <textarea
            required
            name="comment"
            id="comment"
            className="w-full h-[140px] p-4 border rounded-md shadow-#000000 shadow-md "
          ></textarea>
        </div>

        <div className="flex flex-col items-center mt-12">
          <Button color="golden" btnText="Send Inquiry" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
