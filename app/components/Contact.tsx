"use client";

import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { WA_LINK, WHATSAPP_NUMBER } from "../lib/data";

const CONTACT_ITEMS = [
    {
        icon: <MapPin size={20} className="text-gold" />,
        title: "Address",
        content:
            "No 2 Akunne Amichi Street, Ibusa Rd,\noff Achalla, Asaba, Delta State"
    },
    {
        icon: <Phone size={20} className="text-gold" />,
        title: "Phone",
        content: "+234 803 549 9704",
        href: `tel:+${WHATSAPP_NUMBER}`
    },
    {
        icon: <MessageCircle size={20} className="text-gold" />,
        title: "WhatsApp",
        content: "Chat with us to place orders",
        href: WA_LINK,
        linkLabel: "Open WhatsApp →"
    },
    {
        icon: <Clock size={20} className="text-gold" />,
        title: "Opening Hours",
        content: "Mon – Sat: 8:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-base">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block bg-gold-dim border border-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Find Us
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl font-black text-text mb-4">
                        Visit Our <span className="text-gold">Store</span>
                    </h2>
                    <p className="text-text-muted text-base max-w-md mx-auto">
                        We&apos;re right here in Asaba — come say hi or order on
                        WhatsApp.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        {CONTACT_ITEMS.map(item => (
                            <div
                                key={item.title}
                                className="flex gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-gold/25 hover:bg-surface-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 min-w-12 bg-gold-dim border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-gold mb-1">
                                        {item.title}
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-text-muted no-underline hover:text-text transition-colors whitespace-pre-line"
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-sm text-text-muted whitespace-pre-line leading-relaxed">
                                            {item.content}
                                        </p>
                                    )}
                                    {item.linkLabel && (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-xs font-bold text-gold hover:text-gold-light no-underline transition-colors"
                                        >
                                            {item.linkLabel}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden border border-border gold-border-glow h-[480px]"
                    >
                        <iframe
                            title="Kenny's Funbooks & Wears location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.721!2d6.6742!3d6.1976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043ef0848a3df3d%3A0xcf82b4c0b4f27fdc!2sKennys%20funbooks%20%26wears!5e0!3m2!1sen!2sng!4v1714000000000!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
