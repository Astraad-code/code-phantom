"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

const categories = ["Tous", "Résidentiel", "Restauration", "Tertiaire", "Hôtellerie", "Commercial"];

const projectImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=70&auto=format&fit=crop",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.type === activeCategory);

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <SectionLabel className="mb-8">Nos réalisations</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            <span className="text-[#f5f5f0]">Chaque espace,</span>
            <br />
            <span className="text-gradient-gold">une signature lumineuse.</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-sm">
            Villas contemporaines, restaurants gastronomiques, bureaux tertiaires, hôtels boutique —
            Code Phantom imagine et réalise l&apos;éclairage qui transforme.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/5"
                  : "border-[#1a1a1a] text-[#555555] hover:border-[#333333] hover:text-[#888888]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects masonry grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <AnimatePresence mode="popLayout">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid"
              >
                <Link
                  href={`/projets/${project.id}`}
                  className="group relative block overflow-hidden bg-[#0a0a0a]"
                  style={{ aspectRatio: i % 3 === 0 ? "4/5" : "16/9" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${projectImages[i % projectImages.length]}')`,
                      opacity: 0.5,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#c8a96e] mb-1.5">
                      {project.type} · {project.location} · {project.year}
                    </div>
                    <h2 className="text-base font-light text-[#f5f5f0] tracking-tight mb-2">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-2 text-[10px] text-[#666666] group-hover:text-[#c8a96e] transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      Voir le projet <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <CtaBanner />
    </div>
  );
}
