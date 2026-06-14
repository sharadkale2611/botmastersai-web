"use client";

interface Props {
  formData: {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function PersonalInformationForm({
  formData,
  setFormData,
}: Props) {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                fullName: e.target.value,
              }))
            }
            placeholder="Enter your full name"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            placeholder="example@gmail.com"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            id="mobile"
            value={formData.mobile}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                mobile: e.target.value,
              }))
            }
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            City <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                city: e.target.value,
              }))
            }
            placeholder="Enter your city"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Gender */}
        <div className="md:col-span-2">
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Gender
          </label>

          <div className="flex gap-6">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#0B3D91]/10 px-5 py-4 transition hover:border-[#D4AF37]">
              <input
                type="radio"
                checked={formData.gender === "Male"}
                onChange={() =>
                  setFormData((prev: any) => ({
                    ...prev,
                    gender: "Male",
                  }))
                }
                className="h-4 w-4 accent-[#0B3D91]"
              />

              <span className="font-medium text-slate-700">
                Male
              </span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#0B3D91]/10 px-5 py-4 transition hover:border-[#D4AF37]">
              <input
                type="radio"
                checked={formData.gender === "Female"}
                onChange={() =>
                  setFormData((prev: any) => ({
                    ...prev,
                    gender: "Female",
                  }))
                }
                className="h-4 w-4 accent-[#0B3D91]"
              />

              <span className="font-medium text-slate-700">
                Female
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}