import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const articleContents: Record<string, string[]> = {
  "pourquoi-etude-eclairage-essentielle-projet-tertiaire": [
    "L'éclairage tertiaire n'est plus une simple question d'esthétique — c'est une obligation réglementaire, un enjeu de performance énergétique et un facteur déterminant pour le bien-être des occupants. La norme européenne EN 12464-1 définit les exigences minimales d'éclairage pour les lieux de travail intérieurs. Elle fixe des niveaux d'éclairement précis selon les tâches visuelles, des critères d'éblouissement (UGR) et des exigences de rendu des couleurs (IRC).",
    "Pour des bureaux en open space, la norme exige un éclairement moyen de 500 lux sur le plan de travail, un UGR inférieur à 19 et un IRC supérieur à 80. Ces valeurs ne peuvent être respectées sans une étude d'éclairage préalable réalisée par un bureau d'études spécialisé comme Code Phantom.",
    "La simulation DIALux EVO permet de modéliser l'espace en 3D, d'importer les données photométriques des luminaires (fichiers IES ou LDT), et de calculer avec précision les niveaux d'éclairement, l'uniformité, l'éblouissement et la consommation énergétique. C'est un outil indispensable pour tout projet tertiaire sérieux.",
    "Au-delà de la conformité normative, une étude d'éclairage bien menée permet d'optimiser le nombre de luminaires, de réduire la puissance installée et donc la facture énergétique. Dans le cadre du décret tertiaire et des obligations BACS (Building Automation and Control Systems), la maîtrise de l'éclairage devient un levier essentiel de la performance énergétique du bâtiment.",
    "Code Phantom réalise des études d'éclairage complètes pour tous types de projets tertiaires : bureaux, commerces, établissements scolaires, bâtiments de santé, industries. Chaque étude comprend une simulation DIALux EVO, un rapport photométrique complet et des recommandations de produits adaptés au budget et aux objectifs du projet.",
  ],
  "reduire-consommation-energetique-domotique-eclairage": [
    "L'éclairage représente en moyenne 30 à 40% de la consommation électrique d'un bâtiment tertiaire. Grâce aux solutions domotiques modernes — DALI, CASAMBI, KNX — il est possible de réduire cette consommation de 40 à 60% sans compromis sur le confort visuel.",
    "La première brique de la domotique d'éclairage est la variation de lumière. Les ballasts DALI (Digital Addressable Lighting Interface) permettent de piloter individuellement chaque luminaire ou groupe de luminaires, de les faire varier de 1% à 100% et de leur affecter des adresses individuelles sur le réseau. Cela ouvre la voie à des scénarios lumineux complexes et à une gestion très fine de la consommation.",
    "La détection de présence est l'outil le plus efficace pour réduire la consommation. Dans les bureaux, les couloirs, les sanitaires et les espaces communs, des détecteurs de présence coupent automatiquement l'éclairage lorsque la zone est inoccupée. Les études montrent que cette seule mesure permet de réduire de 25 à 35% la consommation d'éclairage dans un bâtiment de bureaux.",
    "La compensation de lumière du jour (daylight harvesting) est une autre technologie clé. Des capteurs mesurent en temps réel le niveau d'éclairement naturel et ajustent automatiquement la contribution de l'éclairage artificiel pour maintenir un niveau constant. Dans un bureau exposé au sud avec de grandes baies vitrées, cette technologie peut réduire de 60% la consommation d'éclairage en journée.",
    "Les systèmes CASAMBI offrent une flexibilité supplémentaire grâce à leur protocole sans fil Bluetooth Mesh. Idéaux pour les rénovations, ils ne nécessitent pas de câblage supplémentaire et peuvent être contrôlés via application mobile. Code Phantom intègre ces solutions dans tous ses projets et forme les utilisateurs à leur utilisation.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = articleContents[slug] || [
    "Contenu de l'article en cours de rédaction. Revenez prochainement pour découvrir cet article expert sur " + post.title.toLowerCase() + ".",
    "Code Phantom partage régulièrement son expertise en éclairage architectural, domotique et simulation DIALux EVO. Notre équipe d'ingénieurs lumière rédige des contenus techniques et pratiques pour accompagner les professionnels du bâtiment.",
    "Pour en savoir plus sur ce sujet ou discuter d'un projet spécifique, n'hésitez pas à nous contacter. Nous répondons à toutes les questions d'éclairage architectural dans les 24h.",
  ];

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const otherRelated = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category).slice(0, 3 - relatedPosts.length);
  const related = [...relatedPosts, ...otherRelated].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Code Phantom" },
    publisher: { "@type": "Organization", name: "Code Phantom", url: siteConfig.url },
    datePublished: post.date,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#555555] hover:text-[#c8a96e] transition-colors text-xs tracking-[0.15em] uppercase mb-10">
          <ArrowLeft size={12} />
          Tous les articles
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-3 py-1">
            {post.category}
          </span>
          <span className="text-[9px] text-[#444444]">{post.readTime} de lecture</span>
          <span className="text-[9px] text-[#333333]">{new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-light text-[#f5f5f0] tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-base text-[#666666] leading-relaxed border-l-2 border-[#c8a96e] pl-5 mb-12">
          {post.excerpt}
        </p>

        <div className="prose prose-invert max-w-none space-y-6">
          {content.map((paragraph, i) => (
            <p key={i} className="text-[#888888] leading-relaxed text-sm">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-[#1a1a1a]">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-4">Thèmes abordés</div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.1em] uppercase border border-[#1a1a1a] px-3 py-1.5 text-[#444444]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <div className="mt-12 bg-[#0a0a0a] border border-[#1a1a1a] p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
          <h3 className="text-base font-light text-[#f5f5f0] mb-3">
            Vous avez un projet d&apos;éclairage ?
          </h3>
          <p className="text-xs text-[#555555] leading-relaxed mb-5">
            Code Phantom réalise votre étude d&apos;éclairage et vous accompagne dans le choix
            de luminaires architecturaux adaptés à votre projet.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 hover:bg-[#c8a96e] hover:text-[#050505] px-5 py-3 transition-all duration-300"
          >
            Étudier mon projet
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-[#111111]">
          <h2 className="text-sm tracking-[0.2em] uppercase text-[#444444] mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111111]">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group bg-[#050505] hover:bg-[#0a0a0a] p-6 transition-colors duration-300">
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">{p.category}</div>
                <h3 className="text-sm font-light text-[#888888] group-hover:text-[#f5f5f0] leading-snug mb-3 transition-colors duration-300 line-clamp-2">
                  {p.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-[#333333] group-hover:text-[#c8a96e] transition-colors duration-300">
                  Lire <ArrowRight size={10} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />
    </div>
  );
}
