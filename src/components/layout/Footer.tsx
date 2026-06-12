import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#0B3D91]/10 bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Image
          src="/logo.png"
          alt="BotMasters AI"
          width={220}
          height={80}
          className="h-10 w-auto"
        />
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} BotMasters AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
