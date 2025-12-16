"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="mb-20">
      <div className="bg-brand-blue rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Contactez-Moi</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Parlons de Votre Prochain Événement</h3>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed">
              Prêt à faire passer votre événement au niveau supérieur ? Remplissez le formulaire ou contactez-moi directement.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Téléphone</p>
                  <p className="font-semibold text-lg">+243 81 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-semibold text-lg">contact@victormbwebwe.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Localisation</p>
                  <p className="font-semibold text-lg">Kinshasa, RDC</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <p className="text-sm text-white/60 mb-4">Suivez-moi sur les réseaux</p>
               <div className="flex gap-4">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <form className="bg-white p-8 rounded-2xl shadow-2xl space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="john@exemple.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Type d'événement</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all">
                <option>Mariage</option>
                <option>Conférence</option>
                <option>Concert</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Parlez-moi de votre projet..." />
            </div>

            <Button className="w-full py-4 text-lg">Envoyer le Message</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

