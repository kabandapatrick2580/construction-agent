"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus("success");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

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
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
          <p className="mt-4 text-[#43474e] max-w-xl mx-auto">{t("company")}</p>
          <p className="text-sm text-[#43474e]">{t("director")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#093051] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 architectural-grid opacity-10" />
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-xl font-headline font-bold mb-1">Get In Touch</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Ready to start your project? Reach out to us and our team will get back to you within 24 hours.
                  </p>
                </div>

                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2BB1E4]/20 flex items-center justify-center text-[#2BB1E4] shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
                        {info.label}
                      </div>
                      {info.values.map((v) => (
                        <div key={v} className="text-sm text-white">{v}</div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-3">Service Hours</p>
                  <p className="text-sm text-white">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-sm text-white">Saturday: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#f3f3f3] rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-[#093051] mb-2">Message Sent!</h3>
                <p className="text-[#43474e]">{t("form.success")}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 bg-[#093051] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2BB1E4] transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#f3f3f3] rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#093051] mb-1.5">
                      {t("form.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#c3c6cf] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2BB1E4] focus:ring-2 focus:ring-[#2BB1E4]/20 bg-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#093051] mb-1.5">
                      {t("form.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#c3c6cf] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2BB1E4] focus:ring-2 focus:ring-[#2BB1E4]/20 bg-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#093051] mb-1.5">
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-[#c3c6cf] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2BB1E4] focus:ring-2 focus:ring-[#2BB1E4]/20 bg-white transition-all"
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#093051] mb-1.5">
                      {t("form.service")}
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[#c3c6cf] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2BB1E4] focus:ring-2 focus:ring-[#2BB1E4]/20 bg-white transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="realEstate">{t("form.services.realEstate")}</option>
                      <option value="construction">{t("form.services.construction")}</option>
                      <option value="carRental">{t("form.services.carRental")}</option>
                      <option value="carLeasing">{t("form.services.carLeasing")}</option>
                      <option value="other">{t("form.services.other")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#093051] mb-1.5">
                    {t("form.message")} *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-[#c3c6cf] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2BB1E4] focus:ring-2 focus:ring-[#2BB1E4]/20 bg-white transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#093051] text-white py-4 rounded-xl font-headline font-bold text-base hover:bg-[#2BB1E4] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {t("form.submit")}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
