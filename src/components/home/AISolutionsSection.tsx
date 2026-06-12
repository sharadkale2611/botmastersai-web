const solutions = [
  {
    number: "01",
    title: "AI Chatbots",
    description:
      "Create intelligent conversational experiences for support, sales, and operations.",
  },
  {
    number: "02",
    title: "RAG Applications",
    description:
      "Build grounded AI applications that reason over trusted business knowledge.",
  },
  {
    number: "03",
    title: "Agentic AI Workflows",
    description:
      "Design autonomous workflows that plan, act, and complete complex tasks.",
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Automate repetitive processes with intelligent, scalable AI systems.",
  },
  {
    number: "05",
    title: "Third-Party Integrations",
    description:
      "Connect AI capabilities with APIs, platforms, and existing software.",
  },
  {
    number: "06",
    title: "Business AI Solutions",
    description:
      "Apply practical AI to improve decisions, productivity, and customer value.",
  },
];

export default function AISolutionsSection() {
  return (
    <section
      id="ai-solutions"
      className="relative isolate overflow-hidden bg-[#061A3A] px-5 py-12 text-white sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(29,97,201,0.3),transparent_38%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              AI Solutions
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Build the Future with AI
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-blue-100/75 lg:justify-self-end">
            Leverage modern AI technologies to create intelligent applications
            and automation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ number, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-black/20 sm:p-7"
            >
              <div className="absolute right-0 top-0 size-28 translate-x-10 -translate-y-10 rounded-full border border-[#D4AF37]/20 transition-transform duration-500 group-hover:scale-150" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.2em] text-[#D4AF37]">
                  {number}
                </span>
                <span className="size-2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.8)] transition-transform duration-300 group-hover:scale-150" />
              </div>
              <h3 className="mt-14 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-blue-100/70">{description}</p>
              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
