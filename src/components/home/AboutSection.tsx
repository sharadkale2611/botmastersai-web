"use client";

import { useRef } from "react";
import { gsap, registerAnimationPlugins, useGSAP } from "@/lib/animations";

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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerAnimationPlugins();

      const leftContent = "[data-about-left]";
      const missionCard = "[data-about-mission]";
      const featureCards = gsap.utils.toArray<HTMLElement>(
        "[data-about-feature-card]",
      );

      gsap.from(leftContent, {
        autoAlpha: 0,
        x: -24,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: leftContent,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(missionCard, {
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: missionCard,
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(featureCards, {
        autoAlpha: 0,
        y: 18,
        scale: 0.98,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: {
          trigger: "[data-about-features]",
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
      id="about"
      className="relative bg-[#F7F9FD] px-5 py-12 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute right-0 top-0 -z-10 size-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div data-about-left>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            About BotMasters AI
          </p>
          <h2 className="mt-4 text-balance  font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-5xl">
            Building Future-Ready Developers
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              BotMasters AI empowers students, freshers, and professionals with practical software development experience through project-based internships and personalized mentorship.            </p>
            <p>
              Build enterprise applications and AI-powered solutions across CRM, ERP, LMS, E-Commerce, IoT, and intelligent automation using modern engineering practices.
            </p>
          </div>

          <div
            data-about-mission
            className="mt-8 rounded-2xl border border-[#D4AF37]/40 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B59020]">
              Our Mission
            </p>
            <p className="mt-3 font-semibold leading-7 text-[#0B3D91]">
              To empower developers with practical experience and help
              businesses leverage modern software and AI technologies.
            </p>
          </div>
        </div>

        <div data-about-features className="grid gap-4 sm:grid-cols-2">
          {features.map(({ number, title, description }) => (
            <article
              data-about-feature-card
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
