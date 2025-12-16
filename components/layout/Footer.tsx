"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex gap-1 items-center justify-center md:justify-start mb-2">
            <span className="text-white">Victor</span>
            <span className="text-brand-yellow">Mbwebwe</span>
          </Link>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-white/60">
          <Link href="#" className="hover:text-brand-yellow transition-colors">Mentions Légales</Link>
          <Link href="#" className="hover:text-brand-yellow transition-colors">Confidentialité</Link>
          <Link href="#" className="hover:text-brand-yellow transition-colors">CGV</Link>
        </div>
      </div>
    </footer>
  );
};

