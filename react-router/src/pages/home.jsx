function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Yugant
            <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sharma.
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-slate-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, scalable and user-focused web applications
            using React, Node.js and modern cloud technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10"
            >
              Let's Talk
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-slate-800 pt-8">
            <div>
              <p className="text-2xl font-black text-white">10+</p>
              <p className="mt-1 text-xs text-slate-500">Projects</p>
            </div>

            <div className="border-l border-slate-800 pl-5">
              <p className="text-2xl font-black text-white">8+</p>
              <p className="mt-1 text-xs text-slate-500">Technologies</p>
            </div>

            <div className="border-l border-slate-800 pl-5">
              <p className="text-2xl font-black text-white">100%</p>
              <p className="mt-1 text-xs text-slate-500">Learning</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="absolute -inset-10 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-500">
                developer.js
              </span>
            </div>

            <div className="space-y-3 py-6 font-mono text-sm">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                = {"{"}
              </p>

              <p className="pl-5">
                name: <span className="text-green-400">"Yugant"</span>,
              </p>

              <p className="pl-5">
                role:{" "}
                <span className="text-green-400">
                  "Full Stack Developer"
                </span>
                ,
              </p>

              <p className="pl-5">
                skills: [
              </p>

              <p className="pl-10 text-yellow-300">
                "React", "Node.js", "AWS"
              </p>

              <p className="pl-5">],</p>

              <p className="pl-5">
                passion: <span className="text-green-400">"Building"</span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;