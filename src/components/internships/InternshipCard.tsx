    import Link from "next/link";

type Props = {
  title: string;
  duration: string;
  fee: string;
  description: string;
  features: string[];
  icon: React.ElementType;
};

export default function InternshipCard({
  title,
  duration,
  fee,
  description,
  features,
  icon: Icon,
}: Props) {
  return (
    <article className="group rounded-3xl border border-[#0B3D91]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B3D91]/5 text-[#0B3D91]">
          <Icon className="h-7 w-7" />
        </div>

        <div className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-bold text-[#B59020]">
          {fee}
        </div>
      </div>

      <h3 className="mt-7 text-2xl font-bold text-[#0B3D91]">
        {title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-[#B59020]">
        Duration: {duration}
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

     <div className="mt-6 flex flex-wrap gap-2">
  {features.map((item) => (
    <span
      key={item}
      className="rounded-full bg-[#0B3D91]/5 px-3 py-1 text-sm font-medium text-[#0B3D91]"
    >
      {item}
    </span>
  ))}
</div>

      <Link
        href="#contact"
        className="mt-8 inline-flex rounded-full bg-[#0B3D91] px-6 py-3 font-semibold text-white transition hover:bg-[#092E6E]"
      >
        Apply Now
      </Link>
    </article>
  );
}