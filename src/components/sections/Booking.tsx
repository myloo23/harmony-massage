import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "../../siteConfig";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets?: () => void;
    };
  }
}

export const Booking = () => {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoadWidget(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px 180px 0px" },
    );

    observer.observe(currentSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadWidget) {
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    ) as HTMLScriptElement | null;

    if (existingScript) {
      setIsScriptLoaded(true);
      window.Calendly?.initInlineWidgets?.();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
      window.Calendly?.initInlineWidgets?.();
    };
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [shouldLoadWidget]);

  return (
    <section id="booking" ref={sectionRef} className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 px-2">
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6 text-brand-ink"
          >
            Foglaljon időpontot online
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-ink/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Válassz időpontot online, vagy hívj most, ha gyorsan szeretnél
            egyeztetni.
          </motion.p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[1000px] w-full mx-auto relative h-[650px] md:h-[700px] rounded-2xl overflow-hidden border border-brand-green/10 bg-white shadow-sm"
        >
          {!isScriptLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full">
              <div className="flex flex-col items-center gap-5">
                <div className="w-12 h-12 border-4 border-brand-terracotta/20 border-t-brand-terracotta rounded-full animate-spin" />
                <p className="text-brand-ink/70 font-medium tracking-wide text-center">
                  {shouldLoadWidget
                    ? "Időpontok betöltése..."
                    : "Néhány másodperc és megjelennek a szabad időpontok..."}
                </p>
              </div>
            </div>
          )}

          {shouldLoadWidget && (
            <div
              className="calendly-inline-widget w-full h-full relative z-20"
              data-url={SITE_CONFIG.calendlyUrl}
              style={{ minWidth: "320px" }}
            />
          )}
        </motion.div>

        <div className="mt-6 md:mt-12 grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-brand-green/5">
            <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Helyszín</p>
              <p className="text-brand-ink/70 text-sm md:text-base">
                {SITE_CONFIG.addressLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-brand-green/5">
            <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Telefon</p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="text-brand-ink/80 text-sm md:text-base hover:text-brand-terracotta"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-brand-green/5">
            <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Email</p>
              <a
                href={SITE_CONFIG.emailHref}
                className="text-brand-ink/80 text-sm md:text-base hover:text-brand-terracotta break-all"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


