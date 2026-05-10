"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#c8a96e]/3 via-transparent to-[#c8a96e]/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#c8a96e]/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e]">
              Votre projet
            </span>
            <div className="w-12 h-px bg-[#c8a96e]/40" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="text-[#f5f5f0]">Donnez vie à votre</span>
            <br />
            <span className="text-gradient-gold">vision lumineuse.</span>
          </h2>

          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mx-auto mb-10">
            Architectes, décorateurs, promoteurs, particuliers — parlons de votre projet.
            Une étude d&apos;éclairage gratuite pour comprendre vos besoins et vous proposer
            les meilleures solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase px-8 py-4 font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,110,0.3)]"
            >
              Obtenir une étude d&apos;éclairage
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-3 border border-[#2a2a2a] hover:border-[#c8a96e] text-[#888888] hover:text-[#c8a96e] text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300"
            >
              <Phone size={14} />
              Être rappelé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
