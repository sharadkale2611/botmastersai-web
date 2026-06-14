"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  RefreshCcw,
  MessageSquare,
} from "lucide-react";

interface Enquiry {
  Id: number;
  FullName: string;
  Email: string;
  Mobile: string;
  Subject: string;
  Message: string;
  Status: string;
  CreatedAt: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch("/api/enquiries");

      const result = await response.json();

      if (result.success) {
        setEnquiries(result.data);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to load enquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Closed":
        return "bg-slate-100 text-slate-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0B3D91]">
            Enquiries
          </h1>

          <p className="mt-2 text-slate-500">
            Manage customer enquiries.
          </p>
        </div>

        <button
          onClick={loadEnquiries}
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

            <span>Loading enquiries...</span>
          </div>
        </div>
      ) : enquiries.length === 0 ? (
        <div className="rounded-3xl bg-white p-16 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <MessageSquare className="h-14 w-14 text-slate-300" />

            <h3 className="mt-4 text-xl font-bold text-slate-700">
              No enquiries found
            </h3>

            <p className="mt-2 text-slate-500">
              New enquiries will appear here.
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
                    Subject
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Message
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((item) => (
                  <tr
                    key={item.Id}
                    className="border-t border-slate-100"
                  >
                    <td className="px-6 py-5">
                      <div className="font-semibold text-slate-800">
                        {item.FullName}
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
                      {item.Subject}
                    </td>

                    <td className="max-w-xs px-6 py-5">
                      <div className="line-clamp-2 text-slate-600">
                        {item.Message}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusClass(
                          item.Status
                        )}`}
                      >
                        {item.Status}
                      </span>
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