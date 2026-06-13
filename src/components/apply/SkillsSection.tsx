"use client";

export default function SkillsSection() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Skills & Experience
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Technical Background
        </h2>

        <p className="mt-3 text-slate-600">
          Help us understand your current skill set and experience level.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Experience Level */}
        <div>
          <label
            htmlFor="experienceLevel"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Experience Level
          </label>

          <select
            id="experienceLevel"
            name="experienceLevel"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Programming Languages */}
        <div>
          <label
            htmlFor="languages"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Programming Languages
          </label>

          <input
            type="text"
            id="languages"
            name="languages"
            placeholder="C#, JavaScript, Python..."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Frameworks */}
        <div>
          <label
            htmlFor="frameworks"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Frameworks & Libraries
          </label>

          <input
            type="text"
            id="frameworks"
            name="frameworks"
            placeholder=".NET Core, React, Angular, Node.js..."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Databases */}
        <div>
          <label
            htmlFor="databases"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Databases
          </label>

          <input
            type="text"
            id="databases"
            name="databases"
            placeholder="SQL Server, MongoDB, PostgreSQL..."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* GitHub */}
        <div>
          <label
            htmlFor="github"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            GitHub Profile
          </label>

          <input
            type="url"
            id="github"
            name="github"
            placeholder="https://github.com/username"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label
            htmlFor="linkedin"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            LinkedIn Profile
          </label>

          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Portfolio */}
        <div className="md:col-span-2">
          <label
            htmlFor="portfolio"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Portfolio Website
          </label>

          <input
            type="url"
            id="portfolio"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Previous Projects */}
        <div className="md:col-span-2">
          <label
            htmlFor="projects"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Previous Projects / Experience
          </label>

          <textarea
            id="projects"
            name="projects"
            rows={5}
            placeholder="Describe your projects, certifications, freelancing work, hackathons, or any previous experience..."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>
      </div>
    </section>
  );
}