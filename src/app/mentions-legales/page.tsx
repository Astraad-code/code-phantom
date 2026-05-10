import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Code Phantom — éclairage architectural et domotique.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-4xl font-light text-[#f5f5f0] mb-8 tracking-tight">Mentions légales</h1>

      <div className="space-y-10 text-sm text-[#888888] leading-relaxed">
        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Éditeur du site</h2>
          <p>
            <strong className="text-[#cccccc]">Code Phantom</strong><br />
            Société par actions simplifiée<br />
            Paris, France<br />
            Email : {siteConfig.email}<br />
            Téléphone : {siteConfig.phone}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 501, San Francisco, CA 94104, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété
            exclusive de Code Phantom et est protégé par les lois françaises et internationales relatives
            à la propriété intellectuelle. Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site est interdite sans l&apos;accord écrit préalable de Code Phantom.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Limitation de responsabilité</h2>
          <p>
            Code Phantom s&apos;efforce d&apos;assurer au mieux que les informations diffusées sur ce site sont exactes
            et à jour. Cependant, Code Phantom ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité
            des informations mises à disposition sur ce site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-[#f5f5f0] mb-3">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par la loi française. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}
