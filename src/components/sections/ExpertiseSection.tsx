"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const expertises = [
  {
    number: "01",
    title: "Étude d'éclairage",
    description:
      "Analyse complète de vos besoins lumineux avec simulations DIALux EVO. Calculs d'éclairement, uniformité, éblouissement — tout mesuré pour garantir confort visuel et conformité.",
  },
  {
    number: "02",
    title: "Plan d'implantation",
    description:
      "Plans techniques précis de positionnement luminaires sur vos plans d'architecte. Calepinage optimisé, zones éclairées, puissances installées.",
  },
  {
    number: "03",
    title: "Simulation DIALux EVO",
    description:
      "Rendu photométrique réaliste avant réalisation. Visualisez vos espaces, ajustez les ambiances, validez les normes — tout en amont du chantier.",
  },
  {
    number: "04",
    title: "Domotique & contrôle",
    description:
      "Intégration HELVAR, CASAMBI, DALI pour piloter intelligemment votre éclairage. Scénarios automatisés, détection présence, variation de lumière.",
  },
  {
    number: "05",
    title: "Accompagnement projet",
    description:
      "De la conception à la livraison, nos ingénieurs lumière vous accompagnent. Sélection des luminaires, coordination avec les corps d'état, suivi de chantier.",
  },
  {
    number: "06",
    title: "Conformité tertiaire",
    description:
      "Maîtrise des normes EN 12464-1, décret tertiaire BACS, RT2020. Conformité réglementaire garantie avec optimisation des performances énergétiques.",
  },
];

export default function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-36 bg-[#050505]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <SectionLabel className="mb-6">Notre expertise</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              <span className="text-[#f5f5f0]">Une expertise </span>
              <span className="text-gradient-gold">complète</span>
              <br />
              <span className="text-[#f5f5f0]">à chaque étape.</span>
            </h2>
          </div>
          <p className="text-[#555555] text-sm leading-relaxed max-w-sm">
            De l&apos;étude initiale à la livraison du projet, Code Phantom vous accompagne
            avec une vision globale de l&apos;éclairage architectural et de la domotique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111]">
          {expertises.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#050505] p-8 lg:p-10 hover:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(200,169,110,0.04) 0%, transparent 60%)",
                }}
              />
              <div className="text-[#1a1a1a] text-6xl font-light mb-6 group-hover:text-[#222222] transition-colors duration-300">
                {item.number}
              </div>
              <div className="w-6 h-px bg-[#c8a96e] mb-5 group-hover:w-12 transition-all duration-500" />
              <h3 className="text-base font-medium text-[#f5f5f0] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#666666] hover:text-[#c8a96e] transition-colors duration-300"
          >
            Étudier votre projet avec nous
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
