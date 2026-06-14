"use client";

interface Props {
  formData: {
    collegeName: string;
    degree: string;
    passingYear: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function EducationInformationForm({
  formData,
  setFormData,
}: Props) {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2">
        {/* College Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="collegeName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            College / University Name{" "}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="collegeName"
            value={formData.collegeName}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                collegeName: e.target.value,
              }))
            }
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
            value={formData.degree}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                degree: e.target.value,
              }))
            }
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

        {/* Passing Year */}
        <div>
          <label
            htmlFor="passingYear"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Expected Passing Year{" "}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            id="passingYear"
            min="2020"
            max="2035"
            value={formData.passingYear}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                passingYear: e.target.value,
              }))
            }
            placeholder="2027"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>
      </div>
    </section>
  );
}