import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="flex flex-wrap dark:shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)] dark:shadow-green-900 from-green-900 to-green-700 bg-gradient-to-t text-white dark:from-slate-900 dark:to-slate-900 dark:text-slate-100 gap-2 text-[0.7rem] items-center p-6 justify-around">
      <div>
        <div className="flex flex-wrap">
          <h2>E-mail:&nbsp;</h2>
          <a href="mailto:andrey.rublev@rublev-dev.com">
            andrey.rublev@rublev-dev.com
          </a>
        </div>
        <div className="flex flex-wrap">
          <h2>Telegram:&nbsp;</h2>
          <a href="https://t.me/ar_fromK">@ar_fromK</a>
        </div>
        <h2>Location:&nbsp;Antalya,&nbsp;Turkey</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 text-[1rem] sm:text-[1.5rem]">
        <a
          className="hover:scale-125"
          href="https://github.com/cryptoandy1"
          target="_blank"
        >
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a
          className="hover:scale-125"
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
