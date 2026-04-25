import { IconArrowRight, IconCheckCircle, IconPhone } from "../icons/UiIcons";
import heroImg720 from "../../assets/optimized/hero-720.jpg";
import heroImg1080 from "../../assets/optimized/hero-1080.jpg";
import { SITE_CONFIG } from "../../siteConfig";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[4.5rem] pb-8 sm:pt-24 md:pb-14">
      <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-brand-terracotta/5 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-brand-green/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6">
        <div className="grid items-start gap-5 md:min-h-[calc(100svh-8rem)] md:grid-cols-2 md:items-center md:gap-10">
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-terracotta/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-brand-ink sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs">
              <IconCheckCircle size={14} />
              <span>Masszázs Dabas és környékén</span>
            </div>

            <h1 className="mb-3 max-w-full font-serif text-[1.75rem] leading-[1.08] text-brand-ink sm:mb-6 sm:text-5xl sm:leading-[1.12] md:text-6xl md:leading-[1.15]">
              Hát- és nyakfájás kezelése Dabason –{" "}
              <span className="text-brand-terracotta italic">érezhető javulás</span>{" "}
              már az <span className="text-brand-terracotta">első alkalom</span> után
            </h1>

            <p className="mb-4 max-w-full text-[0.82rem] leading-relaxed text-brand-ink/75 sm:mb-9 sm:max-w-xl sm:text-lg sm:text-brand-ink/70">
              Sport- és gyógymasszázs személyre szabva, 30-60-90 perces
              kezelésekkel. Online időpontfoglalás, gyors visszaigazolás.
            </p>

            <div className="mb-4 flex w-full flex-row items-center gap-2 sm:mb-8 sm:w-auto sm:justify-start sm:gap-4">
              <a
                href="#booking"
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-terracotta px-2 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-terracotta/20 transition-transform hover:scale-[1.02] sm:flex-none sm:gap-2 sm:px-8 sm:py-4 sm:text-lg md:px-6 md:py-3 md:text-base"
              >
                <span className="sm:hidden">Foglalás</span>
                <span className="hidden sm:inline">Szabad időpontok megtekintése</span>
                <IconArrowRight size={18} />
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                aria-label="Azonnali hívás indítása"
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-brand-green/20 px-2 py-2.5 text-sm font-bold text-brand-green transition-colors hover:bg-brand-green/5 sm:flex-none sm:gap-2 sm:px-8 sm:py-4 sm:text-lg md:px-6 md:py-3 md:text-base"
              >
                <IconPhone size={18} />
                <span className="sm:hidden">Hívás</span>
                <span className="hidden sm:inline">Azonnali hívás</span>
              </a>
            </div>

            <div className="hidden gap-3 sm:grid sm:grid-cols-2">
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

          <div className="relative min-w-0">
            <div className="relative z-10 aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl sm:rounded-4xl md:aspect-4/5">
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

            <div className="absolute bottom-3 left-3 z-20 max-w-[190px] rounded-xl bg-white p-3 shadow-xl sm:-bottom-6 sm:-left-6 sm:max-w-[230px] sm:rounded-2xl sm:p-6">
              <p className="mb-0.5 text-[0.65rem] uppercase tracking-wider text-brand-ink/80 sm:mb-1 sm:text-xs">
                Gyors kapcsolat
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                aria-label="Telefonos kapcsolat"
                className="text-sm font-bold text-brand-green transition-colors hover:text-brand-terracotta sm:text-base"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <p className="mt-1 hidden text-xs text-brand-ink/70 sm:block">
                Hívjon most, ha gyors időpontot szeretne.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 sm:mt-10">
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-brand-green/10 bg-white/90 p-3 backdrop-blur-sm sm:gap-4 sm:p-4 md:grid-cols-4 md:p-5">
            {SITE_CONFIG.proofStats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-lg text-brand-green sm:text-xl md:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-brand-ink/65 sm:text-xs">
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
