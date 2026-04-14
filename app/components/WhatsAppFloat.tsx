import { MessageCircle } from "lucide-react";
import { WA_LINK } from "../lib/data";

export default function WhatsAppFloat() {
    return (
        <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] animate-wa-pulse hover:scale-110 transition-transform duration-200 animate-float"
        >
            <MessageCircle size={26} color="#fff" fill="#fff" />
        </a>
    );
}
