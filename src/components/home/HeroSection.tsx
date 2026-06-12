import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F9FD] px-5 py-20 sm:py-28 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_10%_10%,rgba(11,61,145,0.15),transparent_32%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Learn. Build. Lead.
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-6xl lg:text-7xl">
            Transform Skills into Real Industry Experience
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
            Build enterprise-grade applications, AI-powered solutions, and
            modern software systems with industry-oriented mentorship and
            project-based internships.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              id="apply"
              href="#internships"
              className="rounded-full bg-[#0B3D91] px-7 py-3.5 text-center font-bold text-white shadow-xl shadow-[#0B3D91]/20 transition hover:-translate-y-0.5 hover:bg-[#092E6E]"
            >
              Apply For Internship
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-[#D4AF37] bg-white px-7 py-3.5 text-center font-bold text-[#0B3D91] transition hover:-translate-y-0.5 hover:bg-[#D4AF37]/10"
            >
              Take Skill Assessment
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-[#D4AF37]/25 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-2xl shadow-[#0B3D91]/15 backdrop-blur sm:p-12">
            <Image
              src="/logo.png"
              alt="BotMasters AI"
              width={220}
              height={80}
              priority
              className="h-auto w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
