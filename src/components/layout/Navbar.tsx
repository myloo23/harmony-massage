import { useEffect, useState } from "react";
import { IconClose, IconMenu, IconPhone } from "../icons/UiIcons";
import { cn } from "../../lib/utils";
import { SITE_CONFIG } from "../../siteConfig";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileStickyCTA, setShowMobileStickyCTA] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 30;
      const nextSticky = scrollY > 240;

      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      setShowMobileStickyCTA((prev) => (prev === nextSticky ? prev : nextSticky));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Szolgáltatások", href: "#services" },
    { name: "Árak", href: "#pricing" },
    { name: "Rólam", href: "#about" },
    { name: "GYIK", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
          isScrolled ? "bg-brand-cream/95 py-3 shadow-sm backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-brand-green"
          >
            Harmony<span className="text-brand-terracotta">Massage</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-ink transition-colors hover:text-brand-terracotta"
              >
                {link.name}
              </a>
            ))}

            <a
              href={SITE_CONFIG.phoneHref}
              aria-label="Telefonos kapcsolat"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-terracotta"
            >
              <IconPhone size={16} />
              {SITE_CONFIG.phoneDisplay}
            </a>

            <a
              href="#booking"
              className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-green/90 hover:shadow-lg"
            >
              Online foglalás
            </a>
          </div>

          <button
            className="-m-2 p-2 text-brand-green md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <IconClose size={28} /> : <IconMenu size={28} />}
          </button>
        </div>

        <div
          className={cn(
            "absolute top-full left-0 right-0 origin-top border-t border-brand-green/10 bg-brand-cream p-6 shadow-xl transition-all duration-200 md:hidden",
            isMobileMenuOpen
              ? "pointer-events-auto visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-brand-green/5 py-2 text-lg font-medium text-brand-ink"
              >
                {link.name}
              </a>
            ))}
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Telefonszám hívása mobilról"
              className="rounded-xl border border-brand-green/20 py-3 text-center font-bold"
            >
              Hívás: {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl bg-brand-terracotta py-4 text-center font-bold text-white"
            >
              Online foglalás
            </a>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 bg-linear-to-t from-brand-cream via-brand-cream/95 to-transparent p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-all duration-200 md:hidden",
          showMobileStickyCTA
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-6 opacity-0",
        )}
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href={SITE_CONFIG.phoneHref}
            aria-label="Hívás most"
            className="block w-full rounded-full border border-brand-green/20 bg-white py-3 text-center font-semibold text-brand-green shadow-sm"
          >
            Hívás most
          </a>
          <a
            href="#booking"
            className="block w-full rounded-full bg-brand-terracotta py-3 text-center font-bold text-white shadow-lg shadow-brand-terracotta/25"
          >
            Online foglalás
          </a>
        </div>
      </div>
    </>
  );
};

