import ApplyHero from "@/components/apply/ApplyHero";
import InternshipSelection from "@/components/apply/InternshipSelection";
import PersonalInformationForm from "@/components/apply/PersonalInformationForm";
import EducationInformationForm from "@/components/apply/EducationInformationForm";
import SkillsSection from "@/components/apply/SkillsSection";
import ResumeUpload from "@/components/apply/ResumeUpload";
import DeclarationSection from "@/components/apply/DeclarationSection";
import SubmitApplicationButton from "@/components/apply/SubmitApplicationButton";

export default function ApplyPage() {
  return (
    <main className="bg-[#F7F9FD]">
      <ApplyHero />

      <section className="px-5 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#0B3D91]/10 bg-white p-6 shadow-sm sm:p-10">

          <div className="space-y-10">

            <InternshipSelection />

            <PersonalInformationForm />

            <EducationInformationForm />

            <SkillsSection />

            <ResumeUpload />

            <DeclarationSection />

            <SubmitApplicationButton />

          </div>

        </div>
      </section>
    </main>
  );
}