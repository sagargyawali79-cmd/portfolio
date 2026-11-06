const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "JWT",
      "API Development",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Database Design",
      "CRUD",
      "Relationships",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Vite",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900/40 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            MY SKILLS
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            My Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Technologies and tools I use while learning and building
            modern web applications.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <p className="text-4xl">
                {group.icon}
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <p
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;