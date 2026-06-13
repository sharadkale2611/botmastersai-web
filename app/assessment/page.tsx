import Link from "next/link";
import {
  Brain,
  Code2,
  Database,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const assessments = [
  {
    title: ".NET Full Stack",
    description:
      "C#, ASP.NET Core, SQL Server, Entity Framework, REST APIs and React.",
    icon: Code2,
  },
  {
    title: "Python Full Stack",
    description:
      "Python, Django/FastAPI, PostgreSQL, REST APIs and modern frontend frameworks.",
    icon: Brain,
  },
  {
    title: "MERN Stack",
    description:
      "MongoDB, Express.js, React and Node.js fundamentals and projects.",
    icon: Database,
  },
  {
    title: "AI & Automation",
    description:
      "Prompt engineering, OpenAI APIs, AI tools and automation workflows.",
    icon: Cpu,
  },
];

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061A3A] via-[#0B3D91] to-[#123F87] px-5 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Skill Assessment
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            Take Skill Assessment
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100/80">
            Evaluate your current skills and discover the most suitable
            internship and learning path for your career goals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 px-5 pb-20 lg:px-8">
        <div className="relative mx-auto -mt-24 max-w-7xl">
          {/* Main Card */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#0B3D91]/10 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
                Find Your Level
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#0B3D91] sm:text-5xl">
                Choose Your Technology Stack
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our assessments help identify your strengths and recommend
                suitable projects and internship programs.
              </p>
            </div>

            {/* Assessment Cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {assessments.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-[#0B3D91]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91] transition duration-300 group-hover:bg-[#0B3D91] group-hover:text-[#D4AF37]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0B3D91]">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-20">
              <h3 className="text-center text-3xl font-bold text-[#0B3D91]">
                What You'll Get
              </h3>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  "Personalized learning recommendations",
                  "Technology stack suitability analysis",
                  "Skill gap identification",
                  "Project recommendations",
                  "Internship guidance",
                  "Career roadmap suggestions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-[#0B3D91]/10 bg-[#F7F9FD] p-5"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 text-[#D4AF37]" />

                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-[#092E6E] shadow-lg shadow-[#D4AF37]/20 transition duration-200 hover:-translate-y-1 hover:bg-[#E2C15B]"
              >
                Start Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>

              <p className="mt-5 text-sm text-slate-500">
                Assessment takes approximately 10–15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}