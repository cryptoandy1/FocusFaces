'use client'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import resume from '../../public/resume.png'

const Navbar = ({ isDark, toggleDark }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [prevScrollPos, setPrevScrolPos] = useState(window.scrollY)
  const [isVisible, setVisible] = useState(true)

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (prevScrollPos > currentScrollPos) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    setPrevScrolPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <nav
      className={`px-8 py-4 flex justify-between w-[100%] shadow-xl shadow-green-50  items-center bg-white bg-opacity-100 dark:bg-slate-900 dark:text-slate-100 dark:shadow-green-900 z-30 ${
        isVisible ? 'fixed' : 'hidden'
      }`}
    >
      <h1
        className="text-2xl font-giliams whitespace-nowrap cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        rublev-dev
      </h1>

      <ul className="flex items-center text-2xl gap-3 ">
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
              className="bg-green-900 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-green-600 ease-in duration-300 hover:scale-105"
              target="_blank"
            >
              Resume .pdf
            </a>
          ) : (
            <a
              href="https://rublev-dev.com/files/Resume-Andrei-Rublev.pdf"
              className="ease-in duration-300 hover:scale-125"
              target="_blank"
            >
              <Image
                className="bg-green-300 text-white rounded-md"
                src={resume}
                width={25}
                alt="resume-pic"
              />
            </a>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
