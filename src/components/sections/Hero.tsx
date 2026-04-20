import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import heroImg from "../../assets/hatmasszazs.jpeg";
import { SITE_CONFIG } from "../../siteConfig";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 pb-14">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[calc(100svh-8rem)]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 size={14} />
              <span>Masszázs Dabas és környékén</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] mb-6 text-brand-ink">
              Hát- és nyakfájás kezelése Dabason - érezhető javulás már az első
              alkalom után
            </h1>

            <p className="text-lg text-brand-ink/70 mb-9 max-w-xl leading-relaxed">
              Sport- és gyógymasszázs személyre szabva, 30-60-90 perces
              kezelésekkel. Online időpontfoglalás, gyors visszaigazolás.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#booking"
                className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-terracotta/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Szabad időpontok megtekintése <ArrowRight size={20} />
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="border-2 border-brand-green/20 text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green/5 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} />
                Azonnali hívás
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {SITE_CONFIG.trustPoints.map((point) => (
                <p
                  key={point}
                  className="text-sm font-medium text-brand-ink/75 flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-brand-terracotta shrink-0" />
                  {point}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-2xl relative z-10">
              <img
                src={heroImg}
                alt="Gyógymasszázs kezelés Dabason a Harmony Massage kezelőjében"
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-ink/45 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[230px]">
              <p className="text-xs text-brand-ink/60 uppercase tracking-wider mb-1">
                Gyors kapcsolat
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="font-bold text-brand-green hover:text-brand-terracotta transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <p className="text-xs text-brand-ink/70 mt-2">
                Hívjon most, ha gyors időpontot szeretne.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10">
          <div className="rounded-2xl border border-brand-green/10 bg-white/90 backdrop-blur-sm p-4 md:p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {SITE_CONFIG.proofStats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl md:text-2xl font-serif text-brand-green">{item.value}</p>
                <p className="text-xs uppercase tracking-wider text-brand-ink/65 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


