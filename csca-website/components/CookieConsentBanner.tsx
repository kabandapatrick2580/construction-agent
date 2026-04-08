"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsentBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
        >
          <div className="bg-[#093051] text-white rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-8 h-8 rounded-lg bg-[#2BB1E4]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#2BB1E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{t("message")}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-slate-300"
              >
                {t("reject")}
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-bold bg-[#2BB1E4] text-[#093051] rounded-lg hover:bg-white transition-colors"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
