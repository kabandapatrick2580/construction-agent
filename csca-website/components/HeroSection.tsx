"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#093051] overflow-hidden"
    >
      {/* Architectural grid overlay */}
      <div className="absolute inset-0 architectural-grid opacity-30" />

      {/* Centered radial gradient — accent glow at core, fading to the dark bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(43,177,228,0.22)_0%,rgba(9,48,81,0.6)_55%,transparent_100%)]" />

      {/* Outer vignette to deepen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(6,30,52,0.85)_100%)]" />

      {/* Content — fully centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-40 flex flex-col items-center text-center space-y-10">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#2BB1E4]/20 border border-[#2BB1E4]/40 rounded-full px-4 py-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#2BB1E4] animate-pulse" />
          <span className="text-[#2BB1E4] text-sm font-semibold tracking-wide">Kigali, Rwanda</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-extrabold tracking-tight leading-[1.05] text-white"
        >
          {t("headline").split("Kigali")[0]}
          <span className="text-[#2BB1E4]"> Kigali</span>
          {t("headline").split("Kigali")[1]}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <a
            href="#contact"
            className="bg-[#2BB1E4] text-[#093051] px-10 py-4 rounded-xl font-headline font-bold text-base hover:bg-white hover:shadow-[0_0_32px_rgba(43,177,228,0.5)] transition-all duration-300 active:scale-95"
          >
            {t("cta_primary")}
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-headline font-bold text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            {t("cta_secondary")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-12 pt-6 border-t border-white/10 w-full max-w-lg"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "200+", label: "Projects Completed" },
            { value: "3", label: "Service Domains" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-headline font-black text-[#2BB1E4]">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
