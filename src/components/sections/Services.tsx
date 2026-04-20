import { motion, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Activity,
  Dumbbell,
  Droplets,
  Smile,
  Footprints,
  Zap,
  Focus,
  Layers,
} from "lucide-react";
import { SERVICES } from "../../constants";
import serviceDetailImg from "../../assets/hajlitomasszazs.jpeg";

export const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Masszázs szolgáltatások Dabason
            </h2>
            <p className="text-brand-ink/70 max-w-xl leading-relaxed">
              Célzott, személyre szabott kezelések hátfájásra, nyak- és vállövi
              feszülésre, sportterhelés utáni regenerációra vagy stresszoldásra.
            </p>
            <a
              href="#booking"
              className="inline-flex mt-6 rounded-full bg-brand-green text-white px-6 py-3 font-semibold hover:bg-brand-green/90 transition-colors"
            >
              Megnézem, mi segít a panaszomra
            </a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl aspect-4/3"
          >
            <img
              src={serviceDetailImg}
              alt="Sport- és gyógymasszázs kezelés a Harmony Massage-nál Dabason"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const getIcon = (id: string) => {
              switch (id) {
                case "prevention":
                  return <Activity size={26} strokeWidth={1.5} />;
                case "swedish":
                  return <Sparkles size={26} strokeWidth={1.5} />;
                case "sports":
                  return <Dumbbell size={26} strokeWidth={1.5} />;
                case "honey":
                  return <Droplets size={26} strokeWidth={1.5} />;
                case "face":
                  return <Smile size={26} strokeWidth={1.5} />;
                case "foot":
                  return <Footprints size={26} strokeWidth={1.5} />;
                case "elbow":
                  return <Zap size={26} strokeWidth={1.5} />;
                case "cupping":
                  return <Focus size={26} strokeWidth={1.5} />;
                case "fascia":
                  return <Layers size={26} strokeWidth={1.5} />;
                default:
                  return <Sparkles size={26} strokeWidth={1.5} />;
              }
            };

            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative p-8 rounded-3xl border border-brand-green/10 bg-white hover:bg-linear-to-br hover:from-white hover:to-brand-cream/80 shadow-sm hover:shadow-2xl hover:shadow-brand-green/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-terracotta/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />

                <div className="w-14 h-14 bg-brand-cream/50 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md relative z-10">
                  {getIcon(service.id)}
                </div>

                <h3 className="text-xl font-bold mb-3 text-brand-ink group-hover:text-brand-terracotta transition-colors relative z-10">
                  {service.title}
                </h3>

                <p className="text-brand-ink/75 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};


