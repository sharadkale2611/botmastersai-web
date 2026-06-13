'use client';

import {
  FiUsers,
  FiLayers,
  FiBookOpen,
  FiAward,
  FiShoppingCart,
  FiCpu,
  FiPackage,
  FiHeart,
  FiClipboard,
  FiTruck,
  FiCalendar,
  FiAperture,
} from "react-icons/fi";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const domains = [
  { name: "CRM", icon: FiUsers },
  { name: "ERP", icon: FiLayers },
  { name: "LMS", icon: FiBookOpen },
  { name: "HRMS", icon: FiAward },
  { name: "E-Commerce", icon: FiShoppingCart },
  { name: "IoT", icon: FiCpu },
  { name: "Inventory Management", icon: FiPackage },
  { name: "Hospital Management", icon: FiHeart },
  { name: "School Management", icon: FiClipboard },
  { name: "Transport Management", icon: FiTruck },
  { name: "Attendance Systems", icon: FiCalendar },
  { name: "AI Applications", icon: FiAperture },
];

export default function DomainsSection() {

const [startIndex, setStartIndex] = useState(0);


const visibleCards =
  typeof window !== "undefined" && window.innerWidth < 640
    ? 1
    : typeof window !== "undefined" && window.innerWidth < 1024
      ? 2
      : 3;

const next = () => {
  setStartIndex((prev) =>
    prev + visibleCards >= domains.length ? 0 : prev + visibleCards
  );
};

const prev = () => {
  setStartIndex((prev) =>
    prev === 0
      ? Math.max(domains.length - visibleCards, 0)
      : prev - visibleCards
  );
};

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F7F9FD] px-5 py-12 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-[radial-gradient(circle_at_bottom,rgba(11,61,145,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Build Across Industries
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            Project Domains
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-slate-600">
            Gain practical experience by developing solutions for real business
            domains and modern technology use cases.
          </p>
        </div>

<div className="relative mt-16 overflow-hidden">
  <div className="flex gap-6 animate-domains-scroll w-max">
    {[...domains, ...domains].map(({ name, icon: Icon }, index) => (
      <article
        key={`${name}-${index}`}
className="
group
w-[280px]
sm:w-[320px]
lg:w-[360px]
flex-shrink-0
overflow-hidden
rounded-3xl
border
border-[#0B3D91]/10
bg-white
p-8
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:border-[#D4AF37]/70
hover:shadow-xl
hover:shadow-[#0B3D91]/10
"      >
        <div className="flex items-center gap-5">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B3D91] text-[#D4AF37]">
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B59020]">
              Domain
            </div>

            <h3 className="mt-2 text-2xl font-bold text-[#0B3D91]">
              {name}
            </h3>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="leading-7 text-slate-600">
            Build real-world applications and gain practical experience through
            project-based development.
          </p>
        </div>
      </article>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
