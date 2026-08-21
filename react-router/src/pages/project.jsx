function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce application with product browsing, cart management and a modern user interface.",
      tech: ["React", "Tailwind CSS", "Context API"],
      type: "Frontend",
      number: "01",
    },
    {
      title: "Task Management System",
      description:
        "A productivity application designed to manage tasks, priorities and daily workflows efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Full Stack",
      number: "02",
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern responsive portfolio showcasing projects, skills, experience and professional information.",
      tech: ["React", "Tailwind CSS"],
      type: "Frontend",
      number: "03",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
            MY PROJECTS
          </span>

          <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Things I've
              <span className="text-indigo-400"> built.</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-400 lg:justify-self-end">
              A collection of projects where I applied my development,
              design and problem-solving skills to build useful digital
              experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/30"
            >

              {/* Project Preview */}
              <div className="relative h-56 overflow-hidden bg-slate-950 p-5">

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent transition duration-500 group-hover:from-indigo-600/30" />

                {/* Grid Background */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs font-bold tracking-widest text-slate-600">
                  {project.number}
                </span>

                {/* Type */}
                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
                  {project.type}
                </span>

                {/* Code Window */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 font-mono text-xs shadow-2xl backdrop-blur transition duration-500 group-hover:-translate-y-1">

                  {/* Window Header */}
                  <div className="mb-4 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <p className="text-slate-500">
                    <span className="text-purple-400">const</span>{" "}
                    project = {"{"}
                  </p>

                  <p className="mt-1 pl-4 text-green-400">
                    name: "{project.title}"
                  </p>

                  <p className="mt-1 pl-4 text-blue-400">
                    status: "completed"
                  </p>

                  <p className="mt-1 text-indigo-400">
                    {"}"}
                  </p>

                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-white transition duration-300 group-hover:text-indigo-400">
                    {project.title}
                  </h2>

                  <span className="text-slate-700 transition duration-300 group-hover:text-indigo-500">
                    ↗
                  </span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-indigo-500/50 hover:text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 border-t border-slate-800 pt-5">

                  <a
                    href="#"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-900/30"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                  <a
                    href="#"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-400"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl transition duration-500 group-hover:bg-indigo-600/30" />

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Project;