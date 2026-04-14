"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS, WA_LINK } from "../lib/data";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-base/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-3 no-underline"
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#b8860b] flex items-center justify-center font-playfair font-black text-base text-lg shadow-[0_2px_12px_rgba(212,160,23,0.4)]">
                        K
                    </div>
                    <div>
                        <div className="font-playfair text-lg font-bold text-text leading-none">
                            Kenny&apos;s
                        </div>
                        <div className="text-[10px] tracking-[2px] text-gold uppercase">
                            Funbooks & Wears
                        </div>
                    </div>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 list-none items-center">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative text-text-muted text-sm font-medium no-underline hover:text-gold transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gold text-base font-bold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_15px_rgba(212,160,23,0.35)]"
                        >
                            <ShoppingBag size={14} />
                            Order Now
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-text p-2 rounded-lg hover:bg-surface-2 transition-colors"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-base/98 backdrop-blur-md border-t border-border"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-text-muted text-sm font-medium no-underline hover:text-gold transition-colors py-2 border-b border-border"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gold text-base font-bold text-sm px-5 py-3 rounded-full mt-2 shadow-[0_4px_15px_rgba(212,160,23,0.35)]"
                            >
                                <ShoppingBag size={14} />
                                Order on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
