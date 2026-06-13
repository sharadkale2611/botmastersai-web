import InternshipCard from "./InternshipCard";
import { internships } from "./internships";

export default function InternshipsSection() {
  return (
    <section
      id="internships"
      className="bg-[#F7F9FD] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B59020]">
            Internship Programs
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B3D91] sm:text-5xl">
            Learn Through Real Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose the internship program that best fits your goals and
            experience level.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {internships.map((internship) => (
            <InternshipCard
              key={internship.title}
              {...internship}
            />
          ))}
        </div>
      </div>
    </section>
  );
}