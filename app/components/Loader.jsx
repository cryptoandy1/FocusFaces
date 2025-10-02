import { Grid } from "react-loader-spinner";
import Image from "next/image";
import images from "../images/images";

const Loader = () => {
  return (
    <div className="absolute flex flex-col gap-10 items-center justify-center z-[150] w-[100vw] h-[100vh] bg-gradient-to-br from-gray-800 via-pink-950 to-gray-900 text-3xl sm:text-5xl">
      {/* SEO-теги для поисковиков, скрытые */}
      <h1 className="absolute hidden">Focus Faces</h1>
      <h2 className="absolute hidden">AI-powered content creation</h2>
      <h2 className="absolute hidden">Social media assistant</h2>
      <h2 className="absolute hidden">AI agent coming soon</h2>
      <h2 className="absolute hidden">Brand storytelling</h2>
      <h2 className="absolute hidden">Content creation platform</h2>
      <h2 className="absolute hidden">Focus Faces project</h2>

      {/* Лого для SEO */}
      <Image
        src={images.fnf_logo_big_noBg}
        alt="Focus Faces Logo"
        className="absolute hidden"
      />

      <div className="absolute hidden">
        <p>
          Focus Faces is a next-generation media project blending AI and human
          creativity. Our AI agent will help users craft engaging posts for
          social media, providing ideas, structure, and posting reminders.
        </p>
        <p>
          Our platform takes care of the technical side of online branding,
          allowing users to focus on creative storytelling and offline
          connections.
        </p>
        <p>
          With Focus Faces, content creators, influencers, and professionals can
          streamline their social media presence, improve engagement, and
          consistently deliver value to their audience.
        </p>
        <p>
          AI-assisted tools, combined with professional media production, make
          Focus Faces a hub for modern digital storytelling and brand growth.
        </p>
      </div>

      {/* Пульсирующий текст */}
      <h2 className="text-pink-600 dark:text-yellow-500 animate-pulse">
        Loading Focus Faces...
      </h2>

      {/* Grid анимация */}
      <Grid
        height="80"
        width="80"
        color="#ec4899" // pink-600
        secondaryColor="#facc15" // yellow-400
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
