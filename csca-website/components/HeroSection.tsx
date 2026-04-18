"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animated count-up ───────────────────────────────────────────────────── */
function CountUp({
  end,
  suffix = "",
  startDelay = 1500,
}: {
  end: number;
  suffix?: string;
  startDelay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1800;
      let startTime: number | null = null;
      const tick = (ts: number) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.floor(eased * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [end, startDelay]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const t = useTranslations("hero");
  const tUi = useTranslations("ui");
  const tSvc = useTranslations("services");

  const words = t("headline").split(" ");

  const stats = [
    { end: 15, suffix: "+", label: tUi("yearsExperience") },
    { end: 200, suffix: "+", label: tUi("projectsCompleted") },
    { end: 3, suffix: "", label: tUi("serviceDomains") },
  ];

  const chips = [
    { label: tSvc("realEstate.title"), side: "left", top: "top-[36%]", delay: 1.7 },
    { label: tSvc("construction.title"), side: "left", top: "top-[50%]", delay: 1.9 },
    { label: tSvc("vehicle.title"), side: "right", top: "top-[42%]", delay: 2.1 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#093051] overflow-hidden"
    >
      {/* ── 1. Background image ──────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── 2. Directional darkening overlays ────────────────────────────── */}
      {/* Top + bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#093051]/80 via-[#093051]/45 to-[#093051]/90 pointer-events-none" />
      {/* Left + right darkening */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#093051]/65 via-transparent to-[#093051]/65 pointer-events-none" />
      {/* Centre accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_48%_at_50%_52%,rgba(43,177,228,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* ── 3. Dot grid ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 architectural-grid opacity-[0.18] pointer-events-none" />

      {/* ── 4. Floating orbs ─────────────────────────────────────────────── */}
      <div className="animate-float-a pointer-events-none absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full bg-[#2BB1E4] opacity-[0.06] blur-[130px]" />
      <div className="animate-float-b pointer-events-none absolute -bottom-48 -right-48 w-[560px] h-[560px] rounded-full bg-[#2BB1E4] opacity-[0.06] blur-[110px]" />
      <div className="animate-float-c pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[280px] rounded-full bg-[#2BB1E4] opacity-[0.04] blur-[150px]" />

      {/* ── 5. Vertical hairlines ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-y-0 left-[13%] w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-[16%] w-px bg-gradient-to-b from-transparent via-[#2BB1E4]/[0.12] to-transparent" />

      {/* ── 6. Corner bracket decorations ────────────────────────────────── */}
      <div className="pointer-events-none absolute top-7 left-7 w-14 h-14 border-l border-t border-[#2BB1E4]/50" />
      <div className="pointer-events-none absolute top-7 right-7 w-14 h-14 border-r border-t border-[#2BB1E4]/50" />
      <div className="pointer-events-none absolute bottom-[72px] left-7 w-14 h-14 border-l border-b border-[#2BB1E4]/25" />
      <div className="pointer-events-none absolute bottom-[72px] right-7 w-14 h-14 border-r border-b border-[#2BB1E4]/25" />

      {/* ── 7. Floating service chips (xl only) ──────────────────────────── */}
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, x: chip.side === "left" ? -28 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: chip.delay, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-none absolute ${chip.top} ${
            chip.side === "left" ? "left-[4%]" : "right-[4%]"
          } hidden xl:flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2BB1E4] shrink-0" />
          <span className="text-white/60 text-xs font-semibold tracking-wide whitespace-nowrap">
            {chip.label}
          </span>
        </motion.div>
      ))}

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-36 flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 bg-[#2BB1E4]/10 border border-[#2BB1E4]/30 rounded-full px-5 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2BB1E4] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2BB1E4]" />
          </span>
          <span className="text-[#2BB1E4] text-sm font-semibold tracking-wider">
            Kigali, Rwanda
          </span>
        </motion.div>

        {/* Headline — word-by-word blur reveal */}
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-headline font-extrabold tracking-tight leading-[1.04] text-white max-w-4xl [text-shadow:0_0_80px_rgba(43,177,228,0.18)]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.2em] last:mr-0"
              initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.58,
                delay: 0.22 + i * 0.044,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.05, ease: "easeOut" }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-[#2BB1E4] to-transparent"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.95 }}
          className="text-lg md:text-xl text-slate-300/80 max-w-2xl leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Primary — shimmer + pulsing ring */}
          <div className="relative">
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-xl border border-[#2BB1E4]/70 pointer-events-none"
            />
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#2BB1E4] text-[#093051] px-10 py-4 rounded-xl font-headline font-bold text-base transition-all duration-300 active:scale-95 hover:shadow-[0_0_56px_rgba(43,177,228,0.55)] hover:bg-[#48c4f0] flex items-center gap-2"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-12deg]" />
              <span className="relative">{t("cta_primary")}</span>
            </a>
          </div>

          {/* Secondary */}
          <a
            href="#about"
            className="group border border-white/22 text-white/80 px-10 py-4 rounded-xl font-headline font-bold text-base hover:border-[#2BB1E4]/55 hover:bg-[#2BB1E4]/10 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            {t("cta_secondary")}
            <svg
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap justify-center w-full max-w-sm pt-8 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex-1 text-center px-5 relative min-w-[80px]">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/12" />
              )}
              <div className="text-4xl md:text-5xl font-headline font-black text-[#2BB1E4] tabular-nums leading-none">
                <CountUp end={stat.end} suffix={stat.suffix} startDelay={1500 + i * 130} />
              </div>
              <div className="text-[10px] text-slate-400/90 uppercase tracking-[0.18em] mt-2 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.22em] mb-1">
          {tUi("scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
