"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaPlay, FaYoutube } from "react-icons/fa";

const youtubeIds = ["", "", ""];

function VideoCard({
  title,
  description,
  youtubeId,
  index,
  comingSoon,
  watchOnYoutube,
}: {
  title: string;
  description: string;
  youtubeId: string;
  index: number;
  comingSoon: string;
  watchOnYoutube: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Video embed / placeholder */}
      <div className="relative aspect-video bg-[#093051] overflow-hidden">
        {active && youtubeId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <div className="absolute inset-0 architectural-grid opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(43,177,228,0.15),transparent)]" />

            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
              <FaYoutube className="w-4 h-4 text-red-500" />
              <span className="text-white text-xs font-semibold">YouTube</span>
            </div>

            <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-[#2BB1E4]/20 border border-[#2BB1E4]/40 flex items-center justify-center">
              <span className="text-[#2BB1E4] text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <button
              onClick={() => setActive(true)}
              aria-label={`Play: ${title}`}
              className="absolute inset-0 flex items-center justify-center group/play"
            >
              <div className="w-16 h-16 rounded-full bg-[#2BB1E4] flex items-center justify-center shadow-[0_0_32px_rgba(43,177,228,0.5)] group-hover/play:scale-110 group-hover/play:bg-white transition-all duration-300">
                <FaPlay className="w-5 h-5 text-[#093051] ml-0.5" />
              </div>
            </button>

            {!youtubeId && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                {comingSoon}
              </div>
            )}
          </>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-headline font-bold text-[#093051] text-lg leading-snug group-hover:text-[#2BB1E4] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-[#43474e] leading-relaxed flex-1">{description}</p>
        <div className="pt-3 flex items-center gap-2 text-xs text-[#43474e]">
          <FaYoutube className="w-4 h-4 text-red-500 shrink-0" />
          <span>{watchOnYoutube}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  const tUi = useTranslations("ui");

  const videos = [
    { title: tUi("video1Title"), description: tUi("video1Desc") },
    { title: tUi("video2Title"), description: tUi("video2Desc") },
    { title: tUi("video3Title"), description: tUi("video3Desc") },
  ];

  return (
    <section id="videos" className="py-24 bg-white">
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
            {tUi("watchAndLearn")}
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-[#093051]">
            {tUi("ourWorkInAction")}
          </h2>
          <p className="mt-4 text-[#43474e] max-w-xl mx-auto leading-relaxed">
            {tUi("ourWorkBlurb")}
          </p>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-red-600 text-white px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:bg-red-700 transition-colors"
          >
            <FaYoutube className="w-5 h-5" />
            {tUi("visitYoutube")}
          </a>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <VideoCard
              key={i}
              title={video.title}
              description={video.description}
              youtubeId={youtubeIds[i]}
              index={i}
              comingSoon={tUi("comingSoon")}
              watchOnYoutube={tUi("watchOnYoutube")}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-[#43474e] mt-10 flex items-center justify-center gap-2"
        >
          <FaYoutube className="w-4 h-4 text-red-500" />
          {tUi("videosComingSoon")}
        </motion.p>
      </div>
    </section>
  );
}
