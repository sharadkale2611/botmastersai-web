import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  LiaGithub,
  LiaInstagram,
  LiaLinkedin,
} from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="border-t border-[#0B3D91]/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div>
            <Image
              src="/logo_horizontal.png"
              alt="BotMasters AI"
              width={320}
              height={80}
              className="h-auto w-[220px]"
            />

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Building future-ready developers and AI-powered solutions through
              practical learning and real-world projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#0B3D91]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/#home" className="hover:text-[#0B3D91]">
                Home
              </Link>

              <Link href="/#technologies" className="hover:text-[#0B3D91]">
                Technologies
              </Link>

              <Link href="/#services" className="hover:text-[#0B3D91]">
                Services
              </Link>

              <Link href="/#internships" className="hover:text-[#0B3D91]">
                Internships
              </Link>

              <Link href="/#ai-solutions" className="hover:text-[#0B3D91]">
                AI Solutions
              </Link>

              <Link href="/#projects" className="hover:text-[#0B3D91]">
                Projects
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-[#0B3D91]">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href="/privacy-policy"
                className="hover:text-[#0B3D91]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-[#0B3D91]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/refund-policy"
                className="hover:text-[#0B3D91]"
              >
                Refund Policy
              </Link>

              <Link
                href="/internship-terms"
                className="hover:text-[#0B3D91]"
              >
                Internship Terms
              </Link>

              <Link
                href="/cookie-policy"
                className="hover:text-[#0B3D91]"
              >
                Cookie Policy
              </Link>

              <Link
                href="/disclaimer"
                className="hover:text-[#0B3D91]"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#0B3D91]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#D4AF37]" />

                <span>
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#D4AF37]" />

                <span>
                  support@botmasters.in
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#D4AF37]" />

                <span>
                  Pune, Maharashtra,
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-[#0B3D91]">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] transition hover:bg-[#0B3D91] hover:text-[#D4AF37]"
              >
                <LiaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] transition hover:bg-[#0B3D91] hover:text-[#D4AF37]"
              >
                <LiaGithub className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] transition hover:bg-[#0B3D91] hover:text-[#D4AF37]"
              >
                <LiaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#0B3D91]/10 pt-8 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Botmaster. All rights reserved.
          </p>

          <p>
            Proprietorship Business • Established 2018
          </p>
        </div>
      </div>
    </footer>
  );
}
