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
        className="flex flex-wrap max-w-[30rem] lg:max-w-none text-center sm:text-left border shadow hover:shadow-gray-950 transition-shadow duration-300 rounded-md bg-white dark:bg-orange-950 dark:hover:shadow-green-900"
      >
        {isHover ? (
          <Image
            className="flex-[1_1_300px] border rounded-t-md lg:rounded-t-none lg:rounded-l-md"
            src={gif}
            alt="card-gif"
            width="300"
            height="300"
          />
        ) : (
          <Image
            className="flex-[1_1_300px]  border rounded-t-md lg:rounded-t-none lg:rounded-l-md"
            src={pic}
            alt="card-pic"
            width="300"
            height="300"
          />
        )}

        <div className="flex-[1_1_370px] p-8">
          <h3 className=" font-semibold mb-2 dark:text-gray-100">{name}</h3>
          <p className="text-sm dark:text-gray-300">{desciption}</p>
          <br />
          <p className="text-sm text-center dark:text-gray-300">
            Built with:&nbsp;
            {builtWith.map((tech) => (
              <strong key={builtWith.indexOf(tech)}>{`${tech}`}&nbsp;</strong>
            ))}
          </p>
          <div className="flex text-sm gap-4 mt-3 justify-around">
            <a
              href="https://github.com/cryptoandy1/shirt_customizer_threejs.git"
              target="_blank"
              className="card-link"
            >
              Source code {'   '}
              <AiFillGithub size="1.3rem" className="inline-flex" />
            </a>
            <br />
            <a href={liveDemo} target="_blank" className="card-link">
              Play around 👕
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
