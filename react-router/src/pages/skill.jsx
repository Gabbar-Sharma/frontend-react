function Skill() {
  const categories = [
    {
      title: "Frontend",
      icon: "⚡",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: "⚙",
      skills: ["Node.js", "Express.js", "REST API", "Authentication"],
    },
    {
      title: "Database",
      icon: "◈",
      skills: ["MongoDB", "MySQL", "Database Design"],
    },
    {
      title: "DevOps & Cloud",
      icon: "☁",
      skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD"],
    },
    {
      title: "Engineering",
      icon: "⌘",
      skills: ["System Design", "DSA", "API Design", "Architecture"],
    },
    {
      title: "Currently Learning",
      icon: "✦",
      skills: ["Generative AI", "LLMs", "Microservices"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
            MY SKILLS
          </span>

          <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Technologies I work with
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A collection of technologies and engineering concepts
            I'm learning and working with.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-950"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-400">
                  {category.icon}
                </div>

                <span className="text-xs text-slate-600">
                  {category.skills.length} skills
                </span>
              </div>

              <h2 className="mt-6 text-xl font-bold text-white">
                {category.title}
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;