import { NavLink } from "react-router";


function about() {
  return (
    <NavLink to={about}
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Building digital experiences
            <span className="text-indigo-600"> that matter.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            I'm a passionate developer focused on building scalable,
            user-friendly and modern web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left - Profile */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">

            {/* Image Container */}
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 p-1 shadow-2xl">

              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-gray-100">

                {/* Replace with your image */}
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:-right-6 sm:p-5">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Available
                  </p>

                  <p className="text-xs text-gray-500">
                    For opportunities
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Who I Am
            </p>

            <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              A developer who loves
              <span className="text-indigo-600"> solving problems.</span>
            </h3>

            <div className="mt-6 space-y-4 text-gray-600">
              <p className="leading-7">
                I'm a passionate software developer who enjoys turning
                ideas into clean, functional and scalable digital products.
                I focus on writing maintainable code and creating interfaces
                that provide a great user experience.
              </p>

              <p className="leading-7">
                My development journey started with frontend development,
                where I built a strong foundation in React and modern
                JavaScript. Along the way, I expanded my knowledge into
                backend development, databases, system design and cloud
                technologies.
              </p>

              <p className="leading-7">
                I'm continuously learning new technologies and improving my
                problem-solving skills to become a better engineer.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-gray-900">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "AWS",
                  "Docker",
                  "Git",
                  "System Design",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">

              <div>
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  10+
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  5+
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  1+
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Years Learning
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl"
              >
                View My Projects

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600"
              >
                Let's Connect
              </a>

            </div>

          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default about;