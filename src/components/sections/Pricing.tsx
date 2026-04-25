import { Clock, CheckCircle2, PhoneCall } from "lucide-react";
import { PRICING } from "../../constants";
import { SITE_CONFIG } from "../../siteConfig";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block bg-brand-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Átlátható díjazás
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ön az időt választja, mi a célzott megoldást adjuk.
              </h2>
              <p className="text-white/80 mb-8 max-w-md leading-relaxed">
                Nincsenek bonyolult csomagok. A kiválasztott időtartamon belül az
                aktuális állapothoz igazítjuk a technikákat (sport, svéd, fascia,
                köpöly), felár nélkül.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta-light" size={20} />
                  <span>Személyre szabott technikák felár nélkül</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta-light" size={20} />
                  <span>Dabas és környékén rugalmas egyeztetés</span>
                </div>
              </div>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-green px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
              >
                <PhoneCall size={18} />
                Azonnali hívás
              </a>
            </div>

            <div className="space-y-6">
              {PRICING.map((item) => (
                <article
                  key={item.duration}
                  className="flex justify-between items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="text-brand-terracotta-light" />
                    <span className="text-xl font-bold">{item.duration}</span>
                  </div>
                  <span className="text-2xl font-serif font-bold text-brand-terracotta-light">
                    {item.price}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


