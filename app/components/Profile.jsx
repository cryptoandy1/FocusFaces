'use client'
import Image from 'next/image'
import images from '../images/images'

const Profile = () => {
  return (
    <section
      id="profile"
      className="mt-[9.55rem] md:mt-[13rem] xl:mt-[17rem] z-[1] relative bg-transparent mb-[9rem] transition-all ease-in duration-300"
    >
      <div className="flex flex-wrap-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-0 justify-center max-w-[1100px] text-center lg:text-left px-10 sm:px-[7rem] mx-auto">
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-[7rem] py-2 sm:py-4 text-green-900 font-medium">
            Andrey <br /> Rublev
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl text-gray-900 dark:text-slate-100 py-1 sm:py-2">
            Front-end developer
          </h3>
          <div className="relative flex justify-center">
            <p className="text-md sm:text-lg md:text-2xl py-1 text-center lg:text-justify text-gray-600 dark:text-slate-300 sm:py-2">
              Hi, I&apos;m Andrey 👋
              <br />
              I love helping great ideas <br />
              to make their way into the web. <br />
              I&apos;m focused on creating web applications with React.js <br />
              Currently live in Antalya, Turkey.
              <br />
              Let&apos;s work together !
            </p>
          </div>
          <div className="relative inline-flex mt-5 p-4 border rounded-md border-dotted border-green-900 dark:bg-orange-950">
            <Image
              className="mx-auto"
              src={images.skills}
              alt="skills-pic"
              width="385.5"
              height="48"
            />
            <div className="animate-skillsMove absolute top-0 left-0 w-[100%] h-[100%]">
              <span className="absolute top-[-13%] left-[-4%] bg-green-900 text-white dark:text-slate-100 border border-yellow-500 rounded-[50%] italic text-sm sm:text-base tracking-widest p-2 hover:animate-rotateOnce animate-skewBorder">
                Skills
              </span>
            </div>
          </div>
        </div>
        <div className="flex my-auto justify-center">
          {/* <div className="inline-block bg-opacity-70"> */}
          <Image
            src={images.myPhoto}
            alt="my-photo"
            className="relative w-[220px] sm:w-[250px] md:w-[300px] xl:w-[350px] mx-auto rounded-[50%] shadow-md shadow-green-900 bg-gray-400 backdrop-blur-sm bg-opacity-10"
            // className=" md:w-[300px] mx-auto"
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Profile
