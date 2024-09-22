import React from "react";
import Typed from "react-typed";
import resume from "../assets/Resume/NareshResume.pdf";

const Hero = () => {
  return (
    <div className="text-white p-20 ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Hello Im
        </h1>
        <p className="text-[#9432d4] font-bold p-2 text-4xl">Naresh</p>

        <div className="flex justify-center items-center z-[-100]">

          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Web developer", "Ui designer"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        <a href={resume}>
          <button className="bg-[#9432d4] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
