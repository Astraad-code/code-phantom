import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = {
  services: [
    { href: "/produits", label: "Nos produits" },
    { href: "/projets", label: "Nos projets" },
    { href: "/contact", label: "Étude d'éclairage" },
    { href: "/contact", label: "Plan d'implantation" },
    { href: "/contact", label: "Domotique" },
  ],
  company: [
    { href: "/a-propos", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
  ],
  blog: [
    { href: "/blog/pourquoi-etude-eclairage-essentielle-projet-tertiaire", label: "Étude d'éclairage tertiaire" },
    { href: "/blog/normes-eclairage-bureaux-en-12464", label: "Normes EN 12464-1" },
    { href: "/blog/dialux-evo-comprendre-simulations-eclairage", label: "DIALux EVO" },
    { href: "/blog/reduire-consommation-energetique-domotique-eclairage", label: "Domotique & énergie" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#c8a96e]/10" />
                <div className="w-2 h-2 rounded-full bg-[#c8a96e]" />
                <div className="absolute inset-1 rounded-full border border-[#c8a96e]/30" />
              </div>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#f5f5f0]">
                Code Phantom
              </span>
            </Link>
            <p className="text-[#555555] text-sm leading-relaxed mb-8 max-w-xs">
              L&apos;architecture de la lumière. Solutions d&apos;éclairage architectural
              et domotique pour espaces résidentiels et tertiaires haut de gamme.
            </p>
            <div className="space-y-2 text-xs text-[#444444]">
              <div>{siteConfig.phone}</div>
              <div>{siteConfig.email}</div>
              <div>{siteConfig.address}</div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#555555] hover:text-[#c8a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#555555] hover:text-[#c8a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-5">
              Ressources
            </h4>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#555555] hover:text-[#c8a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.1em] text-[#333333]">
            © {new Date().getFullYear()} Code Phantom. Tous droits réservés.
          </p>
          <p className="text-[10px] tracking-[0.1em] text-[#2a2a2a]">
            Éclairage architectural · Domotique · DIALux EVO
          </p>
        </div>
      </div>
    </footer>
  );
}
