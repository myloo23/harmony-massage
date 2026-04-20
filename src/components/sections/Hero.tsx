import { IconArrowRight, IconCheckCircle, IconPhone } from "../icons/UiIcons";
import heroImg720 from "../../assets/optimized/hero-720.jpg";
import heroImg1080 from "../../assets/optimized/hero-1080.jpg";
import { SITE_CONFIG } from "../../siteConfig";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-14">
      <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-brand-terracotta/5 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-brand-green/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100svh-8rem)] items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-terracotta/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-terracotta">
              <IconCheckCircle size={14} />
              <span>Masszázs Dabas és környékén</span>
            </div>

            <h1 className="mb-6 font-serif text-4xl leading-[1.1] text-brand-ink sm:text-5xl md:text-6xl">
              Hát- és nyakfájás kezelése Dabason - érezhető javulás már az első
              alkalom után
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-brand-ink/70">
              Sport- és gyógymasszázs személyre szabva, 30-60-90 perces
              kezelésekkel. Online időpontfoglalás, gyors visszaigazolás.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-terracotta px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-terracotta/20 transition-transform hover:scale-[1.02]"
              >
                Szabad időpontok megtekintése <IconArrowRight size={20} />
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-green/20 px-8 py-4 text-lg font-bold text-brand-green transition-colors hover:bg-brand-green/5"
              >
                <IconPhone size={20} />
                Azonnali hívás
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SITE_CONFIG.trustPoints.map((point) => (
                <p
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-brand-ink/75"
                >
                  <IconCheckCircle size={16} className="shrink-0 text-brand-terracotta" />
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 aspect-4/5 overflow-hidden rounded-4xl shadow-2xl">
              <img
                src={heroImg1080}
                srcSet={`${heroImg720} 720w, ${heroImg1080} 1080w`}
                sizes="(max-width: 768px) 92vw, 45vw"
                alt="Gyógymasszázs kezelés Dabason a Harmony Massage kezelőjében"
                className="h-full w-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1080}
                height={1593}
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-ink/45 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 max-w-[230px] rounded-2xl bg-white p-6 shadow-xl">
              <p className="mb-1 text-xs uppercase tracking-wider text-brand-ink/60">
                Gyors kapcsolat
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="font-bold text-brand-green transition-colors hover:text-brand-terracotta"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <p className="mt-2 text-xs text-brand-ink/70">
                Hívjon most, ha gyors időpontot szeretne.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-brand-green/10 bg-white/90 p-4 backdrop-blur-sm md:grid-cols-4 md:p-5">
            {SITE_CONFIG.proofStats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl font-serif text-brand-green md:text-2xl">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-brand-ink/65">
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

