"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  GraduationCap,
  Users,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Enquiries",
    href: "/admin/enquiries",
    icon: MessageSquare,
  },
  {
    label: "Internships",
    href: "/admin/internships",
    icon: GraduationCap,
  },
  {
    label: "Students",
    href: "/admin/students",
    icon: Users,
  },
  {
    label: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={`
    fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
    border-r border-slate-200 bg-white
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
    >
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-6">
        <Link href="/admin" onClick={() => setSidebarOpen(false)}>
          <Image
            src="/logo_horizontal.png"
            alt="BotMasters AI"
            width={220}
            height={60}
            className="h-auto w-[180px]"
            priority
          />
        </Link>

        <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
        flex items-center gap-3 rounded-2xl px-4 py-3
        text-sm font-semibold transition
        ${
          active
            ? "bg-[#0B3D91] text-white shadow-lg shadow-[#0B3D91]/20"
            : "text-slate-600 hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]"
        }
      `}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <button
          className="
            flex w-full items-center gap-3 rounded-2xl
            px-4 py-3 text-sm font-semibold text-red-600
            transition hover:bg-red-50
          "
        >
          <LogOut className="h-5 w-5" />

          <span>Logout</span>
        </button>

        <div className="mt-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} BotMasters AI
        </div>
      </div>
    </aside>
  );
}
