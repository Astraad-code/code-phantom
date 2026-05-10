import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PartnersSection from "@/components/sections/PartnersSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos — Code Phantom, experts en éclairage architectural",
  description:
    "Découvrez Code Phantom, votre expert en éclairage architectural, études d'éclairage DIALux EVO et domotique. Notre équipe accompagne architectes et designers depuis plus de 15 ans.",
  alternates: { canonical: `${siteConfig.url}/a-propos` },
};

const values = [
  {
    title: "Excellence technique",
    description: "Chaque étude d'éclairage est réalisée avec précision par nos ingénieurs lumière certifiés. Nous ne faisons aucun compromis sur la qualité.",
  },
  {
    title: "Esthétique architecturale",
    description: "La lumière est un matériau architectural. Nous la traitons avec la même attention qu'un architecte traite le béton, l'acier ou le verre.",
  },
  {
    title: "Innovation permanente",
    description: "LED OLED, HCL, IA lighting — nous veillons en permanence sur les avancées technologiques pour vous proposer les meilleures solutions.",
  },
  {
    title: "Partenariat durable",
    description: "Nous construisons des relations durables avec nos clients. Votre succès est le nôtre. Chaque projet est une nouvelle opportunité de créer l'exceptionnel.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060606]" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60&auto=format&fit=crop')`,
            opacity: 0.06,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <SectionLabel className="mb-8">Notre histoire</SectionLabel>
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight max-w-3xl mb-8">
            <span className="text-[#f5f5f0]">L&apos;expertise lumière</span>
            <br />
            <span className="text-gradient-gold">au service de vos projets.</span>
          </h1>
          <p className="text-base text-[#555555] leading-relaxed max-w-2xl">
            Code Phantom est né de la conviction que l&apos;éclairage architectural méritait
            une expertise aussi rigoureuse que l&apos;architecture elle-même. Fondée par des
            ingénieurs lumière passionnés, notre société accompagne architectes, décorateurs
            et maîtres d&apos;ouvrage dans la création d&apos;espaces lumineux d&apos;exception.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-6 text-sm text-[#888888] leading-relaxed">
            <p>
              La lumière est le premier élément perçu dans un espace. Avant la matière,
              avant la forme, avant la couleur — c&apos;est la lumière qui construit la perception.
              Pourtant, elle reste souvent le dernier paramètre traité dans un projet architectural.
            </p>
            <p>
              C&apos;est pour combler ce paradoxe que Code Phantom a été créé. Notre mission est simple :
              faire de l&apos;éclairage architectural une discipline à part entière, traitée dès la
              conception du projet, avec les outils et l&apos;expertise qu&apos;elle mérite.
            </p>
            <p>
              Aujourd&apos;hui, notre équipe accompagne des centaines de projets par an —
              des villas contemporaines aux campus tertiaires, des restaurants gastronomiques
              aux showrooms de luxe. Chaque projet reçoit la même attention, la même rigueur,
              le même engagement pour l&apos;excellence.
            </p>
            <p>
              Nous distribuons les marques qui ont le plus fait pour l&apos;éclairage architectural :
              Modular, Kreon, iGuzzini, Luce & Light, Prado et HELVAR. Des marques choisies
              pour leur excellence technique, leur sensibilité esthétique et leur engagement
              pour la durabilité.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { value: "200+", label: "Projets réalisés", desc: "Résidentiel, tertiaire, hôtellerie, commerce" },
              { value: "15+", label: "Années d'expertise", desc: "En éclairage architectural et domotique" },
              { value: "6", label: "Partenaires premium", desc: "Marques sélectionnées pour leur excellence" },
              { value: "100%", label: "Études DIALux EVO", desc: "Chaque projet est simulé avant réalisation" },
            ].map((stat) => (
              <div key={stat.label} className="border border-[#1a1a1a] bg-[#0a0a0a] p-5 flex items-center gap-6">
                <div className="text-2xl font-light text-[#c8a96e] w-16 flex-shrink-0">{stat.value}</div>
                <div>
                  <div className="text-sm font-medium text-[#f5f5f0]">{stat.label}</div>
                  <div className="text-xs text-[#444444] mt-0.5">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#060606] border-y border-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-12">Nos valeurs</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#111111]">
            {values.map((value) => (
              <div key={value.title} className="group bg-[#060606] hover:bg-[#0a0a0a] p-7 transition-colors duration-300">
                <div className="w-6 h-px bg-[#c8a96e] mb-5 group-hover:w-10 transition-all duration-500" />
                <h3 className="text-sm font-medium text-[#f5f5f0] mb-3">{value.title}</h3>
                <p className="text-xs text-[#555555] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise areas */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <SectionLabel className="mb-10">Domaines d&apos;intervention</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Éclairage résidentiel haut de gamme",
              desc: "Villas, appartements, résidences — l'éclairage qui révèle l'architecture résidentielle dans toute sa beauté. Chaque pièce, chaque ambiance, chaque moment de vie.",
            },
            {
              title: "Éclairage tertiaire & conformité",
              desc: "Bureaux, open spaces, salles de réunion — nous garantissons la conformité aux normes EN 12464-1 et au décret tertiaire tout en créant des environnements de travail performants.",
            },
            {
              title: "Hôtellerie & restauration",
              desc: "Hall d'hôtel, chambres, spa, restaurant gastronomique — chaque espace de l'hospitality industry mérite une signature lumineuse unique et une gestion domotique sans faille.",
            },
            {
              title: "Commerce & retail",
              desc: "Showrooms, boutiques, grandes surfaces — la lumière qui vend. Valorisation des produits, ambiances de marque, efficacité énergétique pour les espaces commerciaux.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-[#1a1a1a] bg-[#0a0a0a] p-7 group hover:border-[#2a2a2a] transition-colors duration-300">
              <div className="w-6 h-px bg-[#c8a96e] mb-4 group-hover:w-10 transition-all duration-500" />
              <h3 className="text-base font-light text-[#f5f5f0] mb-3">{item.title}</h3>
              <p className="text-xs text-[#555555] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase px-8 py-4 font-medium transition-all duration-300"
          >
            Parler de votre projet
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <PartnersSection />
      <CtaBanner />
    </div>
  );
}
