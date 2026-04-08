"use client";

import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#093051] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2BB1E4] rounded flex items-center justify-center">
                <span className="text-[#093051] text-xs font-black font-headline">C</span>
              </div>
              <span className="text-xl font-black font-headline tracking-tight">CSCA Ltd</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{t("tagline")}</p>
            <div className="flex gap-3">
              {[
                { icon: <FaWhatsapp className="w-4 h-4" />, label: "WhatsApp" },
                { icon: <FaLinkedinIn className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <FaFacebookF className="w-4 h-4" />, label: "Facebook" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2BB1E4] hover:text-[#093051] hover:border-[#2BB1E4] transition-all cursor-default"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-bold mb-6 text-sm uppercase tracking-widest text-[#2BB1E4]">
              {t("links.title")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline font-bold mb-6 text-sm uppercase tracking-widest text-[#2BB1E4]">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div>+250 787 534 173</div>
                  <div>+250 787 800 040</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>theogenentakirutimana04@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {year} Construction Supply and Commission Agent Ltd. {t("rights")}
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <span className="hover:text-white cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
