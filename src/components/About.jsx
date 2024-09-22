import React from "react";
import Abouts from "../assets/About.svg";

const About = () => {
  return (
    <div
      className=" w-full h-screen  py-30 px-4 flex items-center justify-center "
      id="About"
    >
      <div className="max-w-[1240px] my-[200] md:grid-cols-2">
        <img
          className="sm:w-[500px] mx-auto my-4 w-80 lg:w-[700px]"
          src={Abouts}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#9432d4] font-bold md:text-4xl lg:text-6xl">
            About me
          </p>
          <p className="text-white md:text-3xl lg:text-5xl">
            I'm Naresh . I have been working with websites for quite some time
            now. Working on the web is my passion as I love to make stunning
            User interface designs and transforming desgins into super fast
            optimised code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
