"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/data/site";

export default function BlogPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <SectionLabel className="mb-6">Ressources & insights</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              <span className="text-[#f5f5f0]">L&apos;éclairage,</span>
              <br />
              <span className="text-gradient-gold">décrypté.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#666666] hover:text-[#c8a96e] transition-colors duration-300"
          >
            Tous les articles
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111111]">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`} className="block p-8 h-full">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(200,169,110,0.04) 0%, transparent 60%)" }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-[#c8a96e]/0 group-hover:bg-[#c8a96e]/20 transition-all duration-500" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a96e]">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
                  <span className="text-[9px] text-[#333333]">{post.readTime}</span>
                </div>

                <h3 className="text-base font-light text-[#f5f5f0] leading-snug mb-4 group-hover:text-[#c8a96e]/90 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-xs text-[#444444] leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#333333] group-hover:text-[#c8a96e] transition-colors duration-300">
                  Lire l&apos;article
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
