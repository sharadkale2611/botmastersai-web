import Link from "next/link";
import {
  MessageSquare,
  GraduationCap,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Enquiries",
    value: "0",
    icon: MessageSquare,
    href: "/admin/enquiries",
    color: "bg-blue-100 text-[#0B3D91]",
  },
  {
    title: "Internship Applications",
    value: "0",
    icon: GraduationCap,
    href: "/admin/internships",
    color: "bg-yellow-100 text-[#B59020]",
  },
  {
    title: "Students",
    value: "0",
    icon: Users,
    href: "/admin/students",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Courses",
    value: "0",
    icon: BookOpen,
    href: "/admin/courses",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section>
        <h1 className="text-3xl font-bold text-[#0B3D91]">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome to BotMasters AI Admin Panel.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                rounded-3xl border border-slate-200
                bg-white p-6 shadow-sm transition
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <div className="mt-3 text-4xl font-bold text-slate-800">
                    {item.value}
                  </div>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Quick Actions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B3D91]">
          Quick Actions
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            href="/admin/enquiries"
            className="
              flex items-center justify-between
              rounded-2xl bg-[#0B3D91]/5
              p-5 transition
              hover:bg-[#0B3D91]/10
            "
          >
            <div>
              <div className="font-bold text-[#0B3D91]">
                Manage Enquiries
              </div>

              <div className="mt-1 text-sm text-slate-500">
                View and respond to customer enquiries.
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-[#0B3D91]" />
          </Link>

          <Link
            href="/admin/internships"
            className="
              flex items-center justify-between
              rounded-2xl bg-[#D4AF37]/10
              p-5 transition
              hover:bg-[#D4AF37]/20
            "
          >
            <div>
              <div className="font-bold text-[#B59020]">
                Internship Applications
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Review internship applications.
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-[#B59020]" />
          </Link>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B3D91]">
          Recent Activity
        </h2>

        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="text-slate-500">
            No recent activity available.
          </p>
        </div>
      </section>
    </div>
  );
}