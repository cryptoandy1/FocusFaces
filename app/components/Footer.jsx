import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
const Footer = ({ isDark }) => {
  return (
    <footer
      className={`relative z-1 h-[150px] text-[0.7rem] sm:text-[0.85rem] md:text-base xl:text-[1.2rem] flex flex-wrap gap-2 items-center p-6 justify-around transition-all ease-in duration-700
  ${
    isDark
      ? "text-slate-100 bg-gray-800 backdrop-blur-[8px] bg-opacity-10 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1),0_-2px_4px_-2px_rgb(0,0,0,0.06)] shadow-yellow-100"
      : "bg-gray-400 backdrop-blur-md bg-opacity-10 text-gray-900 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1),0_-2px_4px_-2px_rgb(0,0,0,0.06)]"
  } `}
    >
      <div>
        <div className="flex flex-wrap">
          <h2>E-mail:&nbsp;</h2>
          <a
            className="flex justify-center items-center gap-1"
            href="mailto:anna@focusfaces.com"
          >
            anna@focusfaces.com
            <FiExternalLink />
          </a>
        </div>
        {/* <div className="flex flex-wrap">
          <h2>Telegram-bot:&nbsp;</h2>
          <a
            className="flex justify-center items-center gap-1"
            href="https://t.me/snhelper_bot"
            target="_blank"
          >
            @snhelper_bot
            <FiExternalLink />
          </a>
        </div> */}
        <h2>Location:&nbsp;Chicago,&nbsp;Illinois, United States</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 text-[1.5rem] xl:text-[2rem]">
        <a
          className="hover:scale-125 transition-all ease-in duration-300"
          href="https://www.instagram.com/focusnfaces/"
          target="_blank"
        >
          <AiFillInstagram className="cursor-pointer" />
        </a>
        <a
          className="hover:scale-125 transition-all ease-in duration-300"
          href="https://www.linkedin.com/company/focus-faces/"
          target="_blank"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
      </div>
      <h2>
        Copyright © {new Date().getFullYear()} Andrei Rublev & Anna
        Rublova.&nbsp;All rights reserved.
      </h2>
    </footer>
  );
};

export default Footer;
