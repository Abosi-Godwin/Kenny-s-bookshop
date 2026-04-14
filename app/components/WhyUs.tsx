 "use client";

import { motion } from "motion/react";
import { BadgeDollarSign, Package, MessageCircle, ShieldCheck } from "lucide-react";
import { WHY_US } from "../lib/data";

const ICONS = [
  <BadgeDollarSign key="dollar" size={22} className="text-gold" />,
  <Package key="package" size={22} className="text-gold" />,
  <MessageCircle key="message" size={22} className="text-gold" />,
  <ShieldCheck key="shield" size={22} className="text-gold" />,
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 px-6 bg-base relative overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-72 h-72 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-gold-dim border border-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              Why Choose Us
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-text leading-tight mb-6">
              The Shop Asaba<br />
              <span className="text-gold">Keeps Coming Back To</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-10 max-w-md">
              Since we opened our doors on Ibusa Road, one thing has never changed —
              our commitment to giving you the best value for your money.
            </p>

            {/* Stats strip */}
            <div className="flex gap-10">
              {[
                { number: "3+", label: "Years Open" },
                { number: "1k+", label: "Customers" },
                { number: "500+", label: "Products" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-playfair text-3xl font-black text-gold">{s.number}</div>
                  <div className="text-text-faint text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6 hover:bg-surface-2 hover:border-gold/25 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-gold-dim border border-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  {ICONS[i]}
                </div>
                <h3 className="font-semibold text-text text-base mb-2">{reason.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
