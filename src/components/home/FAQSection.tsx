"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can join BotMasters AI?",
    answer:
      "Students, freshers, working professionals, and career switchers who want practical software development and AI project experience can join.",
  },
  {
    question: "Is prior experience required?",
    answer:
      "Prior experience is helpful but not required. The learning journey starts with skill assessment and a customized path based on your current level.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. The program focuses on project-based learning with enterprise-style applications, integrations, testing, and deployment workflows.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. Career support includes resume guidance, mock interviews, machine-test preparation, and portfolio-ready project experience.",
  },
  {
    question: "Do you teach AI integration?",
    answer:
      "Yes. You can learn AI chatbots, RAG applications, automation, third-party AI integrations, and Agentic AI workflows.",
  },
  {
    question: "Can professionals join?",
    answer:
      "Yes. Professionals can join to upskill in modern application development, cloud deployment, AI integration, and automation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F7F9FD] px-5 py-12 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute right-0 top-0 -z-10 size-96 rounded-full bg-[#0B3D91]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            FAQ
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-slate-600">
            Clear answers about internships, projects, AI learning, and career
            support at BotMasters AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={question}
                className="overflow-hidden rounded-3xl border border-[#0B3D91]/10 bg-white shadow-sm transition duration-300 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#0B3D91]/10"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-[#0B3D91]/[0.025]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-[#0B3D91] sm:text-lg">
                    {question}
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#0B3D91]/5 text-xl font-bold text-[#0B3D91] transition duration-300">
                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#D4AF37]" : ""
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#0B3D91]/10 px-6 py-5 leading-7 text-slate-600">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
