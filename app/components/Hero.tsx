 "use client";

import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { WA_LINK, STATS } from "../lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-base"
    >
      {/* Gold glow blobs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none animate-glow"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #D4A017 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-dim border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Asaba&apos;s Favourite Shop
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-5xl md:text-6xl font-black text-text leading-[1.1] mb-6"
            >
              Books, Style &<br />
              <span className="shimmer-text">Everything More.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg leading-relaxed mb-10 max-w-md"
            >
              Your one-stop shop for school books, stationery, and fashion in Asaba.
              Quality products at prices that make sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-gold text-base font-bold px-7 py-3.5 rounded-full text-sm shadow-[0_4px_20px_rgba(212,160,23,0.4)] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,160,23,0.5)] transition-all duration-300"
              >
                Browse Products <ArrowRight size={15} />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-text border border-border-light font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                WhatsApp Order →
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 mt-10"
            >
              <div className="flex -space-x-2">
                {["CA", "EO", "NP"].map((init) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full bg-gold-dim border-2 border-border flex items-center justify-center text-gold text-[10px] font-bold"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text-faint text-xs mt-0.5">Trusted by 1,000+ customers</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6 text-center hover:bg-surface-2 hover:border-border-light hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-playfair text-3xl font-black text-gold mb-1">{stat.number}</div>
                <div className="text-text-faint text-xs uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}

            {/* Feature card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="col-span-2 bg-gold-dim border border-gold/25 rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-2xl flex-shrink-0">
                📦
              </div>
              <div>
                <div className="text-text font-semibold text-sm">WhatsApp Ordering Available</div>
                <div className="text-text-muted text-xs mt-0.5">Message us to check stock & place orders instantly</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base to-transparent pointer-events-none" />
    </section>
  );
}
