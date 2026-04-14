 "use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-gold-dim border border-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Reviews
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-text mb-4">
            What <span className="text-gold">Asaba</span> is Saying
          </h2>
          <p className="text-text-muted text-base max-w-md mx-auto">
            Real customers, real experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-surface-2 rounded-2xl p-8 border border-border hover:border-gold/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gold/15">
                <Quote size={40} className="fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gold-dim border border-gold/30 flex items-center justify-center font-bold text-gold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-text text-sm">{t.name}</div>
                  <div className="text-text-faint text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
