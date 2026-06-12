const internshipSteps = [
  "Skill Assessment",
  "Customized Learning Path",
  "Project Assignment",
  "Team Collaboration",
  "Code Reviews",
  "Testing",
  "Deployment",
  "Interview Preparation",
];

export default function InternshipSection() {
  return (
    <section
      id="internships"
      className="relative overflow-hidden bg-white px-5 py-12 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-full max-w-4xl -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_65%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Internship Journey
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            The BotMasters Internship Experience
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-slate-600">
            From learning to deployment, experience how modern software teams
            work.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#0B3D91]/30 to-[#D4AF37] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {internshipSteps.map((step, index) => (
              <article
                key={step}
                className={`group relative pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${
                  index % 2 === 0 ? "" : "md:text-left"
                }`}
              >
                <div
                  className={`rounded-3xl border border-[#0B3D91]/10 bg-[#F7F9FD] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:bg-white hover:shadow-xl hover:shadow-[#0B3D91]/10 ${
                    index % 2 === 0
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#0B3D91]">
                    {step}
                  </h3>
                </div>

                <span className="absolute left-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[#0B3D91] text-xs font-black text-[#D4AF37] shadow-lg shadow-[#0B3D91]/20 transition-transform duration-300 group-hover:scale-110 md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
