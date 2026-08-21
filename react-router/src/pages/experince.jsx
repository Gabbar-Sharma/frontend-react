function Experience() {
  const experiences = [
    {
      year: "2026 — Present",
      title: "Full Stack Development",
      description:
        "Building modern web applications with React, Node.js, REST APIs, databases and scalable frontend architectures.",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
      side: "left",
    },
    {
      year: "2025",
      title: "React Development",
      description:
        "Learning advanced React concepts, component architecture, state management, Context API and API integration.",
      technologies: ["React", "JavaScript", "Context API", "Tailwind CSS"],
      side: "right",
    },
    {
      year: "2024",
      title: "Started Development Journey",
      description:
        "Started learning programming fundamentals, web technologies and the core concepts of software development.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      side: "left",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
            MY JOURNEY
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Experience &
            <span className="text-indigo-400"> Learning.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            My journey through development, learning and building
            real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-indigo-500 via-purple-500 to-slate-800 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">

            {experiences.map((experience, index) => (
              <div
                key={experience.year}
                className="relative grid gap-8 sm:grid-cols-2 sm:gap-12"
              >

                {/* LEFT */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    experience.side === "right"
                      ? "sm:order-2"
                      : "sm:order-1 sm:text-right"
                  }`}
                >
                  <span className="text-sm font-bold tracking-wide text-indigo-400">
                    {experience.year}
                  </span>

                  <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {experience.title}
                  </h2>
                </div>

                {/* RIGHT */}
                <div
                  className={`relative pl-12 ${
                    experience.side === "right"
                      ? "sm:order-1 sm:pr-0 sm:pl-0"
                      : "sm:order-2"
                  }`}
                >

                  {/* Timeline Dot */}
                  <span
                    className={`absolute -left-1.25 top-1 flex h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 ${
                      experience.side === "right"
                        ? "sm:-right-1.5 sm:left-auto"
                        : ""
                    }`}
                  />

                  {/* Card */}
                  <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900 hover:shadow-indigo-950/20">

                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 font-bold text-indigo-400 ring-1 ring-indigo-500/20 transition duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        Completed
                      </span>

                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-indigo-500/50 hover:text-indigo-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-5 py-3 text-sm text-slate-400 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Always learning. Always building.
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;