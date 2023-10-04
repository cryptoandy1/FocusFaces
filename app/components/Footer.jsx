import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
const Footer = ({ isDark }) => {
  return (
    <footer
      className={`relative z-1 h-[150px] text-[0.7rem] sm:text-[0.85rem] md:text-base xl:text-[1.2rem] flex flex-wrap gap-2 items-center p-6 justify-around
      ${
        isDark
          ? 'text-slate-100 bg-gray-800 backdrop-blur-[8px] bg-opacity-10 shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)] shadow-green-900'
          : 'bg-gray-400 backdrop-blur-md bg-opacity-10 text-gray-900'
      } `}
    >
      <div>
        <div className="flex flex-wrap">
          <h2>E-mail:&nbsp;</h2>
          <a
            className="flex justify-center items-center gap-1"
            href="mailto:andrey.rublev@rublev-dev.com"
          >
            andrey.rublev@rublev-dev.com
            <FiExternalLink />
          </a>
        </div>
        <div className="flex flex-wrap">
          <h2>Telegram:&nbsp;</h2>
          <a
            className="flex justify-center items-center gap-1"
            href="https://t.me/ar_fromK"
            target="_blank"
          >
            @ar_fromK
            <FiExternalLink />
          </a>
        </div>
        <h2>Location:&nbsp;Antalya,&nbsp;Turkey</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 text-[1.5rem] xl:text-[2rem]">
        <a
          className="hover:scale-125 transition-all ease-in duration-300"
          href="https://github.com/cryptoandy1"
          target="_blank"
        >
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a
          className="hover:scale-125 transition-all ease-in duration-300"
          href="https://www.linkedin.com/in/andrey-rublev/"
          target="_blank"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
      </div>
      <h2>Copyright © 2023 Andrei Rublev.&nbsp;All rights reserved.</h2>
    </footer>
  )
}

export default Footer
