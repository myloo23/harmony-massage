import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileStickyCTA, setShowMobileStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Show sticky CTA after scrolling past the hero (approx 600px)
      setShowMobileStickyCTA(scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
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
            ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-2xl font-bold text-brand-green tracking-tight"
          >
            Harmony<span className="text-brand-terracotta">Massage</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
              href="#booking"
              className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-green/90 transition-all shadow-md hover:shadow-lg"
            >
              Foglalás
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-green p-2 -m-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü megnyitása"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-terracotta text-white text-center py-4 rounded-xl font-bold mt-2"
              >
                Időpontfoglalás
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showMobileStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-linear-to-t from-brand-cream via-brand-cream to-transparent pb-6"
          >
            <a
              href="#booking"
              className="block w-full bg-brand-terracotta text-white text-center py-4 rounded-full font-bold shadow-lg shadow-brand-terracotta/30"
            >
              Időpont foglalása
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
