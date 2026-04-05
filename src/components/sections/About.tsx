import React from "react";
import aboutImg from "../../assets/leventelogoval.webp";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img
              src={aboutImg}
              alt="Gyimesi Levente – 16 év tapasztalattal rendelkező masszázsterapeuta Dabas"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-terracotta rounded-full -z-10 opacity-20 blur-2xl" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-ink">
            A kezek mögött:{" "}
            <span className="text-brand-terracotta">Gyimesi Levente, masszázsterapeuta</span>
          </h2>
          <div className="space-y-6 text-brand-ink/80 leading-relaxed">
            <p>
              16 év versenyszerű súlyemelés nem csak fegyelemre tanított, hanem
              arra is, hogyan működik az emberi test a határai közelében.
              Megtanultam, mi okozza a sérüléseket, és ami még fontosabb: hogyan
              lehet őket megelőzni vagy hatékonyan kezelni.
            </p>
            <p>
              Ez a sportolói múlt adja azt a stabil anatómiai tudást, amivel ma
              az Ön panaszait kezelem. Nem csak "simogatok" – értem az izmok
              tapadását, a feszültség gócait és a mozgásszervi összefüggéseket.
            </p>
            <p>
              Hiszek abban, hogy a masszázs egy bizalmi kapcsolat. Dabason és
              környékén azért dolgozom, hogy vendégeim ne csak fizikailag, hanem
              mentálisan is felfrissülve álljanak fel az asztalról.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-ink/10 mt-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-brand-green">
                  16+ év
                </span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                  Szakmai tapasztalat
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-brand-green">
                  Pro
                </span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                  Masszázsterápia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
