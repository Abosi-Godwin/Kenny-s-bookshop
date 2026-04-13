"use client"

import { useState, useEffect, useRef } from "react";
import {
    BookOpen,
    Shirt,
    MapPin,
    Phone,
    MessageCircle,
    Star,
    ChevronDown,
    Menu,
    X,
    ArrowRight,
    Package,
    Sparkles,
    Clock,
    ShoppingBag,
    Heart,
    Instagram,
    Facebook,
    Mail,
    CheckCircle,
    Zap,
    Users,
    Award
} from "lucide-react";

const WHATSAPP = "2348035499704";
const WA_LINK = `https://wa.me/${WHATSAPP}`;

const COLORS = {
    forest: "#1B4332",
    gold: "#D4A017",
    cream: "#FDF6EC",
    rust: "#C0392B",
    sand: "#E8D5B0",
    charcoal: "#1A1A2E",
    lightGold: "#F5E6C0"
};

const products = [
    {
        id: 1,
        category: "books",
        name: "School Exercise Books",
        price: "₦150 – ₦350",
        icon: "📚",
        tag: "Bestseller"
    },
    {
        id: 2,
        category: "books",
        name: "Textbooks & Novels",
        price: "₦500 – ₦3,500",
        icon: "📖",
        tag: "In Stock"
    },
    {
        id: 3,
        category: "books",
        name: "Stationery & Supplies",
        price: "₦50 – ₦800",
        icon: "✏️",
        tag: "New"
    },
    {
        id: 4,
        category: "wears",
        name: "Children's Fashion",
        price: "₦1,500 – ₦6,000",
        icon: "👗",
        tag: "Trending"
    },
    {
        id: 5,
        category: "wears",
        name: "Men's Casual Wear",
        price: "₦2,000 – ₦8,000",
        icon: "👔",
        tag: "In Stock"
    },
    {
        id: 6,
        category: "wears",
        name: "Ladies' Outfits",
        price: "₦2,500 – ₦10,000",
        icon: "👘",
        tag: "Hot"
    },
    {
        id: 7,
        category: "books",
        name: "Art & Drawing Sets",
        price: "₦300 – ₦1,200",
        icon: "🎨",
        tag: "Popular"
    },
    {
        id: 8,
        category: "wears",
        name: "School Uniforms",
        price: "₦1,800 – ₦4,500",
        icon: "🏫",
        tag: "Back to School"
    }
];

const testimonials = [
    {
        name: "Chioma A.",
        role: "Parent, Asaba",
        text: "Best place to get my kids' school books and uniforms all at once. Very affordable prices!",
        rating: 5
    },
    {
        name: "Emeka O.",
        role: "Student, Delta State",
        text: "Kenny's always has exactly what I need for school. Quick service and friendly staff!",
        rating: 5
    },
    {
        name: "Ngozi P.",
        role: "Teacher, Ibusa Rd",
        text: "I buy my class supplies here every term. Quality items and genuine prices. Highly recommend!",
        rating: 5
    }
];

function useInView(ref, threshold = 0.15) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setVisible(true);
            },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [ref, threshold]);
    return visible;
}

function AnimatedSection({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const visible = useInView(ref);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
            }}
        >
            {children}
        </div>
    );
}

