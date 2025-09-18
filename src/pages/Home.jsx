export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <section
        id="introduction"
        className="h-[75vh] max-w-4xl mx-auto flex flex-col justify-center items-center text-center"
      >
        <div className="w-full mb-4">
          <h1 className="font-georgia text-3xl sm:text-4xl md:text-6xl transform scale-y-125 leading-[0.75] text-center max-w-full">
            GENERATIONAL CONSULTING
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
          Bridging Generations, Building Futures.
        </p>
      </section>

      <div className="w-2/3 h-1 bg-black mx-auto my-4"></div>

      <section
        id="about-the-club"
        className="w-full bg-white text-black relative py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-16 max-w-7xl mx-auto gap-y-6 md:gap-x-8">
          {/* Logo */}
          <img
            src="/assets/clublogo.png"
            alt="Generational Consulting Logo"
            className="h-[35vh] w-auto object-contain px-6"
          />

          {/* Text */}
          <div className="flex flex-col items-center md:items-start max-w-xl md:max-w-2xl md:ml-6 px-6">
            <h2 className="text-4xl font-georgia mb-4">Us.</h2>
            <p className="text-lg font-inter leading-relaxed">
              At Generational Consulting, we link today's businesses with
              tomorrow's audience. We’re a team of students brought together by
              a shared passion for creativity, design, and connection between
              generations. As members of a younger generation, we offer a
              perspective that can’t be found in reports or data alone. We
              provide insight into trends, values, and conversations important
              among our peers, and we use that insight to help brands better
              communicate in authentic ways.
            </p>
            <p className="text-lg font-inter leading-relaxed mt-5">
              Beyond strategy, we care about building relationships, sparking
              ideas, and creating meaningful work. In any part of our work, we
              pour our energy and creativity into everything we do. Together,
              want to prove that when passion meets purpose, even a group of
              students can help shape the future of marketing.
            </p>
          </div>
        </div>
      </section>

      <div className="w-2/3 h-1 bg-black mx-auto my-4"></div>

      <section
        id="mission"
        className="w-full bg-white text-black relative py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-16 max-w-7xl mx-auto gap-y-6 md:gap-x-8">
          {/* Text Column */}
          <div className="flex flex-col items-center md:items-start max-w-xl md:max-w-2xl md:ml-6 md:mr-8 px-6">
            <h2 className="text-4xl font-georgia mb-6">The Mission.</h2>
            <p className="text-lg font-inter leading-relaxed max-w-md text-center md:text-left">
              We provide members with real-world marketing experience while
              helping brands authentically connect with the next generation. By
              blending creativity, data-driven insights, and an understanding of
              young audiences, we shape the future of modern marketing.
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-auto flex items-center justify-center mt-6 md:mt-0 px-4">
            <img
              src="/assets/missionphoto.jpg"
              alt="Our Mission"
              className="h-[35vh] w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
