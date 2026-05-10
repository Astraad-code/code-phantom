import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — Projet d'éclairage ${project.type}`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projets/${id}` },
  };
}

const projectImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop",
];

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const imageUrl = projectImages[idx % projectImages.length];

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')`, opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-12">
          <Link href="/projets" className="flex items-center gap-2 text-[#555555] hover:text-[#c8a96e] transition-colors text-xs tracking-[0.15em] uppercase mb-6">
            <ArrowLeft size={12} />
            Tous les projets
          </Link>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-3">
            {project.type} · {project.location} · {project.year}
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-[#f5f5f0] tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="w-8 h-px bg-[#c8a96e] mb-4" />
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-3">Le projet</h2>
              <p className="text-[#888888] leading-relaxed">{project.description}</p>
            </div>
            <div>
              <div className="w-8 h-px bg-[#c8a96e] mb-4" />
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-3">La problématique</h2>
              <p className="text-[#888888] leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <div className="w-8 h-px bg-[#c8a96e] mb-4" />
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-3">La solution</h2>
              <p className="text-[#888888] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-4">Marques utilisées</h3>
              <div className="space-y-2">
                {project.brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                    <span className="text-sm text-[#888888]">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-[0.1em] uppercase border border-[#1a1a1a] px-3 py-1.5 text-[#444444]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="group w-full flex items-center justify-center gap-3 bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase py-4 font-medium transition-all duration-300"
            >
              Parler de votre projet
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
