import { motion, useReducedMotion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../constants";

export const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white border-t border-brand-green/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Vendégvélemények
          </h2>
          <p className="text-brand-ink/70 leading-relaxed">
            A kezelések célja az, hogy a fájdalom csökkenjen és a mozgás
            könnyebb legyen. Ezek a visszajelzések ezt tükrözik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.article
              key={t.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="bg-brand-cream p-8 rounded-3xl shadow-sm border border-brand-green/8 flex flex-col h-full"
            >
              <Quote className="text-brand-terracotta/60 mb-4" size={24} />
              <div className="flex gap-1 mb-5 text-brand-terracotta">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-brand-ink/85 italic mb-8 grow leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold font-serif">
                  {t.name.charAt(0)}
                </div>
                <p className="font-bold text-sm text-brand-ink">{t.name}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};


