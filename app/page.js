'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import myPhoto from '../public/my-photo.png'
import { Navbar, Card, Footer } from './components'
import shirtGif from '../public/shirt.gif'
import shirtPic from '../public/shirt-img.png'

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [isDark, setDark] = useState(true)

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar isDark={isDark} toggleDark={() => setDark(!isDark)} />
      <main className="bg-white min-h-full w-[100%] overflow-hidden dark:bg-slate-800">
        <section className="mt-[9rem]">
          <div className="flex flex-col-reverse justify-center max-w-[900px] text-center sm:grid sm:grid-cols-2 sm:text-left px-10 mx-auto">
            <div>
              <h2 className="text-5xl sm:text-7xl py-2 sm:py-4 text-green-900 font-medium">
                Andrey <br /> Rublev
              </h2>
              <h3 className="text-2xl text-gray-800 dark:text-slate-100 sm:text-3xl py-1 sm:py-2">
                Front-end developer
              </h3>
              <div className="relative">
                <p className="text-md sm:text-lg py-1 text-gray-600 dark:text-slate-300 sm:py-2">
                  Hi, I'm Andrey 👋
                  <br />
                  I love helping great ideas <br />
                  to make their way into the web. <br />
                  I'm focused on creating web applications with React.js <br />
                  Currently residing in Antalya, Turkey.
                  <br />
                  Let's stay in touch and work together !
                </p>
              </div>
              <div className="relative flex mt-5 py-2 border rounded-md border-dotted border-green-900 dark:bg-orange-950">
                <img
                  className="mx-auto p-2"
                  src="https://skillicons.dev/icons?i=html,css,js,nextjs,react,tailwind,threejs"
                />
                <div className="animate-skillsMove absolute top-0 w-[100%] h-[100%]">
                  <span className="absolute animate-pulse animate-skillsRotate box top-[-0.9rem] left-[-10%] bg-green-900 text-white dark:text-slate-100 border border-yellow-500 rounded-lg italic text-sm p-0.5 hover:animate-rotateOnce">
                    Skills
                  </span>
                </div>
              </div>
            </div>
            <div className="my-auto">
              <Image
                src={myPhoto}
                alt="my-photo"
                className="w-[220px] sm:w-[250px] md:w-[300px] mx-auto"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="px-10 mx-auto max-w-[900px] mt-20">
            <h3 className="text-3xl py-1 text-center text-gray-900 md:text-left dark:text-slate-100">
              About me
            </h3>
            <div className="flex flex-wrap justify-center text-center px-6 sm:px-0">
              <div className="text-md sm:text-lg py-5 text-gray-600 md:text-justify dark:text-slate-300">
                <p>
                  I've been involved in programming since 2016. Coding is one of
                  the two activities I can engage myself in all day long (second
                  one is playing guitar 🎸😄)
                </p>
                <p>
                  I started off by learning Python and I have basic skills in
                  it. At the moment, my primary focus is on building responsive
                  and interactive web-applications using React.js. Currently, I
                  study Next.js as it's a recommended framework for modern React
                  development.
                </p>
                <p>
                  For several years I've been engaged in crypto sphere and have
                  been involved in testing emerging projects there. So I have
                  quite an interest in building something for web3 one day.
                  Hence, Solidity is definately in my 'To do' list.
                </p>
                <p>
                  Also, lately I became a big fan of Three.js library that
                  simplifies workflow with WebGL and let us build absolutely
                  beautiful things (one of which you can find in my portfolio
                  section 😉 )
                </p>
                <p>
                  I'm a team player with developed soft-skills constantly
                  learning something new in tech field. I'm a self-disciplined
                  person who respects deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 mb-6 mt-20 px-10 mx-auto max-w-[900px] text-center text-gray-900 md:text-left dark:text-slate-100">
            Portfolio
          </h3>
          <div className="flex flex-col justify-center items-center px-10 mx-auto max-w-[900px] mt-10 mb-20">
            <Card
              gif={shirtGif}
              pic={shirtPic}
              name="T-shirt customizer"
              desciption="A prototype of a customization tool for a piece of clothing that can
            be applied in sales. A client can customize color of the t-shirt,
            use local files to create a unique pattern or can ask DALL.E AI to
            generate the pattern. I took the popular idea of a 'customization tool' and added some cool features to it using React and Three.js. I adjusted the
            camera rig, enhanced some animation using framer-motion library,
            made the app responsive, developed Cart interface and added an
            option to save the AI-generated pattern for later use. As for
            styling, I used Tailwind CSS."
              builtWith={['React.js', 'Three.js', 'TailwindCSS']}
              liveDemo="https://rublev-dev.com/shirt-customizer"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
