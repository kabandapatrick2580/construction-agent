"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const localeLabels: Record<string, string> = {
  en: "EN",
  fr: "FR",
  rw: "RW",
  ar: "AR",
};

const localeNames: Record<string, string> = {
  en: "English",
  fr: "Français",
  rw: "Kinyarwanda",
  ar: "العربية",
};

const locales = ["en", "fr", "rw", "ar"];

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Replace the locale segment in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setLangOpen(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { href: "#hero", label: t("home") },
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#process", label: t("process") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#093051] rounded flex items-center justify-center">
            <span className="text-white text-xs font-black font-headline">C</span>
          </div>
          <span className="text-xl font-black text-[#093051] font-headline tracking-tight">
            CSCA Ltd
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#093051] font-headline font-semibold text-sm tracking-tight hover:text-[#2BB1E4] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-semibold text-[#093051] border border-[#c3c6cf] rounded-lg px-3 py-1.5 hover:border-[#2BB1E4] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {localeLabels[locale]}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 bg-white border border-[#e2e2e2] rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]"
                >
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:bg-[#f3f3f3] transition-colors text-left ${
                        loc === locale ? "text-[#2BB1E4] font-semibold" : "text-[#1a1c1c]"
                      }`}
                    >
                      <span className="font-bold w-8">{localeLabels[loc]}</span>
                      <span className="text-[#43474e]">{localeNames[loc]}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="bg-[#093051] text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:bg-[#2BB1E4] transition-all duration-200 active:scale-95"
          >
            {t("getQuote")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#093051]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[#e2e2e2] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#093051] font-headline font-semibold py-2 hover:text-[#2BB1E4] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[#e2e2e2] pt-4">
                <p className="text-xs text-[#43474e] mb-2 font-semibold uppercase tracking-wider">Language</p>
                <div className="flex flex-wrap gap-2">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-bold border transition-colors ${
                        loc === locale
                          ? "bg-[#093051] text-white border-[#093051]"
                          : "border-[#c3c6cf] text-[#093051] hover:border-[#2BB1E4]"
                      }`}
                    >
                      {localeLabels[loc]}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#093051] text-white text-center px-6 py-3 rounded-lg font-headline font-bold hover:bg-[#2BB1E4] transition-all"
              >
                {t("getQuote")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
