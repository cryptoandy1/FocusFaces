const AiAgent = () => {
  return (
    <section
      id="ai-agent"
      className="bg-transparent z-[1] relative mb-[9rem] transition-all ease-in duration-700"
    >
      <div className="px-10 sm:px-[7rem] mx-auto max-w-[1100px]">
        <h3 className="text-3xl sm:text-5xl py-1 text-center text-gray-900 lg:text-left dark:text-slate-100 transition-all duration-300 ease-in-out italic">
          AI Agent (Coming Soon)
        </h3>
        <div className="flex flex-wrap justify-center text-justify px-6 sm:px-0">
          <div className="text-md sm:text-lg md:text-2xl py-5 text-gray-600 dark:text-slate-300 transition-all duration-700 ease-in-out">
            <p className="leading-10">
              Meet our AI Agent — your smart assistant for social media content.
              <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              Generates post ideas tailored to your style, keeping your
              creativity flowing.
              <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              Handles the technical side of building your online brand, so you
              can focus on real-life connections and creative expression — the
              essence of
              <span className="font-semibold"> Focus Faces</span>.
              <br />
              <span className="text-pink-600/80 dark:text-yellow-500 transition-all duration-700 ease-in-out">
                ✦
              </span>{" "}
              From captions to content ideas to posting reminders, it will be
              your creative co-pilot — coming soon!
            </p>

            {/* Кнопка запроса демо */}
            <div className="mt-8 text-center">
              <a
                href="https://t.me/ar_fromK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-pink-600/80 dark:bg-yellow-500 text-white dark:text-black font-semibold rounded-lg shadow-lg hover:bg-pink-500/90 dark:hover:bg-yellow-400 transition-colors duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgent;
