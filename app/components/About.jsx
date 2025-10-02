const About = () => {
  return (
    <section className="bg-transparent z-[1] relative mb-[9rem] transition-all ease-in duration-700">
      <div className="px-10 sm:px-[7rem] mx-auto max-w-[1100px]">
        <h3 className="text-3xl sm:text-5xl py-1 text-center text-gray-900 lg:text-left dark:text-slate-100 transition-all duration-300 ease-in-out italic">
          Our Mission & Vision
        </h3>
        <div className="flex flex-wrap justify-center text-justify px-6 sm:px-0">
          <div className="text-md sm:text-lg md:text-2xl py-5 text-gray-600 dark:text-slate-300 transition-all duration-700 ease-in-out">
            <p className="leading-10">
              Focus Faces is a next-generation media project that blends human
              storytelling with AI technology.
              <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              Our mission is to spotlight real faces and stories shaping
              culture, business, and technology. <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              Our approach combines creativity, visual storytelling, and
              innovation. <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              Our tools include professional media production and our own AI
              agent designed to open new formats of content creation. Focus
              Faces is the space where media, artificial intelligence, and human
              stories come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
