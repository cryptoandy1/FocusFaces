import { Grid } from 'react-loader-spinner'
import Image from 'next/image'
import images from '../images/images'

const Loader = () => {
  return (
    <div className="absolute flex flex-col gap-10 items-center justify-center z-[150] w-[100vw] h-[100vh] bg-gray-900 text-3xl text-green-900 sm:text-5xl">
      <h1 className="absolute hidden">Rublev frontend</h1>
      <h2 className="absolute hidden">Andrey Rublev</h2>
      <h2 className="absolute hidden"> Web Developer</h2>
      <h2 className="absolute hidden">React</h2>
      <h2 className="absolute hidden">Front-end developer</h2>
      <h2 className="absolute hidden">Frontend developer Canada</h2>
      <h2 className="absolute hidden">Frontend</h2>
      <h2 className="absolute hidden">Front-end Canada</h2>
      <Image
        src={images.myPhoto}
        alt="Andrey Rublev Frontend"
        className="absolute hidden"
      ></Image>
      <div className="absolute hidden">
        <p>
          I&apos;ve been involved in programming since 2016. I&apos;m
          self-taught in this field. Coding for me is one of the two activities
          I can engage myself in all day long (second one is playing guitar
          🎸😄)
        </p>
        <p>
          I started off by learning Python and I have basic skills in it. But at
          the moment, my primary focus is on building responsive and interactive
          web-applications using React.js. Currently, I&apos;m practicing with
          Next.js as a recommended framework for modern React development.
        </p>
        <p>
          For several years I&apos;ve been engaged in crypto sphere and have
          been involved in testing emerging crypto-projects. So I have quite an
          interest in building something for web3. And therefore, I&apos;m
          interested in Solidity development.
        </p>
        <p>
          Also, lately I&apos;ve become a big fan of Three.js library that
          simplifies workflow with WebGL API and let us build absolutely
          beautiful things (some of which you can find in the
          &apos;Portfolio&apos; section below and on this page as well 😉 )
        </p>
        <p>
          I enjoy working in team and the process of sharing experience and
          ideas beetween people, but I&apos;m ok with working by myself as well.
          Also, I&apos;m a self-disciplined person who respects deadlines and I
          like to see those qualities in people.
        </p>
      </div>
      <h2>Loading...</h2>
      <Grid
        height="80"
        width="80"
        color="#431407"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader
