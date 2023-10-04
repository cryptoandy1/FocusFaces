'use client'
import { AiFillGithub } from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const Card = ({ gif, pic, name, desciption, builtWith, liveDemo }) => {
  const [isHover, setHover] = useState(false)
  const ref = useRef(null)

  const mouseEnterHandler = (event) => {
    setHover(true)
  }
  const mouseLeaveHandler = (event) => {
    setHover(false)
  }

  useEffect(() => {
    const refDiv = ref.current
    if (refDiv) {
      refDiv.addEventListener('mouseenter', mouseEnterHandler)
      refDiv.addEventListener('mouseleave', mouseLeaveHandler)
      return () => {
        refDiv.removeEventListener('mouseenter', mouseEnterHandler)
        refDiv.removeEventListener('mouseleave', mouseLeaveHandler)
      }
    }
  }, [isHover])

  return (
    <>
      <div
        ref={ref}
        className="flex flex-wrap max-w-[30rem] lg:max-w-[900px] text-center sm:text-left border shadow hover:shadow-gray-950 transition-shadow duration-300 rounded-md bg-white dark:bg-orange-950 dark:hover:shadow-green-900 z-[1]"
      >
        <Image
          className="flex-[2_1_300px] border rounded-t-md lg:rounded-t-none lg:rounded-l-md"
          src={gif}
          alt="card-gif"
          width="300"
          height="300"
          priority={true}
          hidden={isHover ? false : true}
        />
        <Image
          className="flex-[2_1_300px] border rounded-t-md lg:rounded-t-none lg:rounded-l-md"
          src={pic}
          alt="card-pic"
          width="300"
          height="300"
          hidden={isHover ? true : false}
        />

        <div className="flex-[1_1_100px] p-8">
          <h3 className=" font-semibold mb-2 dark:text-gray-100">{name}</h3>
          <p className="text-base dark:text-gray-300">{desciption}</p>
          <br />
          <p className="text-base text-center dark:text-gray-300">
            Built with:&nbsp;
            {builtWith.map((tech) => (
              <strong key={builtWith.indexOf(tech)}>{`${tech}`}&nbsp;</strong>
            ))}
          </p>
          <div className="flex text-base gap-4 md:gap-2 mt-3 justify-around">
            <a
              href="https://github.com/cryptoandy1/shirt_customizer_threejs.git"
              target="_blank"
              className="cool-button card-link"
            >
              Source code {'   '}
              <AiFillGithub size="1.3rem" className="inline-flex" />
            </a>
            <br />
            <a
              href={liveDemo}
              target="_blank"
              className="cool-button card-link"
            >
              Play around 👕
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
