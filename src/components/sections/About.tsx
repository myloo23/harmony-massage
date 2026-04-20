import aboutImg from "../../assets/leventegyimesi.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img
              src={aboutImg}
              alt="Gyimesi Levente masszázsterapeuta kezelést végez Dabason"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-terracotta rounded-full -z-10 opacity-20 blur-2xl" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-7 text-brand-ink">
            A kezelések mögött:
            <span className="text-brand-terracotta"> Gyimesi Levente</span>
          </h2>

          <div className="space-y-4 text-brand-ink/80 leading-relaxed">
            <p>
              16 év versenyszerű súlyemelő múltból érkeztem a masszázsterápiába.
              Ez olyan testismeretet ad, amely a gyakorlatban is gyorsabban segít
              feltárni a túlterhelt, fájdalmat okozó pontokat.
            </p>
            <p>
              Kezelés közben nem sablonban gondolkodom: röviden felmérjük az
              aktuális állapotot, majd az adott napon legjobban működő
              technikákat alkalmazom.
            </p>
            <p>
              Célom, hogy ne csak egy kellemes órát kapjon, hanem valódi,
              érezhető javulást a mindennapi mozgásban és közérzetben.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-ink/10 mt-7">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif font-bold text-brand-green">16+ év</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                Szakmai tapasztalat
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif font-bold text-brand-green">500+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                Kezelt vendég
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


