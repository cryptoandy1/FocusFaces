"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const iconMap = {
  Instagram: AiFillInstagram,
  LinkedIn: AiFillLinkedin,
  Telegram: FaTelegramPlane,
  Email: MdEmail,
};

// Фирменные цвета для иконок
const iconColorMap = {
  Instagram: "text-pink-500",
  LinkedIn: "text-blue-600",
  Telegram: "text-sky-400",
  Email: "text-red-500",
};

const Carousel = ({ people, isDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  // refs для текста всех слайдов
  const textRefs = useRef([]);

  // Эффект для анимации высоты текста
  useEffect(() => {
    textRefs.current.forEach((ref, i) => {
      if (!ref.current) return;
      if (i === expandedIndex) {
        ref.current.style.height = ref.current.scrollHeight + "px";
      } else {
        ref.current.style.height = "0px";
      }
    });
  }, [expandedIndex]);

  const photos = people.map((p) => p.photos[0]);
  if (!photos || photos.length === 0) return null;
  const enableLoop = photos.length > 3;
  textRefs.current = photos.map(
    (_, i) => textRefs.current[i] ?? { current: null }
  );

  return (
    <div className="relative w-full max-w-[1100px] mx-auto ">
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        loop={enableLoop}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={700}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
          scale: 0.75,
        }}
        breakpoints={{
          360: { slidesPerView: 1.5, spaceBetween: 20 },
          431: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 2.5, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 75 },
          1920: { slidesPerView: 3, spaceBetween: 100 },
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setExpandedIndex(null); // при смене слайда сворачиваем
        }}
        className="w-full carousel-wrapper h-[400px] transition-all duration-700 ease-in-out"
      >
        {photos.map((src, idx) => {
          const isActive = idx === activeIndex;
          const isExpanded = idx === expandedIndex;

          return (
            <SwiperSlide key={idx} className="flex items-center rounded-lg">
              <div
                className="relative mx-auto w-full rounded-lg h-full shadow-md shadow-slate-500 dark:shadow-yellow-100 transition-all duration-700 ease-in-out"
                onMouseEnter={() => setExpandedIndex(idx)}
                onMouseLeave={() => setExpandedIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  fill
                  className="object-cover rounded-lg pointer-events-none select-none"
                />

                {/* Контейнер с текстом */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col items-start px-8 py-6 overflow-hidden rounded-lg
                    ${
                      !isDark
                        ? "bg-gray-400/20 backdrop-blur-md"
                        : "bg-slate-200/30 backdrop-blur-md"
                    }
                    ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }
                    transition-opacity duration-700 ease-in-out
                  `}
                >
                  <div className="flex w-full">
                    {/* Вертикальная линия */}
                    <div
                      className="w-1 bg-pink-600/80 dark:bg-yellow-500 rounded-full mr-4 origin-top transition-all duration-700 ease-in-out"
                      style={{
                        transform: `scaleY(${isActive ? 1 : 0})`,
                      }}
                    ></div>

                    {/* Текст и контакты */}
                    <div className="flex-1 text-white dark:text-black transition-all duration-700 ease-out select-none">
                      <div className="flex items-center mb-2 space-x-2">
                        <h3 className="text-2xl font-bold">
                          {people[idx].name}
                        </h3>
                        {people[idx].contacts?.map((c, i) => {
                          const IconComponent = iconMap[c.label];
                          const colorClass =
                            iconColorMap[c.label] || "text-white";
                          return IconComponent ? (
                            <a
                              key={i}
                              href={c.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-xl ${colorClass} hover:opacity-80 transition-opacity duration-300`}
                            >
                              <IconComponent />
                            </a>
                          ) : null;
                        })}
                      </div>

                      <p className="text-md max-w-md duration-700 ease-in-out italic">
                        {people[idx].description}
                      </p>

                      <div
                        ref={textRefs.current[idx]}
                        className="overflow-hidden transition-[height] duration-700 ease-in-out"
                      >
                        <br />
                        <p className="text-md max-w-xl mb-4 whitespace-pre-line">
                          {people[idx].fullDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Пагинация */}
      <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"></div>

      {/* Кнопки */}
      <button className="custom-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/70 dark:bg-black/70 hover:bg-white dark:hover:bg-black shadow-lg">
        <ChevronLeft className="w-6 h-6 text-zinc-600/80 dark:text-yellow-500 transition-all ease-in-out duration-700" />
      </button>
      <button className="custom-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/70 dark:bg-black/70 hover:bg-white dark:hover:bg-black shadow-lg">
        <ChevronRight className="w-6 h-6 text-zinc-600/80 dark:text-yellow-500 transition-all ease-in-out duration-700" />
      </button>
    </div>
  );
};

export default Carousel;
