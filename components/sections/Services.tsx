"use client";

import { Section } from "../ui/Section";
import { Mic2, Music, Users, GlassWater } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Conférences & Séminaires",
    description: "Modération professionnelle et gestion fluide des interventions pour vos événements corporatifs.",
    color: "bg-blue-500",
  },
  {
    icon: <GlassWater className="w-10 h-10" />,
    title: "Mariages & Galas",
    description: "Une touche d'élégance et d'humour pour célébrer les moments les plus précieux de la vie.",
    color: "bg-yellow-500",
  },
  {
    icon: <Mic2 className="w-10 h-10" />,
    title: "Animation de Scène",
    description: "Présentation dynamique pour concerts, festivals et événements culturels à Kinshasa.",
    color: "bg-purple-500",
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: "Événements Privés",
    description: "Anniversaires, lancements de produits et fêtes privées avec une ambiance sur mesure.",
    color: "bg-pink-500",
  },
];

export const Services = () => {
  return (
    <Section id="services" className="bg-neutral-50 dark:bg-white/5 rounded-3xl my-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-2">Mes Services</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">Une Expertise Diversifiée</h3>
        <p className="text-muted-foreground">
          Chaque événement est unique. J'apporte la touche professionnelle et charismatique qu'il vous faut.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
            
            <div className={`mb-6 p-4 rounded-xl ${service.color} text-white w-fit shadow-md`}>
              {service.icon}
            </div>
            
            <h4 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
              {service.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

