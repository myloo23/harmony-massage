import React from "react";
import { motion } from "motion/react";
import { Clock, Heart, Sparkles } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-brand-ink">
          Ismerősek ezek a tünetek?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              q: "Reggelente hát- vagy nyakfájással ébred a sok ülőmunka miatt?",
              icon: <Clock className="text-brand-terracotta" />,
            },
            {
              q: "Úgy érzi, az izmai állandóan feszültek a sporttól vagy a mindennapi hajtástól?",
              icon: <Heart className="text-brand-terracotta" />,
            },
            {
              q: "Vágyik egy helyre, ahol végre tényleg kikapcsolhat és feltöltődhet?",
              icon: <Sparkles className="text-brand-terracotta" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white shadow-sm border border-brand-green/5"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <p className="text-brand-ink font-medium leading-relaxed">
                {item.q}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-lg text-brand-ink/70 italic">
          Ha legalább egyre "igen" a válasza, akkor jó helyen jár. Segítek
          visszanyerni a mozgás szabadságát.
        </p>
      </div>
    </section>
  );
};
