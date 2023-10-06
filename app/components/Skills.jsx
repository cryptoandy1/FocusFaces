import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import images from '../images/images'
import { Tooltip } from '.'

const skills = [
  { src: images.html, text: 'HTML' },
  { src: images.css, text: 'CSS' },
  { src: images.javascript, text: 'JavaScript' },
  { src: images.react, text: 'React.js' },
  { src: images.nextjs, text: 'Next.js' },
  { src: images.tailwind, text: 'TailwindCSS' },
  { src: images.threejs, text: 'Three.js' },
]

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative flex w-max mt-5 p-4 border rounded-md border-dotted border-green-900 dark:bg-orange-950 transition-all duration-300 ease-in-out">
      <div className=" inline-flex justify-center gap-1 sm:gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative max-w-[35px] max-h-[35px] sm:max-w-[48px] sm:max-h-[48px] tooltip-container z-[1]"
          >
            <Image
              src={skill.src}
              alt={`skills-pic-${index}`}
              sizes="100vw"
              priority={true}
            />
            <Tooltip text={skill.text} />
          </div>
        ))}
        <div className="animate-skillsMove absolute top-[-7%] left-[-3%] sm:left-[-1.5%] w-[100%] h-[100%]">
          <motion.span
            // whileTap={() => {}}
            onTapStart={() => setIsHovered(true)}
            onTap={() => {
              setTimeout(() => {
                setIsHovered(false)
              }, 1100)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsHovered(false)
              }, 1100)
            }}
            className={`absolute top-[-25%] left-[-7%] bg-green-900 text-white dark:text-slate-100 border border-yellow-500 rounded-[50%] italic text-sm sm:text-base tracking-widest p-1 animateBorder ${
              isHovered ? 'rotateInf' : ''
            }`}
          >
            Skills
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default Skills
