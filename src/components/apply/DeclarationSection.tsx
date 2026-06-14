"use client";

interface Props {
  formData: {
    isInformationCorrect: boolean;
    isCommunicationAllowed: boolean;
    isPrivacyAccepted: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function DeclarationSection({
  formData,
  setFormData,
}: Props) {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Declaration
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Confirm Your Information
        </h2>

        <p className="mt-3 text-slate-600">
          Please review and confirm the following before submitting your
          application.
        </p>
      </div>

      <div className="space-y-5 rounded-3xl border border-[#0B3D91]/10 bg-[#F7F9FD] p-6">
        {/* Information Accuracy */}
        <label className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={formData.isInformationCorrect}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                isInformationCorrect: e.target.checked,
              }))
            }
            className="mt-1 h-5 w-5 rounded border-[#0B3D91]/20 text-[#0B3D91] focus:ring-[#D4AF37]"
          />

          <span className="text-slate-700">
            I confirm that all information provided in this application is
            true, complete, and accurate to the best of my knowledge.
          </span>
        </label>

        {/* Communication Consent */}
        <label className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={formData.isCommunicationAllowed}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                isCommunicationAllowed: e.target.checked,
              }))
            }
            className="mt-1 h-5 w-5 rounded border-[#0B3D91]/20 text-[#0B3D91] focus:ring-[#D4AF37]"
          />

          <span className="text-slate-700">
            I agree to receive communication regarding internship updates,
            interviews, and related opportunities from BotMasters AI.
          </span>
        </label>

        {/* Privacy Policy */}
        <label className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={formData.isPrivacyAccepted}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                isPrivacyAccepted: e.target.checked,
              }))
            }
            className="mt-1 h-5 w-5 rounded border-[#0B3D91]/20 text-[#0B3D91] focus:ring-[#D4AF37]"
          />

          <span className="text-slate-700">
            I have read and agree to the Privacy Policy and understand that my
            submitted information will be used solely for internship evaluation
            and communication purposes.
          </span>
        </label>
      </div>

      {/* Notice */}
      <div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
        <p className="text-sm leading-7 text-slate-600">
          <span className="font-semibold text-[#0B3D91]">Note:</span>{" "}
          Submission of this application does not guarantee selection.
          Shortlisted candidates will be contacted via email or phone for
          further evaluation.
        </p>
      </div>
    </section>
  );
}