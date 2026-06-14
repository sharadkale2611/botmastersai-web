"use client";

interface Props {
  formData: {
    experienceLevel: string;
    previousExperience: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function SkillsSection({
  formData,
  setFormData,
}: Props) {
  return (
    <section>
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
            value={formData.experienceLevel}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                experienceLevel: e.target.value,
              }))
            }
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Previous Projects / Experience */}
        <div className="md:col-span-2">
          <label
            htmlFor="previousExperience"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Previous Projects / Experience
          </label>

          <textarea
            id="previousExperience"
            rows={5}
            value={formData.previousExperience}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                previousExperience: e.target.value,
              }))
            }
            placeholder="Describe your projects, certifications, freelancing work, hackathons, or any previous experience..."
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>
      </div>
    </section>
  );
}