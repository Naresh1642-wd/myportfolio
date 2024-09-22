import React from "react";
import HTML from "../assets/icons/html.svg";
import css from "../assets/icons/Css.svg";
import js from "../assets/icons/javascript-original.svg";
import express from "../assets/icons/express.svg";
import REACT from "../assets/icons/react-original-wordmark.svg";
import REDUX from "../assets/icons/redux-original.svg";
import Tailwind from "../assets/icons/tailwind.svg";
import figma from "../assets/icons/figma.svg";
import mongo from "../assets/icons/mongodb-original-wordmark.svg";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="max-w-[1240px] h-full bg-black m-auto py-[200px] p-4 flex flex-col lg:w-full"
    >
      <div className="text-center ">
        <p className="text-4xl text-[#9432d4] lg:text-7xl">Skills</p>
        <p className="text-2xl text-white lg:text-5xl">Web Development</p>
      </div>
      <div
        id="Web"
        className="md:flex  justify-center items-center flex-wrap flex-row max-w-[1240px] sm:grid grid-cols-3 gap-8 m-auto p-5"
      >
        <img src={HTML} alt="" className="h-40 w-20 m-2" />
        <img src={css} alt="" className="h-40  w-20 m-2" />
        <img src={js} alt="" className="h-40 w-20 m-2" />
        <img src={REACT} alt="" className="h-40 w-20 m-2 " />
        <img src={Tailwind} alt="" className="h-40 w-20 m-2" />
        <img src={REDUX} alt="" className="h-40 w-20 m-2" />
        <img src={express} alt="" className="h-40 w-20 m-2 " />
        <img src={mongo} alt="" className="h-40 w-20 m-2" />
      </div>

      <div className="text-center">
        <p className="text-2xl text-white lg:text-5xl">UI Design</p>
      </div>

      <div id="Design" className="flex justify-center items-center  flex-row">
        <img src={figma} alt="" className="h-40 w-20 m-2" />
      </div>
    </div>
  );
};

export default Skills;
