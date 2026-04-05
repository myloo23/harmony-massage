import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import heroImg from '../../assets/hatmasszazs.webp';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Masszázs Dabas & Vonzáskörzete</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] mb-6 text-brand-ink">
            Professzionális <span className="italic text-brand-terracotta">masszázs Dabas</span> szívében: hátfájás kezelés, sport- és svédmasszázs.
          </h1>
          <p className="text-lg text-brand-ink/70 mb-10 max-w-lg leading-relaxed">
            Professzionális masszázskezelés Dabason, ahol a sportolói precizitás
            és az értő figyelem találkozik. Személyre szabott megoldások
            mozgásszervi panaszokra és stresszoldásra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <a
              href="#booking"
              className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-terracotta/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Időpontot foglalok <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="border-2 border-brand-green/20 text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green/5 transition-colors flex items-center justify-center"
            >
              Szolgáltatások
            </a>
          </div>
          
          <p className="text-sm font-medium text-brand-terracotta mb-9">
            Azonnali visszaigazolás • Fizetés a helyszínen
          </p>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#4a7c59", "#c17c5a", "#3d6b4a", "#b8694a"].map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-brand-cream flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-brand-ink/60">
              <span className="text-brand-ink font-bold">500+</span> sikeres
              kezelés Dabason
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-2xl relative z-10">
            <img
              src={heroImg}
              alt="Gyimesi Levente hátmasszázs kezelés közben - Masszázs Dabas"
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-ink/40 to-transparent" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
            <div className="flex items-center gap-2 text-brand-terracotta mb-2">
              <ShieldCheck size={24} />
              <span className="font-bold text-sm">Szakértelem</span>
            </div>
            <p className="text-xs text-brand-ink/70 leading-tight">
              Súlyemelő múltból fakadó mély anatómiai ismeretek.
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-brand-terracotta/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
