import type { MetadataRoute } from "next";
import { blogPosts, projects, siteConfig } from "@/data/site";
import { villes } from "@/data/villes";
import { secteurs } from "@/data/secteurs";
import { normes } from "@/data/normes";
import { glossaire } from "@/data/glossaire";
import { comparatifs } from "@/data/comparatifs";
import { servicesVilles } from "@/data/services-villes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/projets`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/produits`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Outils hub + tools
    { url: `${base}/outils`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/outils/calculateur-lux`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/outils/calculateur-roi-led`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/outils/temperature-couleur`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/simulateur-domotique`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/combien-de-spots-par-m2`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/calcul-eclairage-bureau`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/calcul-eclairage-restaurant`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/prix-domotique-maison`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/calcul-eclairage-salon`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/outils/calcul-eclairage-cuisine`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/ressources`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    // Normes
    { url: `${base}/normes`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Comparatifs
    { url: `${base}/comparatifs`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Hubs
    { url: `${base}/secteurs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projets/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const villePages: MetadataRoute.Sitemap = villes.map((v) => ({
    url: `${base}/villes/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const villeServicePages: MetadataRoute.Sitemap = villes.flatMap((v) =>
    servicesVilles.map((s) => ({
      url: `${base}/villes/${v.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const secteurPages: MetadataRoute.Sitemap = secteurs.map((s) => ({
    url: `${base}/secteurs/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const normePages: MetadataRoute.Sitemap = normes.map((n) => ({
    url: `${base}/normes/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const glossairePages: MetadataRoute.Sitemap = glossaire.map((t) => ({
    url: `${base}/glossaire/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparatifPages: MetadataRoute.Sitemap = comparatifs.map((c) => ({
    url: `${base}/comparatifs/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...blogPages,
    ...villePages,
    ...villeServicePages,
    ...secteurPages,
    ...normePages,
    ...glossairePages,
    ...comparatifPages,
  ];
}
