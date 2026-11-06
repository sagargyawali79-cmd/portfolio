function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Turning Ideas Into Reality
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">
              Who I Am
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Sagar Gyawali, a BSc CSIT student and passionate
              developer who enjoys building websites and learning
              modern technologies.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I started my journey with frontend development and React.
              My goal is to become a strong Full Stack Developer who
              can design beautiful interfaces, build reliable backend
              systems and work with databases.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              After strengthening my full stack skills, I also plan
              to explore AI and Machine Learning to build intelligent
              applications.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <p className="text-4xl">🎓</p>
              <h3 className="mt-5 text-xl font-bold">
                BSc CSIT
              </h3>
              <p className="mt-3 text-slate-400">
                Computer Science and Information Technology student.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <p className="text-4xl">💻</p>
              <h3 className="mt-5 text-xl font-bold">
                Web Developer
              </h3>
              <p className="mt-3 text-slate-400">
                Creating responsive and modern web experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <p className="text-4xl">🚀</p>
              <h3 className="mt-5 text-xl font-bold">
                Problem Solver
              </h3>
              <p className="mt-3 text-slate-400">
                Learning by building practical projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <p className="text-4xl">🤖</p>
              <h3 className="mt-5 text-xl font-bold">
                Future AI Developer
              </h3>
              <p className="mt-3 text-slate-400">
                Planning to combine full stack development with AI.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;