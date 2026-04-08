"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Real Estate Services in Kigali",
    description: "Discover how CSCA Ltd helps clients find and acquire the right properties across Rwanda.",
    youtubeId: "", // Replace with actual YouTube video ID
    thumbnail: null,
  },
  {
    id: 2,
    title: "Construction Supply & Project Support",
    description: "See how we source premium building materials and coordinate construction projects.",
    youtubeId: "",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Car Rental & Leasing Solutions",
    description: "Explore our flexible vehicle rental and long-term leasing packages for businesses.",
    youtubeId: "",
    thumbnail: null,
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
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
        {active && video.youtubeId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Placeholder background */}
            <div className="absolute inset-0 architectural-grid opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(43,177,228,0.15),transparent)]" />

            {/* YouTube watermark */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
              <FaYoutube className="w-4 h-4 text-red-500" />
              <span className="text-white text-xs font-semibold">YouTube</span>
            </div>

            {/* Video number */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-[#2BB1E4]/20 border border-[#2BB1E4]/40 flex items-center justify-center">
              <span className="text-[#2BB1E4] text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
            </div>

            {/* Play button */}
            <button
              onClick={() => setActive(true)}
              aria-label={`Play: ${video.title}`}
              className="absolute inset-0 flex items-center justify-center group/play"
            >
              <div className="w-16 h-16 rounded-full bg-[#2BB1E4] flex items-center justify-center shadow-[0_0_32px_rgba(43,177,228,0.5)] group-hover/play:scale-110 group-hover/play:bg-white transition-all duration-300">
                <FaPlay className="w-5 h-5 text-[#093051] ml-0.5" />
              </div>
            </button>

            {/* Coming soon badge if no youtubeId */}
            {!video.youtubeId && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                Coming Soon
              </div>
            )}
          </>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-headline font-bold text-[#093051] text-lg leading-snug group-hover:text-[#2BB1E4] transition-colors duration-200">
          {video.title}
        </h3>
        <p className="text-sm text-[#43474e] leading-relaxed flex-1">{video.description}</p>
        <div className="pt-3 flex items-center gap-2 text-xs text-[#43474e]">
          <FaYoutube className="w-4 h-4 text-red-500 shrink-0" />
          <span>Watch on YouTube</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
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
            Watch & Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-[#093051]">
            Our Work in Action
          </h2>
          <p className="mt-4 text-[#43474e] max-w-xl mx-auto leading-relaxed">
            See how CSCA Ltd delivers real estate, construction, and vehicle services across Rwanda.
          </p>

          {/* YouTube channel link placeholder */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-red-600 text-white px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:bg-red-700 transition-colors"
          >
            <FaYoutube className="w-5 h-5" />
            Visit Our YouTube Channel
          </a>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
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
          Videos will be available once our YouTube channel is published.
        </motion.p>
      </div>
    </section>
  );
}
