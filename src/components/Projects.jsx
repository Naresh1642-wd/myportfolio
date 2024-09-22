import React from "react";
import ecommerce from "../assets/ecomerce.svg";
import movies from "../assets/movies.svg";
import todo from "../assets/todo.svg";

const Projects = () => {
  return (
    <div
      className="m-40 max-w-[1240px] bg-black z-30 mx-auto h-full py-20"
      id="Projects"
    >
      <div className="  text-center m-10 py-8 text-xl text-[#9432d4]">
        Projects
      </div>


      <div className="w-full flex items-center justify-center flex-wrap">
        <div className="w-[400px]  shadow-xl flex flex-col p-4 my-4 mx-6 rounded-lg  border-2 border-purple-500 hover:border-white duration-300">
          <img className="w-full  h-[100px] " src={ecommerce} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Ecommerce App
          </h2>
          <p className="text-center text-white">
            An ecommerce app built with MERN
          </p>

          <button className="bg-[#9432d4] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-white duration-300">
            GO
          </button>
        </div>

        <div className="w-[400px]  shadow-xl flex flex-col p-4 my-4 mx-6 rounded-lg  border-2 border-purple-500 hover:border-white duration-300">
          <img className="w-full  h-[100px]" src={todo} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            ToDo App
          </h2>
          <p className="text-center text-white">A Todo app built with MERN</p>

          <button className="bg-[#9432d4] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-white duration-300">
            GO
          </button>
        </div>

        <div className="w-[400px] shadow-xl flex flex-col p-4 my-4 mx-6 rounded-lg hover:border-white duration-300 border-2 border-purple-500">
          <img className="w-full h-[100px] m-auto " src={movies} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Movies App
          </h2>
          <p className="text-center text-white ">
            An Movies app built with MERN
          </p>

          <button className="bg-[#9432d4] w-[200px] rounded-md  font-medium my-6 mx-auto px-6 py-3 hover:bg-white duration-300">
            GO
          </button>
        </div>
      </div>


    </div>
  );
};

export default Projects;
