"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Mic, Calendar } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-brand-blue/5 to-brand-yellow/5">
      {/* Background Decor Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue dark:text-brand-blue-light border border-brand-blue/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider">Disponible à Kinshasa</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            L'Art de <span className="text-brand-blue dark:text-brand-blue-light">L'Animation</span> <br />
            Avec <span className="text-brand-yellow relative inline-block">
              Excellence
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Je suis <strong className="text-foreground">Guy-Victor Mbwebwe</strong>, Maître de Cérémonie professionnel, formateur en art oratoire, en animation évenementielle et en leadership et développement personnel.
            Je transforme vos événements en moments inoubliables avec charisme et élégance.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="shadow-lg shadow-brand-blue/20">
              Me Contacter <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Voir mon Portfolio
            </Button>
          </div>

          <div className="flex gap-8 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold text-brand-blue dark:text-brand-blue-light">5+</p>
              <p className="text-sm text-muted-foreground">Ans d'Expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-blue dark:text-brand-blue-light">50+</p>
              <p className="text-sm text-muted-foreground">Événements Réussis</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-blue dark:text-brand-blue-light">100%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Client</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full hidden md:block"
        >
          {/* Abstract Shapes behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-yellow rounded-[2rem] rotate-3 opacity-20 transform translate-x-4 translate-y-4" />
          <div className="absolute inset-0 bg-background rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
             {/* Placeholder for Hero Image */}
             <div className="w-full h-full bg-neutral-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                {/* Use a placeholder image from Unsplash for now since we don't have the user's files uploaded yet or I can't see them directly. 
                    Ideally this would be <Image src="/path-to-victor.jpg" ... /> */}
                <span className="text-white/50 text-lg z-20">Photo de Victor Mbwebwe Ici</span>
                
                {/* Floating cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3"
                >
                   <div className="bg-brand-yellow p-2 rounded-full text-black">
                     <Mic size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-white/80">Expert en</p>
                     <p className="text-sm font-bold text-white">Art Oratoire</p>
                   </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-10 right-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3"
                >
                   <div className="bg-brand-blue p-2 rounded-full text-white">
                     <Calendar size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-white/80">Disponible pour</p>
                     <p className="text-sm font-bold text-white">Tout Événement</p>
                   </div>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

