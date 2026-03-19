import { Phone } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";

const WHATSAPP_NUMBER = "5516992991090";
const WHATSAPP_MESSAGE = "Olá, gostaria de solicitar um orçamento para dedetização";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-background/95 backdrop-blur-md border-b border-border/40 z-50 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-caf.jpeg" alt="Logo CAF Saúde Ambiental" className="w-10 h-10 object-contain rounded-full bg-white p-0.5" />
          <span className="font-bold text-primary tracking-wide hidden sm:inline-block">CAF Saúde</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com especialista pelo WhatsApp"
          onClick={() => trackWhatsAppClick("sticky_navbar_button")}
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline-block">Orçamento Rápido</span>
          <span className="sm:hidden">Orçamento</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
