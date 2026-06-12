const roadmapSteps = [
  "Programming Fundamentals",
  "Frontend Development",
  "Backend Development",
  "Database Design",
  "API Development",
  "Authentication",
  "Git & GitHub",
  "Testing",
  "Cloud Deployment",
  "AI Integration",
  "Interview Preparation",
];

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-white px-5 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-full w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.08),transparent_65%)]" />
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            Your Learning Journey
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Progress through a structured path from core programming concepts
            to AI integration and interview readiness.
          </p>
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-[#D4AF37] via-[#0B3D91]/30 to-[#D4AF37] sm:left-1/2 sm:-translate-x-1/2" />

          {roadmapSteps.map((step, index) => (
            <li
              key={step}
              className="group relative pb-10 pl-16 last:pb-0 sm:pl-0"
            >
              <article
                className={`relative rounded-2xl border border-[#0B3D91]/10 bg-[#F7F9FD] px-5 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:bg-white hover:shadow-xl hover:shadow-[#0B3D91]/10 sm:w-[calc(50%-2.5rem)] sm:px-6 ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:text-right"
                    : "sm:ml-auto"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  Stage {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-bold text-[#0B3D91] sm:text-lg">
                  {step}
                </h3>
              </article>

              <span className="absolute left-0 top-1/2 grid size-12 -translate-y-[calc(50%+1.25rem)] place-items-center rounded-full border-4 border-white bg-[#0B3D91] text-sm font-black text-[#D4AF37] shadow-lg shadow-[#0B3D91]/20 transition-transform duration-300 group-hover:scale-110 sm:left-1/2 sm:-translate-x-1/2">
                {index + 1}
              </span>

              {index < roadmapSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-4 text-lg font-bold text-[#D4AF37] sm:left-1/2 sm:-translate-x-1/2"
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
