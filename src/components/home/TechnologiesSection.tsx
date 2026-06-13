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

// const technologies = [
//   { name: ".NET Core", icon: SiDotnet },
//   { name: "React", icon: FaReact },
//   { name: "Angular", icon: FaAngular },
//   { name: "Python", icon: FaPython },
//   { name: "Node.js", icon: FaNode },
//   { name: "SQL Server", icon: SiPostgresql },
//   { name: "MongoDB", icon: SiMongodb },
//   { name: "Docker", icon: FaDocker },
//   { name: "Azure", icon: FaCloud },
//   { name: "OpenAI", icon: SiOpenai },
// ];


const stacks = [
  {
    title: "Full Stack .NET + AI",
    description:
      "Enterprise-grade applications powered by AI and modern architecture.",
    tech: [SiDotnet, FaReact, SiOpenai],
    labels: [".NET Core", "MSSQL", "React", "OpenAI"],
    projects: ["CRM", "ERP", "LMS", "AI Agents"],
  },

  {
    title: "Full Stack Python + AI",
    description:
      "Intelligent automation and AI-powered software solutions.",
    tech: [FaPython, SiPostgresql, SiOpenai],
    labels: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    projects: ["ML APIs", "Computer Vision", "Automation"],
  },

  {
    title: "MERN Stack",
    description:
      "Modern JavaScript applications and SaaS platforms.",
    tech: [SiMongodb, FaNode, FaReact],
    labels: ["MongoDB", "Express", "React", "Node.js"],
    projects: ["Admin Panels", "E-Commerce", "SaaS"],
  },

  {
    title: "MEAN Stack",
    description:
      "Enterprise-grade Angular applications.",
    tech: [SiMongodb, FaAngular, FaNode],
    labels: ["MongoDB", "Express", "Angular", "Node.js"],
    projects: ["Portals", "Dashboards", "Internal Tools"],
  },

  {
    title: "Cloud Native Stack",
    description:
      "Containerized deployment and DevOps workflows.",
    tech: [FaDocker, FaCloud],
    labels: ["Docker", "Azure", "Linux", "GitHub"],
    projects: ["CI/CD", "Microservices", "Containers"],
  },

  {
    title: "Custom Stack Solutions",
    description:
      "Tailored architecture based on business requirements.",
    tech: [SiOpenai],
    labels: ["ERP", "CRM", "IoT", "AI Automation"],
    projects: ["Mobile Apps", "Enterprise Solutions"],
  },
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


        {/* <div
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
        </div> */}

<div
  data-technologies-grid
  className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
>
  {stacks.map((stack) => (
    <article
      key={stack.title}
      data-technology-card
      className="group relative overflow-hidden rounded-3xl border border-[#0B3D91]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#0B3D91]/10"
    >
      {/* top glow */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B3D91] via-[#D4AF37] to-[#0B3D91]" />

      {/* icons */}
      <div className="flex items-center gap-3">
        {stack.tech.map((Icon, i) => (
          <div
            key={i}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91] ring-1 ring-[#0B3D91]/10 transition duration-300 group-hover:bg-[#0B3D91] group-hover:text-[#D4AF37]"
          >
            <Icon className="h-6 w-6" />
          </div>
        ))}
      </div>

      {/* title */}
      <h3 className="mt-7 text-2xl font-bold text-[#0B3D91]">
        {stack.title}
      </h3>

      {/* description */}
      <p className="mt-3 leading-7 text-slate-600">
        {stack.description}
      </p>

      {/* technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.labels.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#0B3D91]/5 px-3 py-1 text-sm font-medium text-[#0B3D91]"
          >
            {item}
          </span>
        ))}
      </div>

      {/* projects */}
      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B59020]">
          Use Cases
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.projects.map((item) => (
            <span
              key={item}
              className="rounded-xl bg-[#D4AF37]/10 px-3 py-2 text-sm font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>


      </div>
    </section>
  );
}
