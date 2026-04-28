"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  MdDirectionsCar,
  MdAccessTime,
  MdBusinessCenter,
} from "react-icons/md";
import ServiceCarousel from "./ServiceCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ── Image sets per service ─────────────────────────────────────────────── */
const realEstateSlides = [
  {
    src: "/building_2_story.jpeg",
    alt: "Two-storey residential building — Kigali",
  },
  {
    src: "/cons_4.webp",
    alt: "House property for sale in Rwanda",
  }
];

const constructionSlides = [
  {
    src: "/cons_1.webp",
    alt: "Construction worker reviewing blueprints",
  },
  {
    src: "/cons_2.webp",
    alt: "Building under construction",
  },
  {
    src: "/cons_3.webp",
    alt: "Construction materials and supply chain",
  },
];

const vehicleSlides = [
  {
    src: "/sedan.webp",
    alt: "Sedan — available for rental in Kigali",
  },
  {
    src: "/SUV_shot_in_202604272250.webp",
    alt: "SUV — corporate and long-term leasing",
  },
];

const landMappingSlides = [
  {
    src: "/parcel.webp",
    alt: "Land parcel — property listing Rwanda",
  },
  {
    src: "/parcel_2.webp",
    alt: "Topographic site analysis Rwanda",
  },
];

/* ── Summary cards ──────────────────────────────────────────────────────── */
const serviceCards = [
  {
    key: "realEstate",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    key: "construction",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    key: "vehicle",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a2 2 0 002-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 16V9h4l3 5v2h-1" />
      </svg>
    ),
  },
  {
    key: "landMapping",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const t = useTranslations("services");
  const tUi = useTranslations("ui");

  return (
    <section id="services" className="py-24 bg-[#f3f3f3] architectural-grid">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[#006687] font-headline font-bold tracking-widest text-sm uppercase">
              {t("label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-[#093051]">
              {t("subtitle")}
            </h2>
          </div>
          <div className="h-[2px] bg-[#c3c6cf] w-24 mb-4 hidden md:block" />
        </motion.div>

        {/* ── Summary Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {serviceCards.map((service, i) => (
            <motion.div
              key={service.key}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-[#093051] text-white flex items-center justify-center rounded-xl mb-8 group-hover:bg-[#2BB1E4] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-headline font-bold text-[#093051] mb-3">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-sm text-[#43474e] leading-relaxed">
                {t(`${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Real Estate Detail ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 py-12 border-t border-[#e2e2e2]"
        >
          {/* Carousel */}
          <ServiceCarousel
            slides={realEstateSlides}
            interval={4000}
            badge={{ value: "15+", label: tUi("yearsExperience") }}
            aspectClass="h-[400px]"
          />

          {/* Text */}
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-[#2BB1E4]" />
            <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
              {t("realEstate.title")}
            </h2>
            <p className="text-[#43474e] leading-relaxed">{t("realEstate.description")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {(t.raw("realEstate.items") as string[]).map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#1a1c1c]">
                  <svg className="w-5 h-5 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#093051] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm hover:bg-[#2BB1E4] transition-colors duration-200"
            >
              {tUi("enquireProperties")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── Construction Detail ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 py-12 border-t border-[#e2e2e2]"
        >
          {/* Text — left on desktop */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="w-12 h-[2px] bg-[#2BB1E4]" />
            <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
              {t("construction.title")}
            </h2>
            <p className="text-[#43474e] leading-relaxed">{t("construction.description")}</p>
            <ul className="space-y-3">
              {(t.raw("construction.items") as string[]).map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#1a1c1c]">
                  <svg className="w-5 h-5 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#093051] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm hover:bg-[#2BB1E4] transition-colors duration-200"
            >
              {tUi("requestQuote")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Carousel — right on desktop */}
          <div className="order-1 lg:order-2">
            <ServiceCarousel
              slides={constructionSlides}
              interval={4500}
              badge={{ value: "200+", label: tUi("projectsDelivered") }}
              aspectClass="h-[400px]"
            />
          </div>
        </motion.div>

        {/* ── Vehicle / Car Rental & Leasing Detail ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-12 border-t border-[#e2e2e2]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Carousel */}
            <ServiceCarousel
              slides={vehicleSlides}
              interval={5000}
              aspectClass="h-[400px]"
            />

            {/* Text */}
            <div className="space-y-6">
              <div className="w-12 h-[2px] bg-[#2BB1E4]" />
              <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
                {t("vehicle.title")}
              </h2>
              <p className="text-[#43474e] leading-relaxed">{t("vehicle.description")}</p>

              {/* Rental & Leasing sub-sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Rental */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2e2] space-y-3">
                  <div className="flex items-center gap-2 text-[#093051] font-headline font-bold">
                    <MdDirectionsCar className="w-5 h-5 text-[#2BB1E4]" />
                    {t("vehicle.rental.title")}
                  </div>
                  <ul className="space-y-2">
                    {(t.raw("vehicle.rental.items") as string[]).map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#43474e]">
                        <svg className="w-4 h-4 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Leasing */}
                <div className="bg-[#093051] rounded-2xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-white font-headline font-bold">
                    <MdAccessTime className="w-5 h-5 text-[#2BB1E4]" />
                    {t("vehicle.leasing.title")}
                  </div>
                  <ul className="space-y-2">
                    {(t.raw("vehicle.leasing.items") as string[]).map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <svg className="w-4 h-4 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fleet badge row */}
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { icon: <MdDirectionsCar className="w-4 h-4" />, label: tUi("shortTermRental") },
                  { icon: <MdAccessTime className="w-4 h-4" />, label: tUi("longTermLeasing") },
                  { icon: <MdBusinessCenter className="w-4 h-4" />, label: tUi("corporateFleet") },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 bg-[#2BB1E4]/10 border border-[#2BB1E4]/30 text-[#093051] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    <span className="text-[#2BB1E4]">{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#093051] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm hover:bg-[#2BB1E4] transition-colors duration-200"
              >
                {tUi("bookVehicle")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Land Mapping Detail ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 border-t border-[#e2e2e2]"
        >
          {/* Text — left on desktop */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="w-12 h-[2px] bg-[#2BB1E4]" />
            <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
              {t("landMapping.title")}
            </h2>
            <p className="text-[#43474e] leading-relaxed">{t("landMapping.description")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {(t.raw("landMapping.items") as string[]).map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#1a1c1c]">
                  <svg className="w-5 h-5 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#093051] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm hover:bg-[#2BB1E4] transition-colors duration-200"
            >
              {tUi("enquireLandMapping")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Carousel — right on desktop */}
          <div className="order-1 lg:order-2">
            <ServiceCarousel
              slides={landMappingSlides}
              interval={4800}
              badge={{ value: "100+", label: tUi("projectsCompleted") }}
              aspectClass="h-[400px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
