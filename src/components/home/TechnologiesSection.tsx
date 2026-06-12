"use client";

import { useRef } from "react";
import { gsap, registerAnimationPlugins, useGSAP } from "@/lib/animations";
import {
  FaReact,
  FaPython,
  FaNode,
  FaDocker,
  FaAngular,
  FaCloud,
} from "react-icons/fa";
import {
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";

const technologies = [
  { name: ".NET Core", icon: SiDotnet },
  { name: "React", icon: FaReact },
  { name: "Angular", icon: FaAngular },
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNode },
  { name: "SQL Server", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "Azure", icon: FaCloud },
  { name: "OpenAI", icon: SiOpenai },
];

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerAnimationPlugins();

      const heading = "[data-technologies-heading]";
      const cards = gsap.utils.toArray<HTMLElement>("[data-technology-card]");

      gsap.from(heading, {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(cards, {
        autoAlpha: 0,
        y: 20,
        scale: 0.97,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        immediateRender: false,
        scrollTrigger: {
          trigger: "[data-technologies-grid]",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="technologies"
      className="relative bg-white px-5 py-12 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.07),transparent_65%)]" />
      <div className="mx-auto max-w-7xl">
        <div
          data-technologies-heading
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Our Technology Stack
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            Trusted technologies. Real-world results.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn and build with the tools modern engineering teams use to
            create scalable applications and intelligent products.
          </p>
        </div>

        <div
          data-technologies-grid
          className="mt-12 w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {technologies.map(({ name, icon: Icon }) => (
            <article
              data-technology-card
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-[#0B3D91]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#0B3D91]/10 sm:p-6"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0B3D91] to-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="grid size-12 place-items-center rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] ring-1 ring-[#0B3D91]/10 transition duration-300 group-hover:rotate-3 group-hover:bg-[#0B3D91] group-hover:text-[#D4AF37] group-hover:ring-[#D4AF37]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-bold text-slate-800 transition-colors group-hover:text-[#0B3D91]">
                {name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
