"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-24 lg:py-40 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060606]" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=60&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          y,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel className="mb-8">Notre philosophie</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8">
                <span className="text-[#f5f5f0]">La lumière n&apos;est pas</span>
                <br />
                <span className="text-gradient-gold">un détail.</span>
                <br />
                <span className="text-[#f5f5f0]">C&apos;est l&apos;essence.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-sm text-[#555555] leading-relaxed"
            >
              <p>
                La lumière est la cinquième dimension de l&apos;architecture. Invisible quand elle est maîtrisée,
                elle révèle les volumes, sculpte les matières, guide l&apos;œil et génère l&apos;émotion.
                Un espace sans étude d&apos;éclairage est un espace inachevé.
              </p>
              <p>
                Chez Code Phantom, nous croyons que chaque photon compte. Chaque lux doit être positionné
                avec intention. Chaque température de couleur choisie pour amplifier les émotions.
                L&apos;éclairage architectural n&apos;est pas une technique — c&apos;est une signature.
              </p>
              <p>
                Notre approche allie rigueur technique et sensibilité artistique. Nous travaillons
                aux côtés des architectes, des décorateurs et des maîtres d&apos;ouvrage pour créer
                des espaces où la lumière devient invisible — parce qu&apos;elle est parfaite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#666666] hover:text-[#c8a96e] transition-colors duration-300"
              >
                Découvrir notre approche
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right column - Domotique */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(ellipse at top, rgba(200,169,110,0.04) 0%, transparent 60%)" }}
              />

              <div className="w-8 h-px bg-[#c8a96e] mb-6" />
              <h3 className="text-xl font-light text-[#f5f5f0] mb-5 tracking-tight">
                La domotique comme langage
              </h3>
              <div className="space-y-4 text-sm text-[#555555] leading-relaxed mb-8">
                <p>
                  Imaginez un espace qui vous reconnaît. Qui s&apos;adapte à l&apos;heure,
                  à la saison, à votre présence. Qui passe de l&apos;éclairage de travail
                  à l&apos;ambiance dîner en un geste.
                </p>
                <p>
                  La domotique n&apos;est pas un gadget — c&apos;est la grammaire de la lumière moderne.
                  HELVAR, CASAMBI, DALI : nous maîtrisons les protocoles pour que la technologie
                  reste invisible et l&apos;expérience, magique.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Réduction conso.", value: "Jusqu'à 60%" },
                  { label: "Scénarios", value: "Illimités" },
                  { label: "Protocoles", value: "DALI · CASAMBI" },
                  { label: "Pilotage", value: "App mobile" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#1a1a1a] pl-3">
                    <div className="text-xs text-[#888888] font-medium">{item.value}</div>
                    <div className="text-[10px] text-[#444444] uppercase tracking-[0.1em] mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#1a1a1a] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
