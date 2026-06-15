"use client";

import { useState } from "react";
import { Loader2, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setErrorMessage("");
      setErrors([]);

      const response = await fetch("/api/admin-auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

const text = await response.text();

console.log(text);

const result = JSON.parse(text);


      if (result.success) {
        router.replace("/admin");
        router.refresh();
      } else {
        setErrorMessage(result.message);
        setErrors(result.errors || []);
      }
    } catch (error) {
      console.error(error);

      setErrorMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B3D91]">
            Admin Login
          </h1>

          <p className="mt-3 text-slate-500">
            Sign in to BotMasters AI Admin Panel
          </p>
        </div>

        {errorMessage && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4">
            <div className="font-medium text-red-700">
              {errorMessage}
            </div>

            {errors.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-sm text-red-600">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="
              flex w-full items-center justify-center gap-3
              rounded-2xl
              bg-[#0B3D91]
              py-4
              font-bold
              text-white
              transition
              hover:bg-[#082d6a]
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Signing In...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}