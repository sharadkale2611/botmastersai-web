"use client";

export default function PersonalInformationForm() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Personal Information
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Tell Us About Yourself
        </h2>

        <p className="mt-3 text-slate-600">
          Please provide your personal details so we can contact you regarding
          your internship application.
        </p>
      </div>

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
            name="fullName"
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
            name="email"
            placeholder="example@gmail.com"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Mobile Number */}
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
            name="mobile"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dob"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Date of Birth
          </label>

          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Gender */}
        <div>
          <label
            htmlFor="gender"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Gender
          </label>

          <select
            id="gender"
            name="gender"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
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
            name="city"
            placeholder="Enter your city"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="state"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            State <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Country
          </label>

          <input
            type="text"
            id="country"
            name="country"
            defaultValue="India"
            className="w-full rounded-2xl border border-[#0B3D91]/10 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
          />
        </div>
      </div>
    </section>
  );
}