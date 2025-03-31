import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsLetter";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nobis accusantium asperiores, et excepturi recusandae ut molestiae
            debitis temporibus perferend nostrum aut praesentium qui magnam
            nisi? Dicta nesciunt reprehenderit obcaecati eum ducimus cupiditate
            rerum minus aspernatur. Eos, adipisci vero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            delectus voluptatum. Voluptatem dolores doloribus tenetur dolor
            omnis quisquam distinctio expedita deleniti!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            optio repellat perspiciatis magnam ea culpa ut deserunt facere
            blanditiis officiis quas quo quisquam consectetur!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure to meet our
            stringent.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure to meet our
            stringent.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex-col gap-5">
          <b>Exceptional Customer service:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure to meet our
            stringent.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
