import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Code Phantom — traitement des données personnelles.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-4xl font-light text-[#f5f5f0] mb-8 tracking-tight">Politique de confidentialité</h1>

      <div className="space-y-10 text-sm text-[#888888] leading-relaxed">
        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Collecte des données</h2>
          <p>
            Code Phantom collecte des données personnelles uniquement lorsque vous nous les fournissez
            volontairement via notre formulaire de contact (nom, prénom, email, téléphone, description du projet).
            Ces données sont utilisées exclusivement pour traiter votre demande et vous recontacter.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Utilisation des données</h2>
          <p>
            Vos données personnelles sont utilisées pour :<br />
            — Traiter votre demande de devis ou d&apos;information<br />
            — Vous recontacter dans le cadre de votre projet<br />
            — Améliorer nos services<br /><br />
            Nous ne vendons, ne louons et ne partageons jamais vos données avec des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Conservation des données</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière
            interaction avec nos services, conformément aux obligations légales françaises.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données :<br />
            — Droit d&apos;accès et de rectification<br />
            — Droit à l&apos;effacement<br />
            — Droit à la limitation du traitement<br />
            — Droit à la portabilité<br /><br />
            Pour exercer ces droits, contactez-nous à : {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie
            publicitaire ou de tracking tiers n&apos;est utilisé sans votre consentement explicite.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Contact</h2>
          <p>
            Pour toute question relative à la protection de vos données personnelles, contactez notre
            délégué à la protection des données : {siteConfig.email}
          </p>
        </section>
      </div>
    </div>
  );
}
