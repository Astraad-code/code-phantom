import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "éclairage architectural",
    "étude d'éclairage",
    "DIALux EVO",
    "domotique",
    "luminaires architecturaux",
    "éclairage tertiaire",
    "plan d'implantation",
    "normes éclairage",
    "Modular",
    "Kreon",
    "iGuzzini",
    "HELVAR",
    "Code Phantom",
  ],
  authors: [{ name: "Code Phantom" }],
  creator: "Code Phantom",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Code Phantom",
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                addressCountry: "FR",
              },
              areaServed: "FR",
              serviceType: [
                "Éclairage architectural",
                "Étude d'éclairage",
                "Domotique",
                "DIALux EVO",
                "Plan d'implantation luminaires",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#050505] grain-overlay min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
