"use client";

import { Section } from "../ui/Section";
import { motion } from "framer-motion";

const images = [1, 2, 3, 4, 5, 6]; // Placeholders

export const Gallery = () => {
  return (
    <Section id="gallery">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold">En Action</h3>
        </div>
        <p className="max-w-md text-muted-foreground text-right md:text-left">
          Quelques moments capturés lors de mes récentes prestations à Kinshasa et ailleurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
        {/* Large featured item */}
        <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group bg-neutral-200 dark:bg-neutral-800"
        >
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                 <span className="text-white/30 font-bold text-2xl">Grande Photo Événement</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Concert Live 2024</p>
            </div>
        </motion.div>

        {/* Smaller items */}
        <motion.div 
            whileHover={{ scale: 0.98 }}
            className="relative rounded-2xl overflow-hidden group bg-neutral-200 dark:bg-neutral-800"
        >
            <div className="absolute inset-0 bg-neutral-700 flex items-center justify-center">
                 <span className="text-white/30 font-bold">Conférence</span>
            </div>
            <div className="absolute inset-0 bg-brand-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-brand-blue-dark font-bold">Voir Détails</span>
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ scale: 0.98 }}
            className="relative rounded-2xl overflow-hidden group bg-neutral-200 dark:bg-neutral-800"
        >
            <div className="absolute inset-0 bg-neutral-700 flex items-center justify-center">
                 <span className="text-white/30 font-bold">Mariage VIP</span>
            </div>
            <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Voir Détails</span>
            </div>
        </motion.div>
      </div>
    </Section>
  );
};

