"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, registerAnimationPlugins, useGSAP } from "@/lib/animations";
import { Rocket, Building2, Bot, Users, Cloud, Target } from "lucide-react";
import {
  FaReact,
  FaDocker,
  FaGithub,
  FaPython,
  FaGitAlt,
  FaAndroid,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiDotnet,
  SiOpenai,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiMongodb,
  SiAngular,
  SiDocker,
} from "react-icons/si";

const techBadges = [
  { icon: FaReact, label: "React" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiAngular, label: "Angular" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: FaPython, label: "Python" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiOpenai, label: "OpenAI" },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiKubernetes, label: "Kubernetes" },
];

const features = [
  {
    icon: Rocket,
    text: "Project-Based Internships",
  },
  {
    icon: Building2,
    text: "Enterprise Applications",
  },
  {
    icon: Bot,
    text: "AI Solutions",
  },
  {
    icon: Users,
    text: "Team Collaboration",
  },
  {
    icon: Cloud,
    text: "Development to Deployment",
  },
  {
    icon: Target,
    text: "Career Acceleration",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerAnimationPlugins();

      const headingLines = gsap.utils.toArray<HTMLElement>(
        "[data-hero-heading-line]",
      );
      const buttons = gsap.utils.toArray<HTMLElement>("[data-hero-button]");
      const description = "[data-hero-description]";
      // const logoCard = "[data-hero-logo-card]";

      const heroCard = "[data-hero-card]";
      const techBadges = gsap.utils.toArray<HTMLElement>("[data-tech-badge]");

      gsap.set(
        [...headingLines, description, ...buttons, heroCard, ...techBadges],
        {
          autoAlpha: 0,
        },
      );

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: "power3.out",
        },
      });

      techBadges.forEach((badge) => {
        const section = sectionRef.current!;

        const width = section.offsetWidth;
        const height = section.offsetHeight;

        let x = Math.random() * width;
        let y = Math.random() * height;

        let angle = Math.random() * Math.PI * 2;

        const speed = 0.2 + Math.random() * 0.3;

        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;

        gsap.set(badge, { x, y });

        gsap.ticker.add(() => {
          x += vx;
          y += vy;

          vx *= 0.9995;
          vy *= 0.9995;

          if (x <= 0 || x >= width - 40) {
            angle += (Math.random() - 0.5) * Math.PI;

            const speed = 0.2 + Math.random() * 0.25;

            vx = Math.cos(angle) * speed;
          }

          if (y <= 0 || y >= height - 40) {
            angle += (Math.random() - 0.5) * Math.PI;

            const speed = 0.2 + Math.random() * 0.25;

            vy = Math.sin(angle) * speed;
          }

          gsap.set(badge, {
            x,
            y,
          });
        });
      });

      timeline
        .fromTo(
          headingLines,
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, stagger: 0.14 },
        )
        .fromTo(
          description,
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.45",
        )
        .fromTo(
          buttons,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.8 },
          "-=0.35",
        )
        .fromTo(
          heroCard,
          {
            autoAlpha: 0,
            x: 50,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.7",
        )
        .fromTo(
          techBadges,
          {
            autoAlpha: 0,
            y: 20,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.7,
          },
          "+=0.5",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#F7F9FD] px-5 pt-32 pb-15 sm:pt-36 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-20"
    >
      {/* Floating badges */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techBadges.map((badge, index) => {
          const Icon = badge.icon;

          return (
            <div
              key={badge.label}
              data-tech-badge
              style={{
                opacity: [0.08, 0.1, 0.12, 0.14, 0.16][index % 5],
              }}
              className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/40 text-[#0B3D91] shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]"
            >
              <Icon className="h-4 w-4 opacity-30" />
            </div>
          );
        })}
      </div>

      {/* Floating badges */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_10%_10%,rgba(11,61,145,0.15),transparent_32%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Learn. Build. Lead.
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-6xl lg:text-7xl">
            <span data-hero-heading-line className="block">
              Transform Skills into
            </span>
            <span data-hero-heading-line className="block">
              Real Industry Experience
            </span>
          </h1>
          <p
            data-hero-description
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 lg:mx-0"
          >
            Build enterprise-grade applications, AI-powered solutions, and
            modern software systems with industry-oriented mentorship and
            project-based internships.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              data-hero-button
              id="apply"
              href="/apply"
              className="rounded-full bg-[#0B3D91] px-7 py-3.5 text-center font-bold text-white shadow-xl shadow-[#0B3D91]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#092E6E]"
            >
              Apply For Internship
            </Link>
            <Link
              data-hero-button
              href="/assessment"
              className="rounded-full border border-[#D4AF37] bg-white px-7 py-3.5 text-center font-bold text-[#0B3D91] transition duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF37]/10"
            >
              Take Skill Assessment
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:block">
          {/* Main card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-[#D4AF37]/15 blur-[100px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-[#0B3D91]/10 blur-[120px]" />
              <div className="absolute h-[350px] w-[350px] rounded-full bg-[#D4AF37]/15 blur-[100px]" />
            </div>
          </div>
          <div
            data-hero-card
            className="relative z-10 mt-20 overflow-hidden rounded-[36px] border border-white/80 bg-white/90 backdrop-blur-[24px] shadow-[0_20px_80px_rgba(11,61,145,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(11,61,145,0.22)] p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/30 to-transparent pointer-events-none" />

            <div className="mb-6">
              <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#B59020]">
                Your AI Workforce
              </span>
            </div>

            <h3 className="mb-2 text-3xl font-bold text-[#0B3D91]">
              BotMasters AI
            </h3>

            <p className="mb-10 max-w-sm leading-7 text-slate-500">
              Building Future-Ready Developers and AI Solutions
            </p>
            <div className="mb-8 h-px bg-gradient-to-r from-[#D4AF37]/30 via-slate-200 to-transparent" />

            <div className="space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 shadow-sm">
                      <Icon className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <span className="font-medium text-slate-700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
