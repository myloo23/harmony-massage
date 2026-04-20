import { ShieldCheck, Sparkles, MapPin, PhoneCall, Mail } from "lucide-react";
import { SITE_CONFIG } from "../../siteConfig";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Személyes figyelem",
    description:
      "Minden kezelés előtt rövid állapotfelméréssel indulunk, így valóban célzott segítséget kap.",
  },
  {
    icon: Sparkles,
    title: "Higiénikus környezet",
    description:
      "Tiszta eszközök, friss textíliák és rendezett kezelési környezet minden alkalommal.",
  },
  {
    icon: MapPin,
    title: "Helyi szolgáltatás",
    description: `Kényelmesen elérhető masszázs ${SITE_CONFIG.city} területén és vonzáskörzetében.`,
  },
  {
    icon: PhoneCall,
    title: "Gyors elérhetőség",
    description:
      "Időpontot online is foglalhat, de telefonon vagy emailben is gyorsan egyeztethet.",
  },
];

export const Trust = () => {
  return (
    <section aria-labelledby="trust-title" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="trust-title" className="text-4xl md:text-5xl font-serif mb-5">
            Miért választanak minket Dabason?
          </h2>
          <p className="text-brand-ink/70 text-lg leading-relaxed">
            Megbízható, emberközpontú kezelésre számíthat, ahol a cél a gyorsabb
            fájdalomcsökkenés és a tartósabb közérzetjavulás.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-green/10 bg-brand-cream/50 p-6 shadow-sm"
            >
              <item.icon className="text-brand-terracotta mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-brand-ink/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-green text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-base md:text-lg">
            Inkább gyors egyeztetést szeretne? Hívjon bizalommal:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-brand-terracotta px-5 py-3 font-semibold hover:bg-brand-terracotta/90 transition-colors"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={SITE_CONFIG.emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              Email küldése
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


