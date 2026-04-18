"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section id="process" className="py-24 bg-[#f3f3f3] architectural-grid">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#006687] font-headline font-bold tracking-widest text-sm uppercase">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-[#093051]">
            {t("title")}
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Animated connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2BB1E4]/40 to-transparent mx-16 origin-left"
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.13 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-[#c3c6cf] group-hover:border-[#2BB1E4] group-hover:bg-[#093051] transition-all duration-300 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-[0_8px_30px_rgba(43,177,228,0.25)]">
                  <span className="text-3xl font-black font-headline text-[#093051] group-hover:text-[#2BB1E4] transition-colors duration-300 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-[#093051] mb-3 text-base">{step.title}</h3>
                <p className="text-sm text-[#43474e] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 relative"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#093051] flex items-center justify-center text-white font-black font-headline text-xl shrink-0 z-10">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-[#093051] to-[#c3c6cf] my-2 min-h-[40px]" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-8 pt-1">
                <h3 className="font-headline font-bold text-[#093051] mb-2 text-base">{step.title}</h3>
                <p className="text-sm text-[#43474e] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
