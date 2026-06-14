"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock3, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const initialFormData = {
    fullName: "",
    email: "",
    mobile: "",
    subject: "General Enquiry",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      setSuccessMessage("");
      setErrorMessage("");
      setErrors([]);

      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        setFormData(initialFormData);
      } else {
        setErrorMessage(result.message);
        setErrors(result.errors || []);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage("Something went wrong.");
      setErrors([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061A3A] via-[#0B3D91] to-[#123F87] px-5 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Contact Us
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            Let's Build Something Great
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100/80">
            Have a project idea, internship query, or need AI solutions? We'd
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-slate-50 px-5 pb-20 lg:px-8">
        <div className="relative mx-auto -mt-24 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Contact Details */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#0B3D91]/10">
              <h2 className="text-3xl font-bold text-[#0B3D91]">
                Get In Touch
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Reach out to us for software development, AI solutions,
                internships, training programs, or collaboration opportunities.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91]">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B3D91]">Phone</h3>

                    <p className="mt-1 text-slate-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B3D91]">Email</h3>

                    <p className="mt-1 text-slate-600">support@botmasters.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B3D91]">Address</h3>

                    <p className="mt-1 text-slate-600">
                      Pune, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91]">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B3D91]">Working Hours</h3>

                    <p className="mt-1 text-slate-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#0B3D91]/10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
                  Send Enquiry
                </p>

                <h2 className="mt-4 text-3xl font-bold text-[#0B3D91]">
                  We'd Love To Hear From You
                </h2>
              </div>
  {successMessage && (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                      <div className="font-semibold text-green-700">
                        {successMessage}
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                      <div className="font-semibold text-red-700">
                        {errorMessage}
                      </div>

                      {errors.length > 0 && (
                        <ul className="mt-3 list-disc pl-5 text-sm text-red-600 space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
              <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobile: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Subject
                    </label>

                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                    >
                      <option>General Enquiry</option>
                      <option>Internship</option>
                      <option>Training</option>
                      <option>Software Development</option>
                      <option>AI Solutions</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-[#0B3D91]/10 px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
    inline-flex items-center gap-3
    rounded-full
    bg-[#D4AF37]
    px-8 py-4
    font-bold
    text-[#092E6E]
    shadow-lg shadow-[#D4AF37]/20
    transition duration-200
    hover:-translate-y-1
    hover:bg-[#E2C15B]
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms & Conditions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
