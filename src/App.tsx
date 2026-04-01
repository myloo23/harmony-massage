import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronDown, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { cn } from './lib/utils';
import { SERVICES, PRICING, FAQS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Szolgáltatások', href: '#services' },
    { name: 'Árak', href: '#pricing' },
    { name: 'Rólam', href: '#about' },
    { name: 'GYIK', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-brand-green tracking-tight">
          Harmony<span className="text-brand-terracotta">Massage</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
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
          className="md:hidden text-brand-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            {navLinks.map(link => (
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
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Masszázs Dabas & Vonzáskörzete</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-brand-ink">
            Szabaduljon meg a fájdalomtól, és <span className="italic text-brand-terracotta">nyerje vissza</span> energiáját.
          </h1>
          <p className="text-lg text-brand-ink/70 mb-10 max-w-lg leading-relaxed">
            Professzionális masszázskezelés Dabason, ahol a sportolói precizitás és az értő figyelem találkozik. Személyre szabott megoldások mozgásszervi panaszokra és stresszoldásra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-terracotta/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Időpontot foglalok <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="border-2 border-brand-green/20 text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green/5 transition-colors flex items-center justify-center"
            >
              Szolgáltatások
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-cream bg-brand-green/10 flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-brand-ink/60">
              <span className="text-brand-ink font-bold">500+</span> sikeres kezelés Dabason
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/massage-hero/800/1000" 
              alt="Professional Massage Therapy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
            <div className="flex items-center gap-2 text-brand-terracotta mb-2">
              <ShieldCheck size={24} />
              <span className="font-bold text-sm">Szakértelem</span>
            </div>
            <p className="text-xs text-brand-ink/70 leading-tight">
              Súlyemelő múltból fakadó mély anatómiai ismeretek.
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-brand-terracotta/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-brand-ink">Ismerősek ezek a tünetek?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { q: "Reggelente hát- vagy nyakfájással ébred a sok ülőmunka miatt?", icon: <Clock className="text-brand-terracotta" /> },
            { q: "Úgy érzi, az izmai állandóan feszültek a sporttól vagy a mindennapi hajtástól?", icon: <Heart className="text-brand-terracotta" /> },
            { q: "Vágyik egy helyre, ahol végre tényleg kikapcsolhat és feltöltődhet?", icon: <Sparkles className="text-brand-terracotta" /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white shadow-sm border border-brand-green/5"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <p className="text-brand-ink font-medium leading-relaxed">{item.q}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-lg text-brand-ink/70 italic">
          Ha legalább egyre "igen" a válasza, akkor jó helyen jár. Segítek visszanyerni a mozgás szabadságát.
        </p>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Szolgáltatásaink</h2>
          <p className="text-brand-ink/60 max-w-2xl mx-auto">
            Minden kezelés egyedi igényekre szabott, kombinálható technikákkal a maximális hatékonyság érdekében.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-brand-green/5 bg-brand-cream/30 hover:bg-brand-cream hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-brand-ink/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block bg-brand-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Bevezető árak
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Ön az időt választja, én a megoldást.</h2>
              <p className="text-white/70 mb-8 max-w-md">
                Nincsenek bonyolult csomagok. Ön az időtartamot fizeti, a technikákat (svéd, sport, köpöly, fascia stb.) pedig az Ön aktuális igényeihez igazítva, kombinálva alkalmazom a maximális hatás érdekében.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta" size={20} />
                  <span>Személyre szabott technikák felár nélkül</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-terracotta" size={20} />
                  <span>Dabas területén ingyenes kiszállás</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {PRICING.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="text-brand-terracotta" />
                    <span className="text-xl font-bold">{item.duration}</span>
                  </div>
                  <span className="text-2xl font-serif font-bold text-brand-terracotta">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/levente/800/800" 
              alt="Gyimesi Levente - Harmony Massage" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-terracotta rounded-full -z-10 opacity-20 blur-2xl" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-ink">A kezek mögött: <span className="text-brand-terracotta">Gyimesi Levente</span></h2>
          <div className="space-y-6 text-brand-ink/80 leading-relaxed">
            <p>
              16 év versenyszerű súlyemelés nem csak fegyelemre tanított, hanem arra is, hogyan működik az emberi test a határai közelében. Megtanultam, mi okozza a sérüléseket, és ami még fontosabb: hogyan lehet őket megelőzni vagy hatékonyan kezelni.
            </p>
            <p>
              Ez a sportolói múlt adja azt a stabil anatómiai tudást, amivel ma az Ön panaszait kezelem. Nem csak "simogatok" – értem az izmok tapadását, a feszültség gócait és a mozgásszervi összefüggéseket.
            </p>
            <p>
              Hiszek abban, hogy a masszázs egy bizalmi kapcsolat. Dabason és környékén azért dolgozom, hogy vendégeim ne csak fizikailag, hanem mentálisan is felfrissülve álljanak fel az asztalról.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-brand-green">16 év</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Sportmúlt</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-brand-green">Pro</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Anatómia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Gyakori kérdések</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-brand-green/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-brand-green/5 transition-colors"
              >
                <span className="font-bold text-brand-ink">{faq.question}</span>
                <ChevronDown className={cn("transition-transform", openIndex === index && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-brand-ink/70 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-terracotta rounded-[3rem] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Foglaljon időpontot online</h2>
            <p className="text-white/80 mb-10 text-lg">
              Válassza ki az Önnek megfelelő időpontot és szolgáltatást pár kattintással. Gyors, egyszerű és azonnali visszaigazolást kap.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold">Helyszín</p>
                  <p className="text-white/70">Dabas, vagy az Ön otthona</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold">Telefon</p>
                  <p className="text-white/70">+36 30 123 4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-brand-ink shadow-2xl">
            {/* Mock Booking Widget UI */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">Szolgáltatás választása</label>
                <select className="w-full p-4 rounded-xl border border-brand-green/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-terracotta">
                  {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">Dátum</label>
                  <input type="date" className="w-full p-4 rounded-xl border border-brand-green/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-terracotta" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">Időpont</label>
                  <select className="w-full p-4 rounded-xl border border-brand-green/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-terracotta">
                    <option>09:00</option>
                    <option>10:30</option>
                    <option>13:00</option>
                    <option>14:30</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-lg">
                Foglalás véglegesítése
              </button>
              <p className="text-center text-xs text-brand-ink/40">
                A foglalással elfogadja az Adatkezelési Tájékoztatót.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight mb-6 block">
              Harmony<span className="text-brand-terracotta">Massage</span>
            </a>
            <p className="text-white/60 max-w-sm mb-8">
              "A masszázs nem csak kényeztetés, hanem töltőállomás a testnek, léleknek és szellemnek."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-60">Gyorslinkek</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/80 hover:text-brand-terracotta">Szolgáltatások</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-brand-terracotta">Árak</a></li>
              <li><a href="#about" className="text-white/80 hover:text-brand-terracotta">Rólam</a></li>
              <li><a href="#booking" className="text-white/80 hover:text-brand-terracotta">Foglalás</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-60">Kapcsolat</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-terracotta" />
                <span>Dabas, Hungary</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-terracotta" />
                <span>+36 30 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Harmony Massage Dabas. Minden jog fenntartva.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Adatvédelem</a>
            <a href="#" className="hover:text-white">ÁSZF</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-terracotta/30 selection:text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Pricing />
        <About />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
