function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce application with product browsing, cart management and modern UI.",
      tech: ["React", "Tailwind CSS", "Context API"],
      type: "Frontend",
    },
    {
      title: "Task Management System",
      description:
        "A productivity application designed to manage tasks, priorities and daily workflows.",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Full Stack",
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern responsive portfolio showcasing projects, skills, experience and contact information.",
      tech: ["React", "Tailwind CSS"],
      type: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600">
            PROJECTS
          </span>

          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
            Things I've built.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Some of the projects where I applied my development and
            problem-solving skills.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Preview */}
              <div className="relative h-52 overflow-hidden bg-slate-900 p-6">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/30 to-purple-600/10" />

                <div className="relative rounded-xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-400">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    project =
                  </p>

                  <p className="mt-2 pl-4 text-green-400">
                    "{project.title}"
                  </p>

                  <p className="mt-2">status: "completed"</p>

                  <p className="mt-2 text-indigo-400">
                    deploy();
                  </p>
                </div>

                <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                  <a
                    href="#"
                    className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-indigo-600"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;