import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#061A3A] via-[#0B3D91] to-[#123F87] px-5 py-12 text-white sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.26),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_36%)]" />
      <div className="absolute inset-x-6 top-6 -z-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[0.75fr_1.25fr] sm:p-10 lg:p-12">
        <div className="mx-auto w-full max-w-xs rounded-3xl bg-white p-6 shadow-xl shadow-black/20 md:mx-0">
          <Image
            src="/logo.png"
            alt="BotMasters AI"
            width={220}
            height={80}
            className="h-auto w-full"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Start Building Today
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to Transform Your Skills?
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-blue-100/80 md:mx-0">
            Join BotMasters AI and start building software like a professional.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Link
              href="#internships"
              className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-center font-bold text-[#092E6E] shadow-lg shadow-[#D4AF37]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#E2C15B]"
            >
              Apply For Internship
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
