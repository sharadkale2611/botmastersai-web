"use client";

import {
  Bell,
  Search,
  UserCircle2,
  Menu,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface Props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdminHeader({ setSidebarOpen }: Props) {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await fetch("/api/admin-auth/logout", {
        method: "POST",
      });

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoggingOut(false);
      setShowMenu(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Left */}
        <button
          className="
    mr-4 rounded-xl p-2
    text-[#0B3D91]
    hover:bg-[#0B3D91]/5
    lg:hidden
  "
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#0B3D91]">Admin Panel</h1>

          {/* <p className="mt-1 text-sm text-slate-500">
            Manage enquiries, internships and website data
          </p> */}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 md:flex">
            <Search className="mr-3 h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Notifications */}
          <button
            className="
              relative flex h-12 w-12 items-center justify-center
              rounded-2xl bg-[#0B3D91]/5
              text-[#0B3D91]
              transition
              hover:bg-[#0B3D91]
              hover:text-white
            "
          >
            <Bell className="h-5 w-5" />

            <span
              className="
                absolute right-3 top-3
                h-2.5 w-2.5
                rounded-full
                bg-[#D4AF37]
              "
            />
          </button>

          {/* User */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="
      flex items-center gap-3
      rounded-2xl
      border border-slate-200
      bg-white
      px-4 py-2
      transition
      hover:border-[#0B3D91]/20
    "
            >
              <UserCircle2 className="h-10 w-10 text-[#0B3D91]" />

              <div className="hidden text-left sm:block">
                <div className="text-sm font-semibold text-slate-800">
                  Administrator
                </div>

                <div className="text-xs text-slate-500">Super Admin</div>
              </div>

              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            {showMenu && (
              <div
                className="
        absolute right-0 top-full mt-2
        w-56 overflow-hidden
        rounded-2xl border border-slate-200
        bg-white shadow-xl
      "
              >
                <div className="border-b border-slate-100 p-4">
                  <div className="font-semibold text-slate-800">
                    Administrator
                  </div>

                  <div className="text-sm text-slate-500">SuperAdmin</div>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="
          flex w-full items-center gap-3
          px-4 py-3
          text-left text-red-600
          transition
          hover:bg-red-50
        "
                >
                  <LogOut className="h-4 w-4" />

                  {loggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
