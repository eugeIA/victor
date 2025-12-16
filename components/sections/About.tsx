"use client";

import { Section } from "../ui/Section";
import { User, Award, Heart, Sparkles } from "lucide-react";

const skills = [
  {
    icon: <Sparkles className="w-8 h-8 text-brand-yellow" />,
    title: "Animation Dynamique",
    description: "Une énergie contagieuse pour maintenir votre public en haleine du début à la fin.",
  },
  {
    icon: <Award className="w-8 h-8 text-brand-blue" />,
    title: "Professionnalisme",
    description: "Une gestion rigoureuse du temps et du protocole pour un événement sans faille.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Passionné",
    description: "Un amour profond pour la scène et la connexion avec le public.",
  },
];

export const About = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative z-10">
             {/* Placeholder for About Image */}
             <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-yellow/20 flex items-center justify-center">
                <span className="text-muted-foreground">Image Portrait</span>
             </div>
          </div>
          {/* Decorative box behind */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-yellow rounded-2xl -z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl -z-10" />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-2">À Propos de Moi</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Plus qu'un Animateur, un Créateur d'Ambiance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Basé à <strong>Kinshasa</strong>, je suis Victor Mbwebwe. Avec plus de deux ans d'expérience sur scène, 
              j'ai développé une expertise unique dans l'art de captiver les foules. Que ce soit pour un mariage, 
              une conférence d'entreprise ou un gala, je m'adapte à chaque audience pour créer une atmosphère sur mesure.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Mon objectif est simple : faire de votre événement un moment dont on se souviendra longtemps.
            </p>
          </div>

          <div className="grid gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-brand-yellow/50 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-white/5 shadow-sm">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

