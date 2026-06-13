"use client";

import { Upload, FileText, Image as ImageIcon } from "lucide-react";

export default function ResumeUpload() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
          Documents
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0B3D91]">
          Upload Your Documents
        </h2>

        <p className="mt-3 text-slate-600">
          Please upload your latest resume and an optional profile photograph.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Resume Upload */}
        <div>
          <label
            htmlFor="resume"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Resume (PDF) <span className="text-red-500">*</span>
          </label>

          <label
            htmlFor="resume"
            className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#0B3D91]/15 bg-[#F7F9FD] p-8 transition hover:border-[#D4AF37]"
          >
            <FileText className="h-10 w-10 text-[#0B3D91]" />

            <p className="mt-4 text-center font-medium text-slate-700">
              Click to upload your resume
            </p>

            <p className="mt-2 text-sm text-slate-500">
              PDF format • Max size 5 MB
            </p>

            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf"
              className="hidden"
            />
          </label>
        </div>

        {/* Profile Photo Upload */}
        <div>
          <label
            htmlFor="photo"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Profile Photo <span className="text-slate-400">(Optional)</span>
          </label>

          <label
            htmlFor="photo"
            className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#0B3D91]/15 bg-[#F7F9FD] p-8 transition hover:border-[#D4AF37]"
          >
            <ImageIcon className="h-10 w-10 text-[#0B3D91]" />

            <p className="mt-4 text-center font-medium text-slate-700">
              Upload your photo
            </p>

            <p className="mt-2 text-sm text-slate-500">
              JPG, PNG • Max size 2 MB
            </p>

            <input
              id="photo"
              name="photo"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
        <div className="flex items-start gap-3">
          <Upload className="mt-0.5 h-5 w-5 text-[#B59020]" />

          <div>
            <p className="font-semibold text-[#0B3D91]">
              Document Guidelines
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Upload an updated resume in PDF format.</li>
              <li>Ensure your contact information is clearly visible.</li>
              <li>Profile photo is optional.</li>
              <li>Maximum file size should not exceed the specified limits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}