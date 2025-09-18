export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <section
        id="introduction"
        className="h-[50vh] max-w-4xl mx-auto flex flex-col justify-center items-center text-center"
      >
        <div className="w-full mb-4">
          <h1 className="font-georgia text-6xl transform scale-y-125 leading-[0.85] text-center max-w-full">
            GENERATIONAL CONSULTING
          </h1>
        </div>
        <p className="text-lg font-inter leading-relaxed max-w-2xl mx-auto">
          We link today's businesses to tomorrow's audience.
        </p>
      </section>

      <div className="w-2/3 h-1 bg-black mx-auto my-4"></div>

      <section
        id="mission"
        className="w-full bg-white text-black relative py-8"
      >
        <div className="flex flex-col md:flex-row md:items-start flex-wrap justify-between px-4 md:px-12 lg:px-16 max-w-7xl mx-auto gap-y-6 md:gap-x-12">
          {/* Text Column */}
          <div className="flex-1 min-w-[250px] flex flex-col justify-center z-10 h-[30vh] md:h-[30vh]">
            <h2 className="text-4xl font-georgia mb-6">The Mission</h2>
            <p className="text-lg font-inter leading-relaxed max-w-md">
              We strive to provide members with real-world marketing experience
              while helping brands authentically reach the next generation. We
              aim to combine creativity, data-driven insights, and an
              understanding of young generations to shape modern marketing.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center md:justify-start mt-6 md:mt-0 flex-1 min-w-[200px]">
            <img
              src="/assets/missionphoto.jpg"
              alt="Our Mission"
              className="h-[35vh] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto py-16 px-4 space-y-6">
        <h2 className="text-4xl font-georgia text-center">Future Projects</h2>
        <ul className="list-disc font-inter list-inside space-y-3 text-lg leading-relaxed max-w-3xl mx-auto">
          <li>
            Working with an ex K-pop choreographer and their university lab
            team, Socio Corporation, and Bruin Studio Strategies to develop
            health-focused products for the elderly.
          </li>
          <li>
            Case study: bringing a patented self-care product to the U.S.
            market.
          </li>
          <li>
            Upcoming project with SoraNews24, a bilingual news outlet based in
            Tokyo.
          </li>
        </ul>
      </section>
    </main>
  );
}
