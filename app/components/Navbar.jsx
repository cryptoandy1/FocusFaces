import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import images from "../images/images";

const Navbar = ({ isDark, toggleDark }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && previous !== 0 && latest > 110) {
      setVisible(false);
    }
    if (previous > latest && previous - latest > 15) {
      setVisible(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      layout
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className={"fixed z-30 w-[100%] justify-between"}
    >
      <motion.div
        className={`transition-all ease-in-out duration-700 sm:h-[100px] xl:h-[120px] px-8 py-4 flex justify-between lg:justify-around items-center select-none ${
          !isDark
            ? "bg-gray-400 backdrop-blur-md bg-opacity-10 shadow-md"
            : "text-slate-100 shadow-md bg-gray-800 backdrop-blur-md bg-opacity-25 shadow-yellow-100"
        }`}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-giliams whitespace-nowrap cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={images.fnf_logo_big_noBg}
            alt="Focus'n'Faces Logo"
            width={80} // укажи размеры, иначе Next.js будет ругаться
            height={32}
            priority // логотип лучше грузить сразу
          />
        </motion.h1>
        <motion.ul className="flex items-center text-2xl sm:text-3xl xl:text-4xl gap-3 ">
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
                !isDark ? "hover:text-blue-600" : ""
              }`}
              href="https://www.linkedin.com/company/focus-faces/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>

            <a
              className={`hover:scale-125 ease-in duration-300 ${
                !isDark ? "hover:text-blue-600" : ""
              }`}
              href="https://www.instagram.com/focusnfaces/"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
            <a
              href="#ai-agent"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("ai-agent");
                if (element) {
                  // Получаем высоту навбара
                  const navbarHeight =
                    document.querySelector("nav")?.offsetHeight || 0;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: elementPosition - navbarHeight - 10, // небольшой отступ сверху, например 10px
                    behavior: "smooth",
                  });
                }
              }}
              className={`hover:scale-125 ease-in duration-300 ${
                !isDark ? "hover:text-blue-600" : ""
              }`}
            >
              <FaRobot />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
