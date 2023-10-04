'use client'
import state from './store'
import { useSnapshot } from 'valtio'
import imagesLoaded from 'imagesloaded'
import {
  Navbar,
  Profile,
  About,
  Card,
  Footer,
  AnimatedSection,
  Loader,
  Background,
} from './components'
import images from './images/images'
import { Suspense, useEffect } from 'react'

export default function Home() {
  const snap = useSnapshot(state)
  useEffect(() => {
    imagesLoaded(
      document.querySelectorAll('img'),
      () => (state.isLoading = false)
    )
  }, [])

  if (snap.isLoading) {
    return <Loader />
  }

  return (
    <div
      className={`scroll-smooth relative bg-transparent ${
        snap.isDark ? 'dark' : ''
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
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <section className="bg-transparent relative z-[1] mb-[9rem] transition-all ease-in duration-300">
            <h3 className="text-3xl sm:text-5xl py-1 mb-6 px-10 sm:px-[7rem] mx-auto max-w-[1100px] text-center text-gray-900 lg:text-left dark:text-slate-100">
              Portfolio
            </h3>
            <div className="flex flex-col justify-center items-center px-10 mx-auto mt-10 mb-20">
              <Card
                gif={images.shirtGif}
                pic={images.shirtImg}
                name="T-shirt customizer"
                desciption="A prototype of a customization tool for a piece of clothing that can
                be applied in sales. A client can customize color of the t-shirt,
                use local files to create a unique pattern or can ask DALL.E AI to
                generate the pattern. I took the popular idea of a 'customization tool' and added some cool features to it using React and Three.js. I adjusted the
                'Camera' performance, enhanced some animation using framer-motion library,
                made the app responsive, developed Cart interface and added an
                option to save the AI-generated pattern for later use. As for
                styling, I used Tailwind CSS."
                builtWith={['React.js', 'Three.js', 'TailwindCSS']}
                liveDemo="https://shirt-customizer.rublev-dev.com"
              />
            </div>
          </section>
        </AnimatedSection>
        <Footer isDark={snap.isDark} />
      </main>
    </div>
  )
}
