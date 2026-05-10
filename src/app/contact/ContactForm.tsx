"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const projectTypes = [
  "Résidentiel",
  "Tertiaire",
  "Restaurant / Hôtel",
  "Commerce",
  "Autre",
];

const services = [
  "Étude d'éclairage",
  "Plan d'implantation",
  "Simulation DIALux EVO",
  "Domotique",
  "Devis luminaires",
  "Accompagnement projet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-12 flex flex-col items-center justify-center min-h-[400px] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
        <div className="w-12 h-12 border border-[#c8a96e] rounded-full flex items-center justify-center mb-6">
          <Check size={18} className="text-[#c8a96e]" />
        </div>
        <h3 className="text-xl font-light text-[#f5f5f0] mb-3">Message envoyé</h3>
        <p className="text-sm text-[#555555] leading-relaxed max-w-sm">
          Merci pour votre message. Notre équipe vous répondra sous 24h pour discuter de votre projet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">
            Prénom & Nom *
          </label>
          <input
            type="text"
            required
            placeholder="Jean Dupont"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] focus:border-[#c8a96e] text-[#f5f5f0] placeholder-[#333333] px-4 py-3 text-sm outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">
            Société / Cabinet
          </label>
          <input
            type="text"
            placeholder="Cabinet d'architecture..."
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] focus:border-[#c8a96e] text-[#f5f5f0] placeholder-[#333333] px-4 py-3 text-sm outline-none transition-colors duration-300"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="jean@cabinet.fr"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] focus:border-[#c8a96e] text-[#f5f5f0] placeholder-[#333333] px-4 py-3 text-sm outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            placeholder="+33 6 XX XX XX XX"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] focus:border-[#c8a96e] text-[#f5f5f0] placeholder-[#333333] px-4 py-3 text-sm outline-none transition-colors duration-300"
          />
        </div>
      </div>

      {/* Project type */}
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-3">
          Type de projet
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="projectType" value={type} className="sr-only peer" />
              <span className="text-[10px] tracking-[0.15em] uppercase border border-[#1a1a1a] px-4 py-2 text-[#555555] peer-checked:border-[#c8a96e] peer-checked:text-[#c8a96e] peer-checked:bg-[#c8a96e]/5 group-hover:border-[#2a2a2a] transition-all duration-300 cursor-pointer">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Services needed */}
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-3">
          Besoins (choix multiple)
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`text-[10px] tracking-[0.15em] uppercase border px-4 py-2 transition-all duration-300 ${
                selectedServices.includes(service)
                  ? "border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/5"
                  : "border-[#1a1a1a] text-[#555555] hover:border-[#2a2a2a]"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">
          Décrivez votre projet *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Surface, type d'espace, objectifs, délais, budget indicatif..."
          className="w-full bg-[#0a0a0a] border border-[#1a1a1a] focus:border-[#c8a96e] text-[#f5f5f0] placeholder-[#333333] px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none"
        />
      </div>

      {/* Recall preference */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="recall"
          className="w-4 h-4 border border-[#2a2a2a] bg-[#0a0a0a] accent-[#c8a96e] cursor-pointer"
        />
        <label htmlFor="recall" className="text-xs text-[#555555] cursor-pointer">
          Je souhaite être rappelé(e) pour discuter de mon projet
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group w-full flex items-center justify-center gap-3 bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase py-4 font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,110,0.25)]"
      >
        Envoyer ma demande
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="text-[10px] text-[#333333] text-center">
        Vos données sont protégées et ne sont jamais partagées avec des tiers.
      </p>
    </form>
  );
}
