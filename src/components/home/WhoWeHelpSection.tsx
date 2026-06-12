"use client";

import { useRef } from "react";
import { gsap, registerAnimationPlugins, useGSAP } from "@/lib/animations";

const audiences = [
  {
    number: "01",
    title: "Students",
    description:
      "Turn academic knowledge into practical skills by building complete, real-world software projects.",
  },
  {
    number: "02",
    title: "Freshers",
    description:
      "Gain the project experience, engineering practices, and confidence needed to begin an industry career.",
  },
  {
    number: "03",
    title: "Professionals",
    description:
      "Upskill with modern development, AI integrations, and intelligent automation through hands-on learning.",
  },
  {
    number: "04",
    title: "Businesses",
    description:
      "Leverage modern software and AI technologies to solve operational challenges and accelerate growth.",
  },
];

export default function WhoWeHelpSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerAnimationPlugins();

      const heading = "[data-who-heading]";
      const cards = gsap.utils.toArray<HTMLElement>("[data-who-card]");

      gsap.from(heading, {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: heading,
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(cards, {
        autoAlpha: 0,
        y: 22,
        scale: 0.98,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: {
          trigger: "[data-who-cards]",
          start: "top 84%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="who-we-help"
      className="relative bg-white px-5 py-12 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute left-0 top-1/2 -z-10 size-80 -translate-y-1/2 rounded-full bg-[#0B3D91]/5 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div
          data-who-heading
          className="grid gap-8 border-b border-[#0B3D91]/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
              Who We Help
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
              Built for people ready to move forward
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-600 lg:justify-self-end">
            Whether you are starting your journey, advancing your career, or
            transforming a business, BotMasters AI connects learning with
            practical software and AI experience.
          </p>
        </div>

        <div
          data-who-cards
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audiences.map(({ number, title, description }) => (
            <article
              data-who-card
              key={title}
              className="group relative min-h-64 overflow-hidden rounded-3xl border border-[#0B3D91]/10 bg-[#F7F9FD] p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#D4AF37]/60 hover:bg-white hover:shadow-xl hover:shadow-[#0B3D91]/10 sm:min-h-72 sm:p-7"
            >
              <span className="text-sm font-black tracking-[0.2em] text-[#D4AF37]">
                {number}
              </span>
              <div className="absolute right-6 top-6 size-2 rounded-full bg-[#0B3D91] transition duration-300 group-hover:scale-[8] group-hover:bg-[#0B3D91]/5" />
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="text-2xl font-bold text-[#0B3D91]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{description}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
