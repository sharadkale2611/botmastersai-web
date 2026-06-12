const services = [
  {
    number: "01",
    title: "Industry-Oriented Internships",
    description:
      "Hands-on project experience with personalized mentorship.",
  },
  {
    number: "02",
    title: "Enterprise Application Development",
    description:
      "Build CRM, ERP, LMS, E-Commerce and business applications.",
  },
  {
    number: "03",
    title: "AI Solutions",
    description: "Integrate AI, automation and Agentic AI workflows.",
  },
  {
    number: "04",
    title: "Development to Deployment",
    description: "Learn architecture, APIs, testing and cloud deployment.",
  },
  {
    number: "05",
    title: "Team Collaboration",
    description:
      "Experience Git workflows, Agile methodology and code reviews.",
  },
  {
    number: "06",
    title: "Career Acceleration",
    description: "Resume building, mock interviews and machine tests.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F9FD] px-5 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute right-0 top-0 -z-10 size-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            What We Offer
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Industry-oriented services designed to transform skills into
            real-world experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-[#0B3D91]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-xl hover:shadow-[#0B3D91]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0B3D91] to-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#0B3D91]/5 text-sm font-black text-[#0B3D91] ring-1 ring-[#0B3D91]/10 transition duration-300 group-hover:bg-[#0B3D91] group-hover:text-[#D4AF37]">
                  {number}
                </span>
                <span className="size-2 rounded-full bg-[#D4AF37] transition-transform duration-300 group-hover:scale-[2.5]" />
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
