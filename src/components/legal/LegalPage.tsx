interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  children,
}: LegalPageProps) {
  return (
    <section className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061A3A] via-[#0B3D91] to-[#123F87] px-5 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Legal Information
          </p>

          <h1 className="mt-5 text-balance text-4xl font-bold sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100/80">
            Transparency and trust are important to us. Please review the
            following information regarding our policies and terms.
          </p>
        </div>
      </section>

      {/* Content Card */}
      <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-5 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#0B3D91]/10 md:p-12">
          <div className="prose prose-slate max-w-none prose-headings:text-[#0B3D91] prose-a:text-[#0B3D91] prose-strong:text-slate-800">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
