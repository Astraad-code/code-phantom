"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/site";

const unsplashImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=70&auto=format&fit=crop",
];

export default function ProjectsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.slice(0, 4);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <SectionLabel className="mb-6">Réalisations</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              <span className="text-[#f5f5f0]">Projets qui </span>
              <span className="text-gradient-gold">parlent</span>
              <br />
              <span className="text-[#f5f5f0]">d&apos;eux-mêmes.</span>
            </h2>
          </div>
          <Link
            href="/projets"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#666666] hover:text-[#c8a96e] transition-colors duration-300"
          >
            Voir tous les projets
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured large project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:row-span-2 group relative overflow-hidden bg-[#0a0a0a] aspect-[4/5] md:aspect-auto"
          >
            <Link href={`/projets/${featured[0].id}`} className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${unsplashImages[0]}')`, opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#c8a96e] mb-2">
                  {featured[0].type} · {featured[0].location}
                </div>
                <h3 className="text-xl font-light text-[#f5f5f0] mb-2 tracking-tight">
                  {featured[0].title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed line-clamp-2 mb-4">
                  {featured[0].description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#555555] group-hover:text-[#c8a96e] transition-colors duration-300">
                  Découvrir le projet <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 3 smaller projects */}
          {featured.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-[#0a0a0a] aspect-video"
            >
              <Link href={`/projets/${project.id}`} className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${unsplashImages[i + 1]}')`, opacity: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#c8a96e] mb-1">
                    {project.type} · {project.location}
                  </div>
                  <h3 className="text-sm font-medium text-[#f5f5f0] tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
