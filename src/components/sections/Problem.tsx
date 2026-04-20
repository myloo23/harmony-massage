import { Clock, HeartPulse, Sparkles } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-brand-ink">
          Ismerősek ezek a tünetek?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              q: "Reggelente hát- vagy nyakfájással ébred a sok ülőmunka miatt?",
              icon: <Clock className="text-brand-terracotta" />,
            },
            {
              q: "Állandó izomfeszülést érez sport vagy stresszes időszak után?",
              icon: <HeartPulse className="text-brand-terracotta" />,
            },
            {
              q: "Szeretne végre fájdalom nélkül mozogni és nyugodtabban pihenni?",
              icon: <Sparkles className="text-brand-terracotta" />,
            },
          ].map((item) => (
            <article
              key={item.q}
              className="p-6 rounded-2xl bg-white shadow-sm border border-brand-green/5"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <p className="text-brand-ink font-medium leading-relaxed">{item.q}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-lg text-brand-ink/75 italic">
          Ha legalább egy kérdésre igen a válasza, jó helyen jár. A kezelés
          célja, hogy visszakapja a könnyebb, szabadabb mozgást.
        </p>
      </div>
    </section>
  );
};
