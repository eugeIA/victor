"use client";

import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const videos = [
  {
    src: "/portfolio1.mp4",
    title: "Formation et Coaching en Prise de Parole en Public",
    description: "Accompagnement personnalisé pour développer votre éloquence",
  },
  {
    src: "/portfolio2.mp4",
    title: "Mariage de Prestige",
    description: "Célébration élégante et mémorable",
  },
  {
    src: "/portfolio3.mp4",
    title: "Nos Masterclass en Animation Événementielle",
    description: "Formation professionnelle pour futurs animateurs",
  },
];

const VideoCard = ({ src, title, description, featured = false }: { 
  src: string; 
  title: string; 
  description: string; 
  featured?: boolean;
}) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className={`relative rounded-2xl overflow-hidden group bg-neutral-900 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(true)}
    >
      {/* Video with native controls */}
      <video
        src={src}
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        controlsList="nodownload"
        onPlay={() => setShowInfo(false)}
        onPause={() => setShowInfo(true)}
        onEnded={() => setShowInfo(true)}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
      {/* Overlay with info - disappears when playing */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"
        >
          <div className="absolute bottom-16 left-0 right-0 p-6">
            <h4 className="text-white font-bold text-lg md:text-xl mb-1 drop-shadow-lg">
              {title}
            </h4>
            <p className="text-white/90 text-sm drop-shadow-md">{description}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export const Gallery = () => {
  return (
    <Section id="gallery">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold">En Action</h3>
        </div>
        <p className="max-w-md text-muted-foreground text-right md:text-left">
          Découvrez mes prestations lors de récents événements à Kinshasa et ailleurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[600px]">
        {/* Featured video (large) */}
        <VideoCard
          src={videos[0].src}
          title={videos[0].title}
          description={videos[0].description}
          featured
        />

        {/* Smaller videos */}
        <VideoCard
          src={videos[1].src}
          title={videos[1].title}
          description={videos[1].description}
        />

        <VideoCard
          src={videos[2].src}
          title={videos[2].title}
          description={videos[2].description}
        />
      </div>
    </Section>
  );
};
