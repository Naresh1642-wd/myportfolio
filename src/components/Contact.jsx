import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full  text-white px-4 py-[100px] h-screen mb-0"
      id="Contact"
    >
      <div className="heading my-8">
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center ">
          Contact Me
        </h2>
      </div>
      <div className="flex justify-center max-w-[1240px] mx-auto">
        <form className="flex justify-center items-center flex-col w-full sm:w-[600px]">
          <input
            className="p-3 flex w-full rounded-md text-black"
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input
            className="p-3 flex w-full rounded-md mt-3 text-black"
            type="email"
            name="user_mail"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-3 flex w-full rounded-md mt-3 text-black"
            name="user_message"
            id=""
            cols="30"
            rows="10"
            placeholder="Write Message Here..."
            required
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="bg-[#9432d4] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-white duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
