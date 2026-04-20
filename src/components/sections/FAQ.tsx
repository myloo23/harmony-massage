import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../constants";
import { cn } from "../../lib/utils";
import { SITE_CONFIG } from "../../siteConfig";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Gyakori kérdések</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <article
              key={faq.question}
              className="bg-brand-cream/50 rounded-2xl border border-brand-green/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-brand-green/5 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-bold text-brand-ink">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { height: "auto", opacity: 1 }
                    }
                    exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-brand-ink/75 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-brand-ink/70">
          Kérdése van? Hívjon a{" "}
          <a href={SITE_CONFIG.phoneHref} className="text-brand-terracotta font-semibold">
            {SITE_CONFIG.phoneDisplay}
          </a>{" "}
          számon vagy írjon a{" "}
          <a href={SITE_CONFIG.emailHref} className="text-brand-terracotta font-semibold">
            {SITE_CONFIG.email}
          </a>{" "}
          címre.
        </p>
      </div>
    </section>
  );
};


