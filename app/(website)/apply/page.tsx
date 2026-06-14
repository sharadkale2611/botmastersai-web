"use client";

import ApplyHero from "@/components/apply/ApplyHero";
import InternshipSelection from "@/components/apply/InternshipSelection";
import PersonalInformationForm from "@/components/apply/PersonalInformationForm";
import EducationInformationForm from "@/components/apply/EducationInformationForm";
import SkillsSection from "@/components/apply/SkillsSection";
import SubmitApplicationButton from "@/components/apply/SubmitApplicationButton";
import { useEffect, useState } from "react";

export default function ApplyPage() {
  const initialFormData = {
    internshipProgram: "",
    preferredStack: "",

    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "",

    collegeName: "",
    degree: "",
    passingYear: "",
    experienceLevel: "",

    previousExperience: "",

    isInformationCorrect: false,
    isCommunicationAllowed: false,
    isPrivacyAccepted: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (successMessage || errorMessage) {
      document.getElementById("application-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [successMessage, errorMessage]);

  return (
    <main className="bg-[#F7F9FD]" id="application-form">
      <ApplyHero />

      <section className="px-5 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#0B3D91]/10 bg-white p-6 shadow-sm sm:p-10">
          <div  className="space-y-10">
            {/* Success Message */}
            {successMessage && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="font-semibold text-green-700">
                  {successMessage}
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <div className="font-semibold text-red-700">{errorMessage}</div>

                {errors.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-sm text-red-600 space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <InternshipSelection
              formData={formData}
              setFormData={setFormData}
            />

            <PersonalInformationForm
              formData={formData}
              setFormData={setFormData}
            />

            <EducationInformationForm
              formData={formData}
              setFormData={setFormData}
            />

            <SkillsSection formData={formData} setFormData={setFormData} />

            <SubmitApplicationButton
              formData={formData}
              setFormData={setFormData}
              initialFormData={initialFormData}
              setSuccessMessage={setSuccessMessage}
              setErrorMessage={setErrorMessage}
              setErrors={setErrors}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
