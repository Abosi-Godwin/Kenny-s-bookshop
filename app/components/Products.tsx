 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { PRODUCTS, WA_LINK } from "../lib/data";

const FILTERS = [
  { label: "All Products", value: "all" },
  { label: "Books & Stationery", value: "books" },
  { label: "Fashion & Wears", value: "wears" },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-gold-dim border border-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            What We Sell
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-text mb-4">
            Our <span className="text-gold">Products</span>
          </h2>
          <p className="text-text-muted text-base max-w-md mx-auto leading-relaxed">
            From school essentials to everyday fashion — we&apos;ve got Asaba covered.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                activeFilter === f.value
                  ? "bg-gold text-base border-gold shadow-[0_4px_15px_rgba(212,160,23,0.3)]"
                  : "bg-surface-2 text-text-muted border-border hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-surface-2 rounded-2xl overflow-hidden border border-border hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Emoji display */}
                <div className="h-36 flex items-center justify-center text-5xl bg-gold-muted border-b border-border group-hover:bg-gold-dim transition-all duration-300">
                  {product.emoji}
                </div>

                <div className="p-5">
                  {/* Tag */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 bg-gold-dim text-gold border border-gold/20">
                    {product.tag}
                  </span>

                  <h3 className="font-semibold text-text text-sm leading-snug mb-1">{product.name}</h3>
                  <p className="font-playfair text-base font-bold text-gold mb-4">{product.price}</p>

                  <a
                    href={`${WA_LINK}?text=Hi! I want to order: ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gold text-base text-xs font-bold py-2.5 rounded-xl hover:bg-gold-light transition-colors duration-200 shadow-[0_2px_10px_rgba(212,160,23,0.2)]"
                  >
                    <ShoppingCart size={13} />
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-text-muted text-sm mb-4">Don&apos;t see what you need? We likely have it in store.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-base font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_15px_rgba(212,160,23,0.3)]"
          >
            Ask Us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
