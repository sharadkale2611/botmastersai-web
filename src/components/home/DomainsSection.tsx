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

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {domains.map(({ name, icon: Icon }, index) => (
            <article
              key={name}
              className="group relative min-h-40 overflow-hidden rounded-3xl border border-[#0B3D91]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-xl hover:shadow-[#0B3D91]/10 sm:min-h-44 sm:p-6"
            >
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#0B3D91]/5 transition-transform duration-500 group-hover:scale-150 group-hover:bg-[#D4AF37]/10" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid min-h-11 min-w-11 place-items-center rounded-xl bg-[#0B3D91] text-[#D4AF37] transition-transform duration-300 group-hover:rotate-6">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[#0B3D91]/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-bold leading-6 text-[#0B3D91]">
                  {name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
