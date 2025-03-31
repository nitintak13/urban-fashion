import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsLetter";
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className="justify-center md:flex-row mb-28 gap-10 my-10 flex flex-col">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="gap-6 items-start flex flex-col justify-center">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350,Washington,USA
          </p>
          <p className="text-gray-500">
            Tel:(415) 555-0132 <br /> Email:admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and openings.{" "}
          </p>
          <button className="px-8 py-4 text-sm transition-all duration-500 hover:text-white hover:bg-black border border-black">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
