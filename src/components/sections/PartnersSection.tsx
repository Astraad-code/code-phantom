"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { partners } from "@/data/site";

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#060606] border-y border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">

          {/* Label */}
          <div className="lg:w-56 flex-shrink-0">
            <SectionLabel className="mb-4">Nos partenaires</SectionLabel>
            <p className="text-xs text-[#444444] leading-relaxed mt-4">
              Nous distribuons les meilleures marques d&apos;éclairage architectural du marché,
              sélectionnées pour leur excellence technique et leur esthétique.
            </p>
          </div>

          {/* Partners grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111111]">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-[#060606] p-6 lg:p-8 hover:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(200,169,110,0.05) 0%, transparent 70%)" }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/0 group-hover:via-[#c8a96e]/30 to-transparent transition-all duration-500" />

                {/* Brand name as text (monochrome) */}
                <div className="mb-4">
                  <span className="text-lg font-light tracking-[0.1em] text-[#333333] group-hover:text-[#888888] transition-colors duration-300 uppercase">
                    {partner.name}
                  </span>
                </div>

                <div className="w-4 h-px bg-[#222222] group-hover:bg-[#c8a96e] group-hover:w-8 transition-all duration-400 mb-3" />

                <p className="text-[11px] text-[#333333] group-hover:text-[#555555] leading-relaxed transition-colors duration-300">
                  {partner.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
