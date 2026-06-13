"use client";

export default function EducationInformationForm() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Educational Information
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Academic Details
        </h2>

        <p className="mt-3 text-slate-600">
          Tell us about your educational background and current academic status.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* College Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="collegeName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            College / University Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="collegeName"
            name="collegeName"
            placeholder="Enter your college or university name"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Degree */}
        <div>
          <label
            htmlFor="degree"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Degree <span className="text-red-500">*</span>
          </label>

          <select
            id="degree"
            name="degree"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Degree</option>
            <option>B.Tech</option>
            <option>BE</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>M.Tech</option>
            <option>B.Sc</option>
            <option>M.Sc</option>
            <option>Diploma</option>
            <option>Other</option>
          </select>
        </div>

        {/* Branch */}
        <div>
          <label
            htmlFor="branch"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Branch / Specialization <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="branch"
            name="branch"
            placeholder="Computer Science, IT, etc."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Current Year */}
        <div>
          <label
            htmlFor="currentYear"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Current Year / Semester <span className="text-red-500">*</span>
          </label>

          <select
            id="currentYear"
            name="currentYear"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Current Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
            <option>Final Year</option>
            <option>Passed Out</option>
          </select>
        </div>

        {/* Passing Year */}
        <div>
          <label
            htmlFor="passingYear"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Expected Passing Year <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            id="passingYear"
            name="passingYear"
            placeholder="2027"
            min="2020"
            max="2035"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* CGPA */}
        <div>
          <label
            htmlFor="cgpa"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            CGPA / Percentage
          </label>

          <input
            type="text"
            id="cgpa"
            name="cgpa"
            placeholder="8.5 CGPA or 78%"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Mode */}
        <div>
          <label
            htmlFor="mode"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Study Mode
          </label>

          <select
            id="mode"
            name="mode"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Mode</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Distance Learning</option>
          </select>
        </div>
      </div>
    </section>
  );
}