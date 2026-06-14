"use client";

import { useEffect, useState } from "react";
import {
  GraduationCap,
  Loader2,
  RefreshCcw,
} from "lucide-react";

interface InternshipApplication {
  Id: number;
  InternshipProgram: string;
  PreferredStack: string;
  FullName: string;
  Email: string;
  Mobile: string;
  City: string;
  Gender: string;
  CollegeName: string;
  Degree: string;
  PassingYear: number;
  ExperienceLevel: string;
  PreviousExperience: string;
  CreatedAt: string;
}

export default function AdminInternshipsPage() {
  const [applications, setApplications] = useState<
    InternshipApplication[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadApplications = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch("/api/internships");

      const result = await response.json();

      if (result.success) {
        setApplications(result.data);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Failed to load internship applications."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0B3D91]">
            Internship Applications
          </h1>

          <p className="mt-2 text-slate-500">
            Manage internship applications.
          </p>
        </div>

        <button
          onClick={loadApplications}
          className="
            inline-flex items-center gap-2
            rounded-2xl
            bg-[#0B3D91]
            px-5 py-3
            font-medium text-white
            transition
            hover:bg-[#082d6a]
          "
        >
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      {/* Error */}
      {errorMessage && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="rounded-3xl bg-white p-16 shadow-sm">
          <div className="flex items-center justify-center gap-3 text-[#0B3D91]">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading applications...</span>
          </div>
        </div>
      ) : applications.length === 0 ? (
        <div className="rounded-3xl bg-white p-16 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="h-14 w-14 text-slate-300" />

            <h3 className="mt-4 text-xl font-bold text-slate-700">
              No applications found
            </h3>

            <p className="mt-2 text-slate-500">
              New internship applications will appear here.
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Program
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Stack
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    College
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Degree
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Experience
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Applied On
                  </th>
                </tr>
              </thead>

              <tbody>
                {applications.map((item) => (
                  <tr
                    key={item.Id}
                    className="border-t border-slate-100"
                  >
                    <td className="px-6 py-5">
                      <div className="font-semibold text-slate-800">
                        {item.FullName}
                      </div>

                      <div className="mt-1 text-sm text-slate-500">
                        {item.City}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="text-sm text-slate-700">
                        {item.Email}
                      </div>

                      <div className="mt-1 text-sm text-slate-500">
                        {item.Mobile}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.InternshipProgram}
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.PreferredStack}
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.CollegeName}
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.Degree}
                    </td>

                    <td className="px-6 py-5 text-slate-700">
                      {item.ExperienceLevel}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {new Date(
                        item.CreatedAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}