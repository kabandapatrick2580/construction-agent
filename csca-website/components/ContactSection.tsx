"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactSection() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t("phone"),
      values: ["+250 787 534 173", "+250 787 800 040"],
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t("email"),
      values: ["theogenentakirutimana04@gmail.com"],
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t("location"),
      values: [t("location_value")],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#006687] font-headline font-bold tracking-widest text-sm uppercase">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-[#093051]">
            {t("title")}
          </h2>
          <p className="mt-3 text-[#43474e]">{t("company")}</p>
          <p className="text-sm text-[#43474e]">{t("director")}</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#093051] via-[#0d3d63] to-[#006687]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(43,177,228,0.18),transparent)]" />
          <div className="absolute inset-0 architectural-grid opacity-10" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-14">
            {/* Top: intro */}
            <div className="mb-10">
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed max-w-lg">
                Ready to start your project? Reach out to us and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact rows */}
            <div className="flex flex-col divide-y divide-white/10 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-lg bg-[#2BB1E4]/20 border border-[#2BB1E4]/30 flex items-center justify-center text-[#2BB1E4] shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
                      {info.label}
                    </div>
                    {info.values.map((v) => (
                      <div key={v} className="text-sm text-white break-all">{v}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Hours */}
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Service Hours</p>
                <p className="text-sm text-white">Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p className="text-sm text-white">Saturday: 9:00 AM – 2:00 PM</p>
              </div>

              {/* CTA */}
              <a
                href={`mailto:theogenentakirutimana04@gmail.com`}
                className="inline-flex items-center gap-2 bg-[#2BB1E4] text-[#093051] px-7 py-3.5 rounded-xl font-headline font-bold text-sm hover:bg-white transition-colors duration-200 active:scale-95 shrink-0"
              >
                Send Us an Email
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
