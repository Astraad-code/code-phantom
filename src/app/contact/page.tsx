import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Demander un devis éclairage architectural",
  description:
    "Contactez Code Phantom pour votre projet d'éclairage architectural ou domotique. Demande de devis, étude d'éclairage, rappel téléphonique — nous répondons sous 24h.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e]">Parlons de votre projet</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-[#f5f5f0] mb-4">
            Donnons vie à votre
            <br />
            <span className="text-gradient-gold">vision lumineuse.</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-md">
            Architectes, décorateurs, promoteurs, particuliers — partagez votre projet.
            Nous vous répondons sous 24h avec une première analyse et une proposition d&apos;étude.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#444444] mb-5">Informations de contact</h3>
              <div className="space-y-4">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#c8a96e] transition-colors duration-300">
                    <Phone size={13} className="text-[#555555] group-hover:text-[#c8a96e] transition-colors" />
                  </div>
                  <span className="text-sm text-[#666666] group-hover:text-[#c8a96e] transition-colors">{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#c8a96e] transition-colors duration-300">
                    <Mail size={13} className="text-[#555555] group-hover:text-[#c8a96e] transition-colors" />
                  </div>
                  <span className="text-sm text-[#666666] group-hover:text-[#c8a96e] transition-colors">{siteConfig.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center">
                    <MapPin size={13} className="text-[#555555]" />
                  </div>
                  <span className="text-sm text-[#555555]">{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#444444] mb-4">Nous intervenons pour</h3>
              <ul className="space-y-2">
                {[
                  "Architectes & architectes d'intérieur",
                  "Bureaux d'études",
                  "Promoteurs immobiliers",
                  "Entreprises & commerces",
                  "Particuliers haut de gamme",
                  "Hôtels & restaurants",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-[#555555]">
                    <div className="w-1 h-1 rounded-full bg-[#c8a96e] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#444444] mb-4">Temps de réponse</h3>
              <div className="space-y-3">
                {[
                  { label: "Première réponse", value: "< 24h" },
                  { label: "Étude d'éclairage", value: "3 à 5 jours" },
                  { label: "Devis complet", value: "5 à 7 jours" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-xs text-[#555555]">{item.label}</span>
                    <span className="text-xs text-[#c8a96e] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
