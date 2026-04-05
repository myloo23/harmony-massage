import React from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-serif text-3xl font-bold tracking-tight mb-6 block"
            >
              Harmony<span className="text-brand-terracotta">Massage</span>
            </a>
            <p className="text-white/80 max-w-sm mb-8">
              "A masszázs nem csak kényeztetés, hanem töltőállomás a testnek,
              léleknek és szellemnek."
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-80">
              Gyorslinkek
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-brand-terracotta"
                >
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-brand-terracotta"
                >
                  Árak
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-brand-terracotta"
                >
                  Rólam
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-white/80 hover:text-brand-terracotta"
                >
                  Foglalás
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-80">
              Kapcsolat
            </h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-terracotta shrink-0" />
                <span>Dabas, Hungary</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-terracotta shrink-0" />
                <span>+36 30 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Harmony Massage Dabas. Minden jog
            fenntartva.
          </p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">
              Adatvédelem
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">
              ÁSZF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
