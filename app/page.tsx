import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Marquee />
            <Products />
            <WhyUs />
            <Testimonials />
            <Contact />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
