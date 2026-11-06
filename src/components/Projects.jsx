const projects = [
  {
    title: "Bright Future School",
    type: "Frontend",
    description:
      "A complete responsive school website with Home, About, Courses, Teachers, Gallery, Contact and Apply Now sections.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Amazon Clone",
    type: "Frontend",
    description:
      "An e-commerce inspired interface focused on product cards, navigation, layout and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tech Company Website",
    type: "Frontend",
    description:
      "A modern technology company website designed to present services, information and business content.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Full Stack E-Commerce",
    type: "Full Stack",
    description:
      "A planned full stack application with products, authentication, cart, orders, API and database integration.",
    technologies: ["React", "Node.js", "Express", "Database"],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            MY PROJECTS
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A selection of projects from my development journey.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="flex items-center justify-between">
                <p className="rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
                  {project.type}
                </p>

                <p className="text-3xl text-slate-600 transition group-hover:text-cyan-400">
                  0{index + 1}
                </p>
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <p
                    key={technology}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {technology}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-bold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;