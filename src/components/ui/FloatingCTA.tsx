"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 400) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) {
    return (
      <button
        onClick={() => setVisible(true)}
        aria-label="Contact rapide"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#c8a96e] hover:bg-[#e8c98e] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_4px_24px_rgba(200,169,110,0.3)]"
      >
        <MessageSquare size={18} className="text-[#050505]" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-72 bg-[#0a0a0a] border border-[#c8a96e]/30 shadow-[0_8px_40px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom-2 duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/50 to-transparent" />

      <div className="p-5">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-[#333333] hover:text-[#888888] transition-colors"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>

        <div className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] mb-2">Code Phantom</div>
        <p className="text-sm font-light text-[#f5f5f0] mb-1 pr-4">
          Votre projet d&apos;éclairage mérite une étude gratuite.
        </p>
        <p className="text-xs text-[#444444] mb-4">
          Réponse sous 24h · Sans engagement
        </p>

        <Link
          href="/contact"
          className="block w-full text-center bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.15em] uppercase py-3 font-medium transition-all duration-300"
        >
          Étude gratuite →
        </Link>
      </div>
    </div>
  );
}
