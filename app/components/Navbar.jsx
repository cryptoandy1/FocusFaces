import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import images from '../images/images'

const Navbar = ({ isDark, toggleDark }) => {
  const [isMobile, setIsMobile] = useState(true)
  const [isVisible, setVisible] = useState(true)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640)
    }
  }, [])

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

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed sm:h-[100px] xl:h-[120px] px-8 py-4 flex justify-between lg:justify-around w-[100%] items-center select-none z-30 ${
        !isDark
          ? 'bg-gray-400 backdrop-blur-md bg-opacity-10'
          : 'text-slate-100 shadow-xl bg-gray-800 backdrop-blur-md bg-opacity-25 shadow-green-900'
      }`}
    >
      <h1
        className="text-2xl sm:text-3xl font-giliams whitespace-nowrap cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        rublev-dev
      </h1>

      <ul className="flex items-center text-2xl sm:text-3xl xl:text-4xl gap-3 ">
        {!isDark ? (
          <li onClick={toggleDark}>
            <BsFillMoonFill
              className={`cursor-pointer p-1 bg-slate-300 rounded-[50%] ease-in duration-300 hover:scale-125`}
            />
          </li>
        ) : (
          <li onClick={toggleDark}>
            <BsFillSunFill
              className={`cursor-pointer p-1 rounded-[50%] ease-in duration-300 text-yellow-400 hover:scale-125`}
            />
          </li>
        )}

        <li className="flex flex-row ml-4 gap-4 p-2 items-center text-gray-700 dark:text-slate-100">
          <a
            className={`hover:scale-125 ease-in duration-300 ${
              !isDark ? 'hover:text-blue-600' : ''
            }`}
            href="https://www.linkedin.com/in/andrey-rublev/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>

          <a
            className={`hover:scale-125 ease-in duration-300 ${
              !isDark ? 'hover:text-blue-600' : ''
            }`}
            href="https://github.com/cryptoandy1"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          {!isMobile ? (
            <a
              href="https://rublev-dev.com/files/Resume-Andrei-Rublev.pdf"
              className="bg-green-900 text-white font-semibold text-sm sm:text-lg xl:text-xl px-4 py-2 rounded-md hover:bg-green-600 ease-in duration-300 hover:scale-105"
              target="_blank"
            >
              Resume .pdf
            </a>
          ) : (
            <a
              href="https://rublev-dev.com/files/Resume-Andrei-Rublev.pdf"
              className="ease-in duration-300 hover:scale-125 "
              target="_blank"
            >
              <Image
                className="bg-green-300 text-white rounded-md"
                src={images.resume}
                width={25}
                alt="resume-pic"
              />
            </a>
          )}
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
