import React from "react";
import { Clock, CheckCircle2 } from "lucide-react";
import { PRICING } from "../../constants";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block bg-brand-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Bevezető árak
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ön az időt választja, én a megoldást.
              </h2>
              <p className="text-white/70 mb-8 max-w-md">
                Nincsenek bonyolult csomagok. Ön az időtartamot fizeti, a
                technikákat (svéd, sport, köpöly, fascia stb.) pedig az Ön
                aktuális igényeihez igazítva, kombinálva alkalmazom a maximális
                hatás érdekében.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta" size={20} />
                  <span>Személyre szabott technikák felár nélkül</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta" size={20} />
                  <span>Dabas területén ingyenes kiszállás</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {PRICING.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="text-brand-terracotta" />
                    <span className="text-xl font-bold">{item.duration}</span>
                  </div>
                  <span className="text-2xl font-serif font-bold text-brand-terracotta">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
