export default function Contact() {
  return (
    <main className="bg-white text-gray-900 font-sans min-h-screen">
      <section className="max-w-4xl mx-auto pt-16 pb-8 px-4 text-center space-y-6">
        <h1 className="text-4xl font-georgia mb-4">Want to reach us?</h1>
        <p className="text-lg sm:text-xl font-inter text-gray-700 max-w-xl mx-auto">
          We’re always happy to connect. Feel free to reach out to any of us
          below, or follow us on social media.
        </p>
      </section>

      <div className="w-1/6 h-1 bg-black mx-auto"></div>

      {/* Contact the Club */}
      <section className="max-w-4xl ml-64 py-2 px-2 space-y-4 my-4">
        <h2 className="text-2xl font-georgia mb-3">Contact the Club</h2>
        <ul className="list-none font-inter text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">General Inquiries:</span>{" "}
            <a
              href="mailto:genconsult.ucla@gmail.com"
              className="text-blue-600 hover:underline"
            >
              genconsult.ucla@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/gen_consult_ucla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @gen_consult_ucla
            </a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/company/generationalconsulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Generational Consulting
            </a>
          </li>
        </ul>
      </section>

      {/* Co-Presidents */}
      <section className="max-w-4xl ml-64 py-2 px-2 space-y-4 my-4">
        <h2 className="text-2xl font-georgia mb-3">Co-Presidents</h2>
        <ul className="list-none font-inter text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Liam Holmes:</span>{" "}
            <a
              href="mailto:liamdude2005@gmail.com"
              className="text-blue-600 hover:underline"
            >
              liamdude2005@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Bryan Ly:</span>{" "}
            <a
              href="mailto:bryanly@g.ucla.edu"
              className="text-blue-600 hover:underline"
            >
              bryanly@g.ucla.edu
            </a>
          </li>
        </ul>
      </section>

      {/* Head of Recruitment */}
      <section className="max-w-4xl ml-64 py-2 px-2 space-y-4 my-4">
        <h2 className="text-2xl font-georgia mb-3">Head of Recruitment</h2>
        <ul className="list-none font-inter text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">this is a placeholder:</span> email
            goes here
          </li>
        </ul>
      </section>

      {/* Social Media Team */}
      <section className="max-w-4xl ml-64 py-2 px-2 space-y-4 my-4">
        <h2 className="text-2xl font-georgia mb-3">Other Team i forgot</h2>
        <ul className="list-none font-inter text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">placeholder:</span> email again
          </li>
          <li>
            <span className="font-semibold">hello:</span> hello
          </li>
        </ul>
      </section>
    </main>
  );
}
