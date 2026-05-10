import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts, siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Blog — Éclairage architectural, domotique, DIALux EVO",
  description:
    "Articles experts sur l'éclairage architectural, les études d'éclairage DIALux EVO, les normes d'éclairage, la domotique et les tendances lumière.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const categories = [
  "Éclairage Architectural",
  "Étude d'éclairage",
  "DIALux EVO",
  "Domotique",
  "Normes",
  "Bien-être",
  "Éclairage Tertiaire",
];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <SectionLabel className="mb-8">Ressources & insights</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            <span className="text-[#f5f5f0]">L&apos;éclairage,</span>
            <br />
            <span className="text-gradient-gold">décrypté.</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xs">
            Nos experts partagent leur connaissance de l&apos;éclairage architectural,
            des normes, de la domotique et des tendances lumière.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className="text-[10px] tracking-[0.15em] uppercase border border-[#1a1a1a] px-4 py-2 text-[#444444] hover:border-[#333333] hover:text-[#666666] transition-colors cursor-pointer">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Featured article */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <Link href={`/blog/${featured.slug}`} className="group block border border-[#1a1a1a] hover:border-[#2a2a2a] bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
          <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-3 py-1">
                  À la une
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">{featured.category}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-[#f5f5f0] tracking-tight mb-4 group-hover:text-[#c8a96e]/90 transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-[#444444] group-hover:text-[#c8a96e] transition-colors duration-300">
                Lire l&apos;article <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#333333]">{featured.readTime} de lecture</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111]">
          {rest.map((post) => (
            <article key={post.id} className="group bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-300">
              <Link href={`/blog/${post.slug}`} className="block p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e]">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#222222]" />
                  <span className="text-[9px] text-[#333333]">{post.readTime}</span>
                </div>
                <h2 className="text-sm font-light text-[#cccccc] leading-snug mb-3 group-hover:text-[#f5f5f0] transition-colors duration-300 line-clamp-3">
                  {post.title}
                </h2>
                <p className="text-xs text-[#444444] leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#333333] group-hover:text-[#c8a96e] transition-colors duration-300">
                  Lire <ArrowRight size={11} />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
