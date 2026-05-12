"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/outils", label: "Outils" },
  { href: "/normes", label: "Normes" },
  { href: "/comparatifs", label: "Comparatifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#c8a96e]/10 group-hover:bg-[#c8a96e]/20 transition-colors duration-300" />
              <div className="w-2 h-2 rounded-full bg-[#c8a96e] group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-1 rounded-full border border-[#c8a96e]/30 group-hover:border-[#c8a96e]/60 transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#f5f5f0] group-hover:text-[#c8a96e] transition-colors duration-300">
              Code Phantom
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group",
                      isActive
                        ? "text-[#c8a96e]"
                        : "text-[#888888] hover:text-[#f5f5f0]"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-[#c8a96e] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Desktop */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#050505] bg-[#c8a96e] hover:bg-[#e8c98e] px-5 py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)]"
          >
            Demander un devis
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#888888] hover:text-[#f5f5f0] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-16 gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-4 text-2xl font-light tracking-tight border-b border-[#1a1a1a] transition-colors duration-300",
                        isActive ? "text-[#c8a96e]" : "text-[#888888] hover:text-[#f5f5f0]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center text-sm tracking-[0.15em] uppercase text-[#050505] bg-[#c8a96e] py-4"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
