"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";

export default function SubmitApplicationButton() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // TODO: Call API here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Application submitted successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-[#0B3D91]/10 pt-10">


      <div className="flex flex-col items-center gap-6">
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="
            inline-flex items-center justify-center gap-3
            rounded-full
            bg-[#D4AF37]
            px-8 py-4
            font-bold
            text-[#092E6E]
            shadow-lg shadow-[#D4AF37]/20
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#E2C15B]
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Submit Application
            </>
          )}
        </button>

<p className="mt-4 text-sm text-slate-500">

</p>


        <p className="max-w-xl text-center text-sm leading-6 text-slate-500">
          By submitting this application,
  you agree to our{" "}
  <Link
    href="/privacy-policy"
    className="text-[#0B3D91] underline"
  >
    Privacy Policy
  </Link>{" "}
  and{" "}
  <Link
    href="/internship-terms"
    className="text-[#0B3D91] underline"
  >
    Internship Terms & Conditions
  </Link>. Additionally,          
           you acknowledge that BotMasters AI
          may contact you regarding internship opportunities and related
          communications.
        </p>
      </div>
    </section>
  );
}