import { MapPin, Phone, Instagram, Mail, Music2 } from "lucide-react";
import { SITE_CONFIG } from "../../siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="font-serif text-3xl font-bold tracking-tight mb-5 block">
              Harmony<span className="text-brand-terracotta">Massage</span>
            </a>
            <p className="text-white/85 max-w-md mb-8 leading-relaxed">
              Professzionális sport- és gyógymasszázs Dabason. Célzott
              kezelések hát-, nyak- és vállfájdalmakra, személyes figyelemmel.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 hover:bg-brand-terracotta transition-colors"
                aria-label="Instagram oldal megnyitása"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 hover:bg-brand-terracotta transition-colors"
                aria-label="TikTok oldal megnyitása"
              >
                <Music2 size={18} />
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/75">
              Gyors navigáció
            </h2>
            <ul className="space-y-3 text-white/85">
              <li>
                <a href="#services" className="hover:text-brand-terracotta transition-colors">
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-brand-terracotta transition-colors">
                  Árak
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-terracotta transition-colors">
                  Rólam
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-brand-terracotta transition-colors">
                  Online foglalás
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/75">
              Kapcsolat
            </h2>
            <ul className="space-y-4 text-white/85">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-terracotta shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.addressLabel}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-terracotta shrink-0 mt-0.5" />
                <a href={SITE_CONFIG.phoneHref} className="hover:text-brand-terracotta">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-terracotta shrink-0 mt-0.5" />
                <a href={SITE_CONFIG.emailHref} className="hover:text-brand-terracotta break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Harmony Massage Dabas. Minden jog fenntartva.
          </p>
          <div className="flex gap-6">
            <a href={SITE_CONFIG.legal.privacyPath} className="hover:text-white transition-colors">
              Adatvédelmi tájékoztató
            </a>
            <a href={SITE_CONFIG.legal.termsPath} className="hover:text-white transition-colors">
              ÁSZF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


