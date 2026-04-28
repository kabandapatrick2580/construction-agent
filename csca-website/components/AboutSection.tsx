"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutSection() {
  const t = useTranslations("about");
  const tWhy = useTranslations("why");
  const tUi = useTranslations("ui");

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-[#093051] rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 architectural-grid opacity-20" />
              <div className="relative z-10">
                <div className="text-6xl font-black font-headline text-[#2BB1E4] mb-2">CSCA</div>
                <div className="text-lg font-headline font-semibold mb-6 text-slate-300">
                  Construction Supply &<br />Commission Agent Ltd
                </div>
                <div className="border-t border-white/20 pt-6 grid grid-cols-3 gap-4 text-center">
                  {[
                    { v: "5+", l: tUi("years") },
                    { v: "100+", l: tUi("projects") },
                    { v: "3", l: tUi("domains") },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl font-black text-[#2BB1E4] font-headline">{s.v}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#2BB1E4] text-[#093051] rounded-xl p-5 shadow-xl">
              <div className="text-2xl font-black font-headline">Kigali</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1">{tUi("rwandaBased")}</div>
            </div>

            {/* Accent dot grid */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#093051]" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#006687] font-headline font-bold tracking-widest text-sm uppercase">
                {tUi("whoWeAre")}
              </span>
              <h2 className="text-4xl font-headline font-extrabold text-[#093051] mt-3 leading-tight">
                {t("title")}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#43474e] leading-relaxed">{t("content")}</p>
              <p className="text-[#43474e] leading-relaxed">{t("content2")}</p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#f3f3f3] rounded-2xl p-6 space-y-3">
              <h3 className="font-headline font-bold text-[#093051] text-lg mb-4">
                {tWhy("title")}
              </h3>
              {(tWhy.raw("items") as string[]).map((item: string) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2BB1E4]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2BB1E4]" />
                  </div>
                  <span className="text-sm text-[#1a1c1c] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#093051] flex items-center justify-center text-white font-black font-headline text-lg">
                N
              </div>
              <div>
                <div className="font-bold text-[#093051] font-headline">NTAKIRUTIMANA Theogene</div>
                <div className="text-sm text-[#43474e]">{tUi("managingDirector")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
