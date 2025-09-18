export default function Services() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Services Overview */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="text-4xl font-georgia mb-4">Our Services</h2>
        <p className="text-lg sm:text-xl leading-relaxed font-inter text-gray-700 px-4">
          At Generational Consulting, we specialize in bridging the gap between
          established businesses and the emerging Gen Z consumer. We offer
          tailored marketing solutions that combine data-driven insights with
          fresh, creative perspectives. From social media strategy to brand
          positioning and digital engagement, our team of passionate students
          helps businesses modernize their approach, expand their reach, and
          connect authentically with younger audiences.
        </p>
      </section>

      <div className="w-2/3 h-1 bg-black mx-auto my-4"></div>

      {/* Future Projects */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl font-georgia text-center mb-8">
            Future Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-georgia mb-3">
                Senior Health-Focused Products
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                Collaborating with an ex K-pop choreographer and their
                university lab team, Socio Corporation, and Bruin Studio
                Strategies to design and develop health-focused products
                tailored for elderly consumers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-georgia mb-3">
                Case Study: Self-Care Product Launch
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                A case study project focused on bringing a patented self-care
                product to the U.S. market, blending strategy, marketing, and
                consumer insights.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-georgia mb-3">
                SoraNews24 Collaboration
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                Upcoming project with SoraNews24, a bilingual news outlet based
                in Tokyo, exploring cross-cultural marketing and Gen Z
                engagement strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
