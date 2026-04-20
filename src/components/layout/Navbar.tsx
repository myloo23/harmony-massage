import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../../lib/utils";
import { SITE_CONFIG } from "../../siteConfig";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileStickyCTA, setShowMobileStickyCTA] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      setShowMobileStickyCTA(scrollY > 240);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled
            ? "bg-brand-cream/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="font-serif text-2xl font-bold text-brand-green tracking-tight"
          >
            Harmony<span className="text-brand-terracotta">Massage</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-ink hover:text-brand-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-terracotta transition-colors"
            >
              <Phone size={16} />
              {SITE_CONFIG.phoneDisplay}
            </a>

            <a
              href="#booking"
              className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-green/90 transition-all shadow-md hover:shadow-lg"
            >
              Online foglalás
            </a>
          </div>

          <button
            className="md:hidden text-brand-green p-2 -m-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-green/10 shadow-xl p-6 flex flex-col gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-ink py-2 border-b border-brand-green/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={SITE_CONFIG.phoneHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-3 rounded-xl font-bold border border-brand-green/20"
              >
                Hívás: {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-terracotta text-white text-center py-4 rounded-xl font-bold"
              >
                Online foglalás
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showMobileStickyCTA && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-linear-to-t from-brand-cream via-brand-cream/95 to-transparent pb-[calc(1rem+env(safe-area-inset-bottom))]"
          >
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              <a
                href={SITE_CONFIG.phoneHref}
                className="block w-full border border-brand-green/20 bg-white text-brand-green text-center py-3 rounded-full font-semibold shadow-sm"
              >
                Hívás most
              </a>
              <a
                href="#booking"
                className="block w-full bg-brand-terracotta text-white text-center py-3 rounded-full font-bold shadow-lg shadow-brand-terracotta/25"
              >
                Online foglalás
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


