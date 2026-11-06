const journey = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, responsive layouts and modern user interfaces.",
  },
  {
    number: "02",
    title: "React Development",
    description:
      "Components, props, state, hooks, API integration and reusable UI.",
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Node.js, Express.js, REST APIs, authentication and server-side applications.",
  },
  {
    number: "04",
    title: "Database Development",
    description:
      "MySQL, MongoDB, SQL, CRUD operations, relationships and database design.",
  },
  {
    number: "05",
    title: "Full Stack Development",
    description:
      "Connecting frontend, backend and databases to create complete applications.",
  },
  {
    number: "06",
    title: "AI & Machine Learning",
    description:
      "Future goal: learning AI/ML and building intelligent full stack applications.",
  },
];

function Journey() {
  return (
    <section id="journey" className="bg-slate-900/40 px-6 py-28">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            MY JOURNEY
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Learn. Build. Improve.
          </h2>
        </div>

        <div className="mt-16 grid gap-5">

          {journey.map((item) => (
            <div
              key={item.number}
              className="flex gap-6 rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/40 sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 font-black text-slate-950">
                {item.number}
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Journey;