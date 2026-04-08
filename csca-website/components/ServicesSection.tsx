"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MdLocationOn,
  MdGavel,
  MdHandshake,
  MdVerified,
  MdAnalytics,
  MdPayments,
  MdTaskAlt,
} from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const services = [
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
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 bg-[#f3f3f3] architectural-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
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
              <h3 className="text-2xl font-headline font-bold text-[#093051] mb-4">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-[#43474e] leading-relaxed mb-6">
                {t(`${service.key}.description`)}
              </p>
              <ul className="space-y-3">
                {(t.raw(`${service.key}.items`) as string[]).slice(0, 3).map((item: string) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#1a1c1c]">
                    <svg className="w-5 h-5 text-[#2BB1E4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Real Estate Detail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 py-12 border-t border-[#e2e2e2]"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmZvAsrCzC7Rq69Tasu7i5AWDSgpj_rjSduqXuoFb2iEoscIFq6yBVtCGvT1Z6Etwh502aBzMV0CWb7fwUu5_j6zHoM8rJUHvKmnEWwKa1r0xhCAix-OXZRjsTD0jmhJUvy3VMZFqUX09aMx8SZcgcJuQErPUCqF2L6LP8wOmscl6TwBw9Db6bJ6Ue7FiLldFgyh3D0DjAZH6tm-624QIeZtyB8v7qfq9NPriB-znByMkoSRN7F_wFaxXoJCv3MutlJN6cYBrvsT0"
              alt="Real estate building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#2BB1E4] p-6 rounded-xl text-white hidden md:block z-10">
              <div className="text-3xl font-black font-headline">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80 mt-1">Years Experience</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-[#2BB1E4]" />
            <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
              {t("realEstate.title")}
            </h2>
            <p className="text-[#43474e] leading-relaxed">
              Strategic property acquisition and management tailored for the Rwandan commercial landscape. Our team understands the nuances of the Kigali master plan, ensuring your investments are positioned for long-term growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MdLocationOn className="w-5 h-5" />, title: "Market Analysis", desc: "Data-driven insights for property valuation." },
                { icon: <MdGavel className="w-5 h-5" />, title: "Legal Compliance", desc: "Seamless transfer and title deed services." },
                { icon: <MdHandshake className="w-5 h-5" />, title: "Joint Ventures", desc: "Connecting land owners with developers." },
                { icon: <MdVerified className="w-5 h-5" />, title: "Quality Audit", desc: "Rigorous structural vetting of all listings." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-[#2BB1E4] shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-[#093051] text-sm">{item.title}</h4>
                    <p className="text-xs text-[#43474e] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Construction Detail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 border-t border-[#e2e2e2]"
        >
          <div className="order-2 lg:order-1 space-y-6">
            <div className="w-12 h-[2px] bg-[#2BB1E4]" />
            <h2 className="text-3xl font-headline font-extrabold text-[#093051]">
              {t("construction.title")}
            </h2>
            <p className="text-[#43474e] leading-relaxed">
              Complexity in construction starts with the supply chain. We eliminate bottlenecks by acting as your dedicated procurement office, managing everything from bulk cement to specialized electrical components.
            </p>
            <div className="space-y-3">
              {[
                { label: "Advanced Material Tracking", icon: <MdAnalytics className="w-5 h-5" /> },
                { label: "Bulk Procurement Pricing", icon: <MdPayments className="w-5 h-5" /> },
                { label: "Regulatory Certification", icon: <MdTaskAlt className="w-5 h-5" /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-5 rounded-xl border-l-4 border-[#2BB1E4] flex justify-between items-center shadow-sm hover:shadow-md transition-all group cursor-default"
                >
                  <span className="font-bold text-[#093051]">{item.label}</span>
                  <span className="text-[#2BB1E4] group-hover:translate-x-1 transition-transform duration-200">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-72 mt-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN6lBdMK49GgITv7vixwwwbhEIFMgJT3oauEjXZhUvb_CvbdbAk127OaiCgBkaVDnZ9OLKqRDPEe2nh0czQO_CCY3aalcOTfHz2ITicnqMuC-eqHh7EwrRDtVobidOvjvFx6kbA8zV4t6bNXz9ubN6JGSkASDyBrpNiMBXDNlOTbt0sqOHm8VBH4SZZMRz61Gr3hq9eoApWAP4FTNzfklnKpqaOO9RjhPvznUaPG4xu4Lg0AFRoPHaE_ciJIkGTIjgXn356m4q_Qnt"
                  alt="Construction worker"
                  width={300}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl bg-[#093051] p-6 flex flex-col justify-center text-white h-72">
                <div className="text-4xl font-black font-headline mb-2">200+</div>
                <div className="text-xs uppercase tracking-widest text-[#2BB1E4] font-bold">Projects Delivered</div>
                <div className="mt-4 text-sm text-slate-300 leading-relaxed">
                  Across real estate, construction, and vehicle services in Rwanda.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
