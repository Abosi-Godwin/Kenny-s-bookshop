import { Heart, Phone, MessageCircle, MapPin } from "lucide-react";
import { NAV_LINKS, WA_LINK, WHATSAPP_NUMBER } from "../lib/data";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-gold/30 pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-[#b8860b] flex items-center justify-center font-playfair font-black text-base text-xl shadow-[0_2px_12px_rgba(212,160,23,0.4)]">
                                K
                            </div>
                            <div>
                                <div className="font-playfair text-xl font-bold text-text">
                                    Kenny&apos;s
                                </div>
                                <div className="text-[10px] tracking-[2px] text-gold uppercase">
                                    Funbooks & Wears
                                </div>
                            </div>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            Your trusted shop for books, stationery, and fashion
                            in Asaba, Delta State. Quality items at genuine
                            prices.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-playfair text-lg text-text font-bold mb-5">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-3">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-text-muted text-sm no-underline hover:text-gold transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-playfair text-lg text-text font-bold mb-5">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a
                                href={`tel:+${WHATSAPP_NUMBER}`}
                                className="flex items-center gap-3 no-underline group"
                            >
                                <Phone
                                    size={15}
                                    className="text-gold flex-shrink-0"
                                />
                                <span className="text-text-muted text-sm group-hover:text-text transition-colors">
                                    +234 803 549 9704
                                </span>
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 no-underline group"
                            >
                                <MessageCircle
                                    size={15}
                                    className="text-success flex-shrink-0"
                                />
                                <span className="text-text-muted text-sm group-hover:text-text transition-colors">
                                    WhatsApp Order
                                </span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={15}
                                    className="text-gold flex-shrink-0 mt-0.5"
                                />
                                <span className="text-text-muted text-sm leading-relaxed">
                                    Ibusa Rd, off Achalla,
                                    <br />
                                    Asaba, Delta State
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border pt-8 flex flex-wrap justify-between items-center gap-4">
                    <p className="text-text-faint text-xs">
                        © 2025 Kenny&apos;s Funbooks & Wears. All rights
                        reserved.
                    </p>
                    <p className="text-text-faint text-xs flex items-center gap-1 flex-wrap">
                        Made with{" "}
                        <Heart size={11} className="fill-gold text-gold mx-1" />{" "}
                        in Asaba
                        {" · "}
                        Built by{" "}
                        <a
                            href="https://abosi.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-gold-light transition-colors hover:underline ml-1"
                        >
                            Abosi Godwin
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
