import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../constants";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white border-t border-brand-green/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Mit mondanak a vendégeim?
          </h2>
          <p className="text-brand-ink/60 max-w-2xl mx-auto">
            A legjobb visszajelzés a fájdalommentes mozgás és a visszatérő elégedett vendég.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-cream p-8 rounded-3xl shadow-sm border border-brand-green/5 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-brand-terracotta">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-ink/80 rounded italic mb-8 grow leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold font-serif">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-brand-ink">{t.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
