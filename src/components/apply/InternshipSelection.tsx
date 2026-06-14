"use client";

interface Props {
  formData: {
    internshipProgram: string;
    preferredStack: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function InternshipSelection({
  formData,
  setFormData,
}: Props) {
  const internshipTypes = [
    "Project-Based Internship",
    "Academic Internship",
    "AI + Full Stack Internship",
    "Industry Experience Program",
  ];

  const stacks = [
    ".NET + React",
    "MERN Stack",
    "MEAN Stack",
    "Python Stack",
    "Custom Stack",
  ];

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Internship Details
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Select Your Internship Program
        </h2>

        <p className="mt-3 text-slate-600">
          Choose the internship program and technology stack that best aligns
          with your goals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Internship Program */}
        <div>
          <label
            htmlFor="internshipProgram"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Internship Program <span className="text-red-500">*</span>
          </label>

          <select
            id="internshipProgram"
            value={formData.internshipProgram}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                internshipProgram: e.target.value,
              }))
            }
            className="w-full rounded-2xl border border-[#0B3D91]/10 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Internship Program</option>

            {internshipTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Stack */}
        <div>
          <label
            htmlFor="preferredStack"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Preferred Stack <span className="text-red-500">*</span>
          </label>

          <select
            id="preferredStack"
            value={formData.preferredStack}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                preferredStack: e.target.value,
              }))
            }
            className="w-full rounded-2xl border border-[#0B3D91]/10 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Technology Stack</option>

            {stacks.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}