"use client";

import state from "./store";
import { useSnapshot } from "valtio";
import imagesLoaded from "imagesloaded";
import {
  Navbar,
  Profile,
  About,
  Footer,
  AnimatedSection,
  Loader,
  Background,
  Carousel,
  AiAgent,
} from "./components";
import { useEffect, useState } from "react";

export default function Home() {
  const snap = useSnapshot(state);
  const [people, setPeople] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  // Fetch данных из Notion API
  useEffect(() => {
    fetch("/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setDataFetched(true);
      })
      .catch(console.error);
  }, []);

  // После рендера людей можно дождаться загрузки изображений для плавного перехода
  useEffect(() => {
    if (!dataFetched || people.length === 0) return;

    const imgs = document.querySelectorAll("img");
    if (imgs.length === 0) {
      state.isLoading = false;
      return;
    }

    imagesLoaded(imgs, () => {
      state.isLoading = false;
    });
  }, [dataFetched, people]);

  // Loader показывается до получения данных или пока state.isLoading
  if (!dataFetched || snap.isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={`scroll-smooth relative bg-transparent ${
        snap.isDark ? "dark" : ""
      }`}
    >
      <Navbar
        isDark={snap.isDark}
        toggleDark={() => (state.isDark = !snap.isDark)}
      />

      <main className="bg-transparent relative min-h-full w-[100%] overflow-hidden">
        <Background isDark={snap.isDark} />

        <AnimatedSection>
          <Profile />
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-transparent relative z-[1] mb-[9rem]">
            <h3 className="text-3xl italic sm:text-5xl py-1 mb-6 px-10 sm:px-[7rem] mx-auto max-w-[1100px] text-center text-gray-900 lg:text-left dark:text-slate-100 transition-all ease-in-out duration-700">
              Faces
            </h3>

            <div className="relative w-full max-w-[1100px] mx-auto">
              {people.length > 0 ? (
                <Carousel people={people} isDark={snap.isDark} />
              ) : (
                <p className="text-gray-500 dark:text-gray-400 transition-all ease-in duration-700">
                  No Faces available yet.
                </p>
              )}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <AiAgent />
        </AnimatedSection>

        <AnimatedSection>
          <About />
        </AnimatedSection>

        <Footer isDark={snap.isDark} />
      </main>
    </div>
  );
}
