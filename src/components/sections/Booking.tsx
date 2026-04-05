import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

export const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6 text-brand-ink"
          >
            Foglaljon időpontot online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-ink/60 max-w-2xl mx-auto text-lg"
          >
            Válassza ki az Önnek megfelelő időpontot és szolgáltatást pár
            kattintással. Gyors, egyszerű és azonnali visszaigazolást kap.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[1000px] w-full mx-auto relative h-[650px] md:h-[700px]"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full">
              <div className="flex flex-col items-center gap-5">
                <div className="w-12 h-12 border-4 border-brand-terracotta/20 border-t-brand-terracotta rounded-full animate-spin" />
                <p className="text-brand-ink/70 font-medium tracking-wide">
                  Időpontok betöltése...
                </p>
              </div>
            </div>
          )}
          <div
            className="calendly-inline-widget w-full h-full relative z-20"
            data-url="https://calendly.com/harmonymassagedabas?hide_gdpr_banner=1&primary_color=c06c4d"
            style={{ minWidth: "320px" }}
          />
        </motion.div>

        <div className="mt-6 md:mt-12 grid sm:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-brand-green/5"
          >
            <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Helyszín</p>
              <p className="text-brand-ink/70 text-sm md:text-base">Dabas, vagy az Ön otthona</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-brand-green/5"
          >
            <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Telefon</p>
              <p className="text-brand-ink/70 text-sm md:text-base">+36 30 123 4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
