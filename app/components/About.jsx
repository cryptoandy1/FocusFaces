const About = () => {
  return (
    <section className="bg-transparent z-[1] relative mb-[9rem] transition-all ease-in duration-300">
      <div className="px-10 sm:px-[7rem] mx-auto max-w-[1100px]">
        <h3 className="text-3xl sm:text-5xl py-1 text-center text-gray-900 lg:text-left dark:text-slate-100 transition-all duration-300 ease-in-out">
          About me
        </h3>
        <div className="flex flex-wrap justify-center text-justify px-6 sm:px-0">
          <div className="text-md sm:text-lg md:text-2xl py-5 text-gray-600 dark:text-slate-300 transition-all duration-300 ease-in-out">
            <p className="leading-10">
              I&apos;ve been involved in programming since 2016. I&apos;m
              self-taught in this field. Coding for me is one of the two
              activities I can engage myself in all day long (the second one is
              playing guitar 🎸😄)
            </p>
            <p className="leading-10">
              I began my programming journey by learning Python and acquiring
              basic skills in the language. However, my current focus is
              centered on creating responsive and interactive web applications
              using React.js. I&apos;m presently honing my skills with Next.js
              as a recommended framework for modern React development.
            </p>
            <p className="leading-10">
              Lately, I&apos;ve become a big fan of the Three.js library, which
              simplifies working with the WebGL API and allows us to create
              stunning visual experiences. You can find some examples of my work
              in the &apos;Portfolio&apos; section below and on this page as
              well 😉
            </p>
            <p className="leading-10">
              For several years, I&apos;ve been actively engaged in the crypto
              sphere, where I&apos;ve had the opportunity to test emerging
              crypto-projects. This experience has piqued my interest in web3
              development, particularly in Solidity development.
            </p>
            <p className="leading-10">
              I enjoy working in teams and the process of sharing experiences
              and ideas among colleagues. However, I am also comfortable working
              independently. I am a self-disciplined individual who values
              meeting deadlines, and I appreciate these qualities in others.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
