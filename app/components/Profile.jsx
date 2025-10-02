"use client";
import Image from "next/image";
import images from "../images/images";
import { Skills } from ".";

const Profile = () => {
  return (
    <section
      id="profile"
      className="mt-[9.55rem] md:mt-[13rem] xl:mt-[17rem] z-[1] relative bg-transparent mb-[9rem] transition-all ease-in duration-700"
    >
      <div className="flex flex-wrap-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-0 justify-center max-w-[1100px] text-center lg:text-left px-10 sm:px-[7rem] mx-auto">
        <div className="relative flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] py-2 sm:py-4 text-zinc-400 font-medium transition-all duration-700 ease-in-out text-shadow-lg">
            Focus Faces
          </h2>
          <h3 className="text-2xl italic sm:text-4xl md:text-5xl text-gray-900 dark:text-slate-100 py-1 sm:py-2 transition-all duration-700 ease-in-out">
            Faces tell stories 📸
          </h3>
          <div className="relative flex justify-center transition-all duration-700 ease-in-out">
            <p className="text-md sm:text-lg md:text-2xl py-1 text-center lg:text-justify text-gray-600 dark:text-slate-300 sm:py-2">
              Meet the people behind the brands & businesses of Chicago 🏙️
              <br />
              Visual storytelling now → AI agent soon 🤖
            </p>
          </div>
          {/* <Skills /> */}
        </div>
        <div className="flex my-auto justify-center">
          <Image
            src={images.fnf_logo_big_noBg}
            alt="Focus'n'Faces Logo"
            width={250} // укажи размеры, иначе Next.js будет ругаться
            height={250}
            className="transition-all duration-700 ease-in-out relative w-[220px] sm:w-[250px] md:w-[300px] xl:w-[350px] mx-auto rounded-[50%] shadow-md dark:shadow-yellow-100 bg-gray-400 backdrop-blur-sm bg-opacity-10 "
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
