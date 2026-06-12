import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#0B3D91]/10 bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <Image
          src="/logo_horizontal.png"
          alt="BotMasters AI"
          width={320}
          height={80}
          className="h-auto w-[220px] md:w-[280px] lg:w-[320px]"
        />
        <p className="text-sm leading-6 text-slate-500">
          © {new Date().getFullYear()} BotMasters AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
