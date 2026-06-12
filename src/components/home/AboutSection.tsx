const features = [
  {
    number: "01",
    title: "Industry-Oriented Learning",
    description:
      "Learn beyond tutorials with real-world development practices.",
  },
  {
    number: "02",
    title: "Project-Based Experience",
    description: "Build complete applications instead of isolated demos.",
  },
  {
    number: "03",
    title: "AI & Modern Technologies",
    description:
      "Work with APIs, AI integrations, and Agentic AI workflows.",
  },
  {
    number: "04",
    title: "Development to Deployment",
    description:
      "Understand the complete software lifecycle from requirement analysis to production deployment.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F9FD] px-5 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute right-0 top-0 -z-10 size-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            About BotMasters AI
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-5xl">
            Transforming Learners into Professional Developers
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              BotMasters AI is an industry-oriented software development and AI
              solutions company committed to helping students, freshers, and
              professionals bridge the gap between learning and real-world
              software development.
            </p>
            <p>
              We focus on project-based internships, personalized mentorship,
              and modern software engineering practices to provide practical
              industry experience.
            </p>
            <p>
              Participants gain hands-on experience by building
              enterprise-grade applications and AI-powered solutions across
              domains such as CRM, ERP, LMS, E-Commerce, IoT, and intelligent
              automation.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#D4AF37]/40 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B59020]">
              Our Mission
            </p>
            <p className="mt-3 font-semibold leading-7 text-[#0B3D91]">
              To empower developers with practical experience and help
              businesses leverage modern software and AI technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({ number, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-[#0B3D91]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#0B3D91]/10 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-[#0B3D91] text-xs font-black text-[#D4AF37] transition-transform duration-300 group-hover:rotate-6">
                  {number}
                </span>
                <span className="h-px w-10 bg-[#D4AF37] transition-all duration-300 group-hover:w-16" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#0B3D91]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