export default function KennysWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const filtered =
        activeFilter === "all"
            ? products
            : products.filter(p => p.category === activeFilter);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Products", href: "#products" },
        { label: "About", href: "#about" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <div
            style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                background: COLORS.cream,
                color: COLORS.charcoal,
                overflowX: "hidden"
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, .display { font-family: 'Playfair Display', serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.cream}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.gold}; border-radius: 3px; }
        .wa-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .badge-shimmer {
          background: linear-gradient(90deg, ${COLORS.gold}, #fff9e6, ${COLORS.gold});
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(27,67,50,0.15);
        }
        .nav-link {
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: ${COLORS.gold};
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .btn-primary {
          background: ${COLORS.gold};
          color: ${COLORS.forest};
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #b8860b;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212,160,23,0.4);
        }
        .btn-outline {
          background: transparent;
          color: ${COLORS.gold};
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          border: 2px solid ${COLORS.gold};
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: ${COLORS.gold};
          color: ${COLORS.forest};
          transform: translateY(-2px);
        }
        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${COLORS.gold};
        }
      `}</style>

            {/* ── NAVBAR ── */}
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: scrolled
                        ? `rgba(27,67,50,0.97)`
                        : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    transition: "all 0.4s ease",
                    padding: scrolled ? "12px 5%" : "20px 5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${COLORS.gold}, #b8860b)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 900,
                            color: COLORS.forest,
                            fontSize: 16
                        }}
                    >
                        K
                    </div>
                    <div>
                        <div
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 18,
                                fontWeight: 700,
                                color: "#fff",
                                lineHeight: 1
                            }}
                        >
                            Kenny's
                        </div>
                        <div
                            style={{
                                fontSize: 9,
                                letterSpacing: 3,
                                color: COLORS.gold,
                                textTransform: "uppercase"
                            }}
                        >
                            Funbooks & Wears
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div
                    style={{ display: "flex", gap: 32, alignItems: "center" }}
                    className="desktop-nav"
                >
                    {navLinks.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="nav-link"
                            style={{
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 14,
                                fontWeight: 500
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a href={WA_LINK} target="_blank" rel="noreferrer">
                        <button
                            className="btn-primary"
                            style={{
                                padding: "10px 24px",
                                borderRadius: 30,
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            }}
                        >
                            <MessageCircle size={16} /> Order Now
                        </button>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        display: "none"
                    }}
                    id="mobile-menu-btn"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav Drawer */}
            {menuOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: COLORS.forest,
                        zIndex: 99,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 32
                    }}
                >
                    {navLinks.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: "#fff",
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 28,
                                fontWeight: 700,
                                textDecoration: "none"
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <button
                            className="btn-primary"
                            style={{
                                padding: "14px 36px",
                                borderRadius: 30,
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                gap: 10
                            }}
                        >
                            <MessageCircle size={20} /> Order on WhatsApp
                        </button>
                    </a>
                </div>
            )}

            {/* ── HERO ── */}
            <section
                id="home"
                style={{
                    minHeight: "100vh",
                    position: "relative",
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${COLORS.forest} 0%, #0d2b1e 50%, #1a3d2b 100%)`,
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {/* Decorative circles */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: `${200 + i * 120}px`,
                            height: `${200 + i * 120}px`,
                            borderRadius: "50%",
                            border: `1px solid rgba(212,160,23,${0.08 - i * 0.01})`,
                            top: "50%",
                            left: "60%",
                            transform: "translate(-50%, -50%)",
                            animation: `float ${4 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}

                {/* Gold splatter top-right */}
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -80,
                        width: 400,
                        height: 400,
                        background: `radial-gradient(circle at center, rgba(212,160,23,0.15) 0%, transparent 70%)`,
                        borderRadius: "50%"
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        padding: "120px 5% 80px",
                        display: "flex",
                        alignItems: "center",
                        gap: 60,
                        flexWrap: "wrap"
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1 1 480px", maxWidth: 620 }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(212,160,23,0.15)",
                                border: `1px solid rgba(212,160,23,0.3)`,
                                borderRadius: 30,
                                padding: "6px 18px",
                                marginBottom: 32
                            }}
                        >
                            <MapPin size={14} color={COLORS.gold} />
                            <span
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 13,
                                    color: COLORS.gold,
                                    fontWeight: 600
                                }}
                            >
                                Ibusa Rd, Asaba, Delta State
                            </span>
                        </div>

                        <h1
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(42px, 6vw, 78px)",
                                fontWeight: 900,
                                lineHeight: 1.05,
                                color: "#fff",
                                marginBottom: 28
                            }}
                        >
                            Books,
                            <br />
                            <span style={{ color: COLORS.gold }}>
                                Stationery
                            </span>
                            <br />& Fashion
                        </h1>

                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 18,
                                lineHeight: 1.8,
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: 500,
                                marginBottom: 44
                            }}
                        >
                            Your one-stop shop in Asaba for quality school
                            books, supplies, and trendy wears for all ages.
                            Browse, pick your favourites, and order directly on
                            WhatsApp.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: 16,
                                flexWrap: "wrap"
                            }}
                        >
                            <a href={WA_LINK} target="_blank" rel="noreferrer">
                                <button
                                    className="btn-primary wa-pulse"
                                    style={{
                                        padding: "16px 36px",
                                        borderRadius: 50,
                                        fontSize: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12
                                    }}
                                >
                                    <MessageCircle size={20} />
                                    Chat on WhatsApp
                                    <ArrowRight size={18} />
                                </button>
                            </a>
                            <a href="#products">
                                <button
                                    className="btn-outline"
                                    style={{
                                        padding: "16px 36px",
                                        borderRadius: 50,
                                        fontSize: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10
                                    }}
                                >
                                    <ShoppingBag size={18} /> Browse Products
                                </button>
                            </a>
                        </div>

                        {/* Stats row */}
                        <div
                            style={{
                                display: "flex",
                                gap: 40,
                                marginTop: 56,
                                flexWrap: "wrap"
                            }}
                        >
                            {[
                                { val: "1000+", label: "Products" },
                                { val: "500+", label: "Happy Customers" },
                                { val: "5★", label: "Rated on Google" }
                            ].map(s => (
                                <div key={s.label}>
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontSize: 32,
                                            fontWeight: 900,
                                            color: COLORS.gold
                                        }}
                                    >
                                        {s.val}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.5)",
                                            marginTop: 2
                                        }}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – hero visual card */}
                    <div
                        style={{
                            flex: "1 1 300px",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: 320,
                                height: 380
                            }}
                        >
                            {/* Main card */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `linear-gradient(145deg, rgba(212,160,23,0.12), rgba(27,67,50,0.3))`,
                                    border: `1px solid rgba(212,160,23,0.25)`,
                                    borderRadius: 32,
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    gap: 16,
                                    padding: 32
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 64,
                                        animation:
                                            "float 3s ease-in-out infinite"
                                    }}
                                >
                                    📚
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: "#fff",
                                        textAlign: "center"
                                    }}
                                >
                                    Kenny's Funbooks & Wears
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.6)",
                                        textAlign: "center"
                                    }}
                                >
                                    Books · Stationery · Fashion
                                </div>
                                <div
                                    style={{
                                        background: COLORS.gold,
                                        color: COLORS.forest,
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 13,
                                        padding: "8px 22px",
                                        borderRadius: 30,
                                        marginTop: 8,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8
                                    }}
                                >
                                    <Clock size={14} /> Open Today
                                </div>
                            </div>

                            {/* Floating tags */}
                            {[
                                {
                                    emoji: "👗",
                                    text: "Fashion",
                                    top: -20,
                                    right: -30,
                                    delay: "0s"
                                },
                                {
                                    emoji: "✏️",
                                    text: "Stationery",
                                    bottom: 40,
                                    left: -40,
                                    delay: "0.5s"
                                },
                                {
                                    emoji: "⭐",
                                    text: "Top Rated",
                                    top: 80,
                                    right: -50,
                                    delay: "1s"
                                }
                            ].map(tag => (
                                <div
                                    key={tag.text}
                                    style={{
                                        position: "absolute",
                                        top: tag.top,
                                        right: tag.right,
                                        bottom: tag.bottom,
                                        left: tag.left,
                                        background: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(8px)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: 16,
                                        padding: "8px 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        animation: `float 4s ease-in-out infinite`,
                                        animationDelay: tag.delay
                                    }}
                                >
                                    <span>{tag.emoji}</span>
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 12,
                                            color: "#fff",
                                            fontWeight: 600
                                        }}
                                    >
                                        {tag.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 36,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        animation: "float 2s ease-in-out infinite"
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 12,
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: 2,
                            textTransform: "uppercase"
                        }}
                    >
                        scroll
                    </span>
                    <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
                </div>
            </section>

            {/* ── MARQUEE STRIP ── */}
            <div
                style={{
                    background: COLORS.gold,
                    padding: "14px 0",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-inner { display: flex; animation: marquee 20s linear infinite; }
        `}</style>
                <div className="marquee-inner">
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={i}
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: 13,
                                color: COLORS.forest,
                                whiteSpace: "nowrap",
                                padding: "0 32px",
                                display: "flex",
                                alignItems: "center",
                                gap: 12
                            }}
                        >
                            📚 School Books &nbsp;✦&nbsp; 👔 Men's Fashion
                            &nbsp;✦&nbsp; 👗 Ladies Wear &nbsp;✦&nbsp; ✏️
                            Stationery &nbsp;✦&nbsp; 🏫 School Uniforms
                            &nbsp;✦&nbsp; 🎨 Art Supplies
                        </span>
                    ))}
                </div>
            </div>

            {/* ── WHY CHOOSE US ── */}
            <section style={{ padding: "100px 5%", background: COLORS.cream }}>
                <AnimatedSection
                    style={{ textAlign: "center", marginBottom: 70 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>
                        Why Kenny's?
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(32px, 4vw, 54px)",
                            fontWeight: 900,
                            color: COLORS.forest,
                            lineHeight: 1.1
                        }}
                    >
                        Asaba's Trusted Shop
                        <br />
                        <span style={{ color: COLORS.gold }}>
                            Since Day One
                        </span>
                    </h2>
                </AnimatedSection>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 28,
                        maxWidth: 1100,
                        margin: "0 auto"
                    }}
                >
                    {[
                        {
                            icon: <Package size={28} />,
                            title: "Wide Selection",
                            desc: "From school exercise books to trendy wears — all under one roof in Asaba."
                        },
                        {
                            icon: <Zap size={28} />,
                            title: "Fast WhatsApp Orders",
                            desc: "Browse, pick, and order instantly on WhatsApp. Delivery or pickup available."
                        },
                        {
                            icon: <Award size={28} />,
                            title: "Quality Guaranteed",
                            desc: "We stock only genuine, high-quality books, stationery, and branded clothing."
                        },
                        {
                            icon: <Users size={28} />,
                            title: "Trusted by Families",
                            desc: "Hundreds of Asaba families and schools shop with us every school term."
                        }
                    ].map((item, i) => (
                        <AnimatedSection key={item.title} delay={i * 0.12}>
                            <div
                                className="card-hover"
                                style={{
                                    background: "#fff",
                                    borderRadius: 24,
                                    padding: 36,
                                    border: `1px solid ${COLORS.sand}`
                                }}
                            >
                                <div
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 18,
                                        background: `linear-gradient(135deg, ${COLORS.lightGold}, ${COLORS.sand})`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: COLORS.forest,
                                        marginBottom: 24
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: COLORS.forest,
                                        marginBottom: 12
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 15,
                                        color: "#555",
                                        lineHeight: 1.7
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ── PRODUCTS ── */}
            <section
                id="products"
                style={{
                    padding: "100px 5%",
                    background: `linear-gradient(180deg, ${COLORS.lightGold}30 0%, ${COLORS.cream} 100%)`
                }}
            >
                <AnimatedSection
                    style={{ textAlign: "center", marginBottom: 56 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>
                        Our Products
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(32px, 4vw, 54px)",
                            fontWeight: 900,
                            color: COLORS.forest,
                            lineHeight: 1.1,
                            marginBottom: 20
                        }}
                    >
                        Browse Our{" "}
                        <span style={{ color: COLORS.gold }}>Catalogue</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 17,
                            color: "#666",
                            maxWidth: 500,
                            margin: "0 auto"
                        }}
                    >
                        Tap any item and message us on WhatsApp to check
                        availability and pricing.
                    </p>
                </AnimatedSection>

                {/* Filter tabs */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 12,
                        marginBottom: 52,
                        flexWrap: "wrap"
                    }}
                >
                    {[
                        {
                            key: "all",
                            label: "All Products",
                            icon: <ShoppingBag size={16} />
                        },
                        {
                            key: "books",
                            label: "Books & Stationery",
                            icon: <BookOpen size={16} />
                        },
                        {
                            key: "wears",
                            label: "Fashion & Wears",
                            icon: <Shirt size={16} />
                        }
                    ].map(f => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            style={{
                                padding: "10px 26px",
                                borderRadius: 30,
                                fontSize: 14,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                cursor: "pointer",
                                border: "2px solid",
                                borderColor:
                                    activeFilter === f.key
                                        ? COLORS.forest
                                        : COLORS.sand,
                                background:
                                    activeFilter === f.key
                                        ? COLORS.forest
                                        : "#fff",
                                color:
                                    activeFilter === f.key
                                        ? "#fff"
                                        : COLORS.charcoal,
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            }}
                        >
                            {f.icon} {f.label}
                        </button>
                    ))}
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 28,
                        maxWidth: 1200,
                        margin: "0 auto"
                    }}
                >
                    {filtered.map((p, i) => (
                        <AnimatedSection key={p.id} delay={i * 0.08}>
                            <div
                                className="card-hover"
                                style={{
                                    background: "#fff",
                                    borderRadius: 24,
                                    border: `1px solid ${COLORS.sand}`,
                                    overflow: "hidden"
                                }}
                            >
                                {/* Product header */}
                                <div
                                    style={{
                                        padding: "40px 28px 28px",
                                        background:
                                            p.category === "books"
                                                ? `linear-gradient(135deg, ${COLORS.lightGold}, ${COLORS.sand})`
                                                : `linear-gradient(135deg, rgba(27,67,50,0.08), rgba(27,67,50,0.03))`,
                                        textAlign: "center",
                                        position: "relative"
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 52,
                                            marginBottom: 12
                                        }}
                                    >
                                        {p.icon}
                                    </div>
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            background: COLORS.forest,
                                            color: "#fff",
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            padding: "4px 12px",
                                            borderRadius: 20
                                        }}
                                    >
                                        {p.tag}
                                    </span>
                                </div>

                                {/* Product info */}
                                <div style={{ padding: "24px 28px" }}>
                                    <h3
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: COLORS.charcoal,
                                            marginBottom: 8
                                        }}
                                    >
                                        {p.name}
                                    </h3>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: COLORS.gold,
                                            marginBottom: 20
                                        }}
                                    >
                                        {p.price}
                                    </div>
                                    <a
                                        href={`${WA_LINK}?text=Hi%20Kenny's!%20I'm%20interested%20in%20${encodeURIComponent(p.name)}.%20Is%20it%20available%3F`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            style={{
                                                width: "100%",
                                                padding: "12px",
                                                background: "#25D366",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: 14,
                                                fontFamily:
                                                    "'DM Sans', sans-serif",
                                                fontWeight: 700,
                                                fontSize: 14,
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 8,
                                                transition: "all 0.3s ease"
                                            }}
                                            onMouseEnter={e =>
                                                (e.currentTarget.style.background =
                                                    "#1ebe5d")
                                            }
                                            onMouseLeave={e =>
                                                (e.currentTarget.style.background =
                                                    "#25D366")
                                            }
                                        >
                                            <MessageCircle size={16} /> Order on
                                            WhatsApp
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section
                id="about"
                style={{
                    padding: "100px 5%",
                    background: `linear-gradient(135deg, ${COLORS.forest} 0%, #0d2b1e 100%)`,
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        background: `radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)`,
                        borderRadius: "50%"
                    }}
                />

                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                        display: "flex",
                        gap: 80,
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <AnimatedSection style={{ flex: "1 1 380px" }}>
                        <div
                            className="section-label"
                            style={{ marginBottom: 20 }}
                        >
                            Our Story
                        </div>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(32px, 4vw, 52px)",
                                fontWeight: 900,
                                color: "#fff",
                                lineHeight: 1.1,
                                marginBottom: 28
                            }}
                        >
                            A Beloved Corner Store
                            <br />
                            in{" "}
                            <span style={{ color: COLORS.gold }}>
                                Asaba's Heart
                            </span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 16,
                                color: "rgba(255,255,255,0.7)",
                                lineHeight: 1.9,
                                marginBottom: 24
                            }}
                        >
                            Located on Ibusa Road, off Achalla, Asaba — Kenny's
                            Funbooks & Wears is your neighbourhood's go-to
                            destination for school essentials and quality
                            fashion.
                        </p>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 16,
                                color: "rgba(255,255,255,0.7)",
                                lineHeight: 1.9,
                                marginBottom: 40
                            }}
                        >
                            We combine a well-stocked bookstore with an exciting
                            fashion range so families can meet all their needs
                            in one visit. From exercise books and textbooks to
                            school uniforms and casual wear — we've got it all.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 16
                            }}
                        >
                            {[
                                "Exercise books, textbooks & study materials",
                                "Art supplies & stationery",
                                "Children's, ladies' & men's fashion",
                                "School uniforms tailored to your school"
                            ].map(item => (
                                <div
                                    key={item}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14
                                    }}
                                >
                                    <CheckCircle
                                        size={20}
                                        color={COLORS.gold}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 15,
                                            color: "rgba(255,255,255,0.8)"
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection
                        delay={0.2}
                        style={{
                            flex: "1 1 300px",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            style={{
                                width: 340,
                                borderRadius: 32,
                                overflow: "hidden",
                                border: `2px solid rgba(212,160,23,0.3)`,
                                background: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                padding: 40,
                                textAlign: "center"
                            }}
                        >
                            <div style={{ fontSize: 80, marginBottom: 24 }}>
                                🏪
                            </div>
                            <h3
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 26,
                                    fontWeight: 700,
                                    color: "#fff",
                                    marginBottom: 12
                                }}
                            >
                                Visit Us Today
                            </h3>
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 14,
                                    color: "rgba(255,255,255,0.6)",
                                    lineHeight: 1.8,
                                    marginBottom: 28
                                }}
                            >
                                No 2 Akunne Amichi Street,
                                <br />
                                Ibusa Rd, off Achalla, Asaba
                                <br />
                                Delta State, Nigeria
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 14
                                }}
                            >
                                <a
                                    href={`tel:+${WHATSAPP}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            background: "rgba(212,160,23,0.15)",
                                            border: `1px solid rgba(212,160,23,0.3)`,
                                            borderRadius: 14,
                                            padding: "14px 20px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            color: COLORS.gold,
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 600,
                                            fontSize: 15
                                        }}
                                    >
                                        <Phone size={18} /> +234 803 549 9704
                                    </div>
                                </a>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            background: "#25D366",
                                            borderRadius: 14,
                                            padding: "14px 20px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            color: "#fff",
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 15,
                                            justifyContent: "center"
                                        }}
                                    >
                                        <MessageCircle size={18} /> WhatsApp Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="testimonials"
                style={{ padding: "100px 5%", background: COLORS.cream }}
            >
                <AnimatedSection
                    style={{ textAlign: "center", marginBottom: 60 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>
                        What Customers Say
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(32px, 4vw, 52px)",
                            fontWeight: 900,
                            color: COLORS.forest
                        }}
                    >
                        Loved by{" "}
                        <span style={{ color: COLORS.gold }}>
                            Asaba Families
                        </span>
                    </h2>
                </AnimatedSection>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 28,
                        maxWidth: 1000,
                        margin: "0 auto"
                    }}
                >
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={t.name} delay={i * 0.15}>
                            <div
                                className="card-hover"
                                style={{
                                    background: "#fff",
                                    borderRadius: 24,
                                    padding: 36,
                                    border: `1px solid ${COLORS.sand}`,
                                    position: "relative"
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 48,
                                        color: COLORS.gold,
                                        fontFamily: "'Georgia', serif",
                                        lineHeight: 1,
                                        marginBottom: 16,
                                        opacity: 0.3
                                    }}
                                >
                                    "
                                </div>
                                <p
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 16,
                                        color: "#444",
                                        lineHeight: 1.8,
                                        marginBottom: 24
                                    }}
                                >
                                    {t.text}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 4,
                                        marginBottom: 16
                                    }}
                                >
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star
                                            key={j}
                                            size={16}
                                            color={COLORS.gold}
                                            fill={COLORS.gold}
                                        />
                                    ))}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "50%",
                                            background: `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.gold})`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontWeight: 700,
                                            fontSize: 18
                                        }}
                                    >
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "'DM Sans', sans-serif",
                                                fontWeight: 700,
                                                fontSize: 15,
                                                color: COLORS.charcoal
                                            }}
                                        >
                                            {t.name}
                                        </div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "'DM Sans', sans-serif",
                                                fontSize: 13,
                                                color: "#888"
                                            }}
                                        >
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section
                style={{
                    padding: "80px 5%",
                    textAlign: "center",
                    background: `linear-gradient(135deg, ${COLORS.gold} 0%, #b8860b 100%)`,
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(27,67,50,0.15) 0%, transparent 60%)"
                    }}
                />
                <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
                    <Sparkles
                        size={40}
                        color={COLORS.forest}
                        style={{ margin: "0 auto 20px" }}
                    />
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(28px, 4vw, 50px)",
                            fontWeight: 900,
                            color: COLORS.forest,
                            marginBottom: 18
                        }}
                    >
                        Ready to Shop?
                        <br />
                        Message Us Now!
                    </h2>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 18,
                            color: "rgba(27,67,50,0.8)",
                            maxWidth: 500,
                            margin: "0 auto 40px"
                        }}
                    >
                        Send us a WhatsApp message and we'll help you find
                        exactly what you need.
                    </p>
                    <a href={WA_LINK} target="_blank" rel="noreferrer">
                        <button
                            style={{
                                background: COLORS.forest,
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: 18,
                                border: "none",
                                borderRadius: 50,
                                padding: "18px 50px",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 14,
                                transition: "all 0.3s ease",
                                boxShadow: "0 10px 40px rgba(27,67,50,0.3)"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform =
                                    "translateY(-4px)";
                                e.currentTarget.style.boxShadow =
                                    "0 20px 50px rgba(27,67,50,0.4)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 40px rgba(27,67,50,0.3)";
                            }}
                        >
                            <MessageCircle size={24} />
                            Open WhatsApp Chat
                            <ArrowRight size={20} />
                        </button>
                    </a>
                </AnimatedSection>
            </section>

            {/* ── CONTACT & MAP ── */}
            <section
                id="contact"
                style={{ padding: "100px 5%", background: COLORS.cream }}
            >
                <AnimatedSection
                    style={{ textAlign: "center", marginBottom: 60 }}
                >
                    <div className="section-label" style={{ marginBottom: 16 }}>
                        Find Us
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(32px, 4vw, 52px)",
                            fontWeight: 900,
                            color: COLORS.forest
                        }}
                    >
                        Visit Our{" "}
                        <span style={{ color: COLORS.gold }}>Store</span>
                    </h2>
                </AnimatedSection>

                <div
                    style={{
                        display: "flex",
                        gap: 48,
                        flexWrap: "wrap",
                        maxWidth: 1100,
                        margin: "0 auto",
                        alignItems: "flex-start"
                    }}
                >
                    {/* Contact info */}
                    <AnimatedSection style={{ flex: "1 1 300px" }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 24
                            }}
                        >
                            {[
                                {
                                    icon: (
                                        <MapPin size={22} color={COLORS.gold} />
                                    ),
                                    title: "Address",
                                    content:
                                        "No 2 Akunne Amichi Street, Ibusa Rd, off Achalla, Asaba 320107, Delta State, Nigeria"
                                },
                                {
                                    icon: (
                                        <Phone size={22} color={COLORS.gold} />
                                    ),
                                    title: "Phone",
                                    content: "+234 803 549 9704",
                                    href: `tel:+${WHATSAPP}`
                                },
                                {
                                    icon: (
                                        <MessageCircle
                                            size={22}
                                            color={COLORS.gold}
                                        />
                                    ),
                                    title: "WhatsApp",
                                    content:
                                        "Chat with us on WhatsApp to place orders",
                                    href: WA_LINK,
                                    linkLabel: "Open WhatsApp →"
                                },
                                {
                                    icon: (
                                        <Clock size={22} color={COLORS.gold} />
                                    ),
                                    title: "Hours",
                                    content:
                                        "Mon – Sat: 8:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM"
                                }
                            ].map(item => (
                                <div
                                    key={item.title}
                                    style={{
                                        display: "flex",
                                        gap: 20,
                                        padding: 28,
                                        background: "#fff",
                                        borderRadius: 20,
                                        border: `1px solid ${COLORS.sand}`
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 14,
                                            flexShrink: 0,
                                            background: COLORS.lightGold,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "'DM Sans', sans-serif",
                                                fontWeight: 700,
                                                fontSize: 14,
                                                color: COLORS.forest,
                                                marginBottom: 6
                                            }}
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "'DM Sans', sans-serif",
                                                fontSize: 14,
                                                color: "#555",
                                                lineHeight: 1.7,
                                                whiteSpace: "pre-line"
                                            }}
                                        >
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{
                                                        color: "#555",
                                                        textDecoration: "none"
                                                    }}
                                                >
                                                    {item.content}
                                                </a>
                                            ) : (
                                                item.content
                                            )}
                                        </div>
                                        {item.linkLabel && (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    fontFamily:
                                                        "'DM Sans', sans-serif",
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: COLORS.gold,
                                                    textDecoration: "none",
                                                    display: "inline-block",
                                                    marginTop: 6
                                                }}
                                            >
                                                {item.linkLabel}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Embedded map */}
                    <AnimatedSection delay={0.2} style={{ flex: "2 1 420px" }}>
                        <div
                            style={{
                                borderRadius: 28,
                                overflow: "hidden",
                                border: `2px solid ${COLORS.sand}`,
                                height: 480
                            }}
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
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer
                style={{
                    background: COLORS.charcoal,
                    padding: "60px 5% 32px",
                    borderTop: `3px solid ${COLORS.gold}`
                }}
            >
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: 60,
                            flexWrap: "wrap",
                            marginBottom: 48,
                            justifyContent: "space-between"
                        }}
                    >
                        {/* Brand */}
                        <div style={{ flex: "1 1 260px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 20
                                }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${COLORS.gold}, #b8860b)`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 900,
                                        color: COLORS.forest,
                                        fontSize: 18
                                    }}
                                >
                                    K
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: "#fff"
                                        }}
                                    >
                                        Kenny's
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 10,
                                            letterSpacing: 2,
                                            color: COLORS.gold,
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        Funbooks & Wears
                                    </div>
                                </div>
                            </div>
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 14,
                                    color: "rgba(255,255,255,0.5)",
                                    lineHeight: 1.8,
                                    maxWidth: 260
                                }}
                            >
                                Your trusted shop for books, stationery, and
                                fashion in Asaba, Delta State.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div style={{ flex: "0 1 180px" }}>
                            <h4
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 18,
                                    color: "#fff",
                                    marginBottom: 20
                                }}
                            >
                                Quick Links
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12
                                }}
                            >
                                {navLinks.map(l => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 14,
                                            color: "rgba(255,255,255,0.5)",
                                            textDecoration: "none",
                                            transition: "color 0.2s"
                                        }}
                                        onMouseEnter={e =>
                                            (e.target.style.color = COLORS.gold)
                                        }
                                        onMouseLeave={e =>
                                            (e.target.style.color =
                                                "rgba(255,255,255,0.5)")
                                        }
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div style={{ flex: "0 1 220px" }}>
                            <h4
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 18,
                                    color: "#fff",
                                    marginBottom: 20
                                }}
                            >
                                Contact
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 14
                                }}
                            >
                                <a
                                    href={`tel:+${WHATSAPP}`}
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        alignItems: "center",
                                        textDecoration: "none"
                                    }}
                                >
                                    <Phone size={16} color={COLORS.gold} />
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 14,
                                            color: "rgba(255,255,255,0.6)"
                                        }}
                                    >
                                        +234 803 549 9704
                                    </span>
                                </a>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        alignItems: "center",
                                        textDecoration: "none"
                                    }}
                                >
                                    <MessageCircle size={16} color="#25D366" />
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 14,
                                            color: "rgba(255,255,255,0.6)"
                                        }}
                                    >
                                        WhatsApp Order
                                    </span>
                                </a>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <MapPin
                                        size={16}
                                        color={COLORS.gold}
                                        style={{ marginTop: 2, flexShrink: 0 }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.5)",
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Ibusa Rd, off Achalla, Asaba, Delta
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            paddingTop: 28,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 16
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 13,
                                color: "rgba(255,255,255,0.35)"
                            }}
                        >
                            © 2025 Kenny's Funbooks & Wears. All rights
                            reserved.
                        </p>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 13,
                                color: "rgba(255,255,255,0.35)"
                            }}
                        >
                            Made with{" "}
                            <Heart
                                size={12}
                                color={COLORS.gold}
                                style={{ display: "inline", margin: "0 4px" }}
                            />{" "}
                            in Asaba
                        </p>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp button */}
            <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 999,
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    background: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 30px rgba(37,211,102,0.5)",
                    textDecoration: "none"
                }}
                className="wa-pulse"
            >
                <MessageCircle size={28} color="#fff" />
            </a>
        </div>
    );
}
