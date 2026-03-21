import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";
import heroBg from "@/assets/hero-bg.webp";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Casa limpa e protegida" fetchPriority="high" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-foreground/10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-24 w-full flex flex-col items-center text-center justify-center mt-8">
        <motion.div {...fadeInUp} className="text-primary-foreground flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <img src="/logo.png" alt="Logotipo CAF Saúde Ambiental" className="w-20 h-20 object-contain bg-white rounded-full p-1 shadow-xl" />
            <span className="inline-block text-xl md:text-2xl font-extrabold tracking-widest uppercase text-white drop-shadow-lg text-center">
              CAF Saúde Ambiental
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Ambientes protegidos contra pragas, com segurança e garantia
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Atendimento rápido, produtos regulamentados pela Anvisa e proteção absoluta para sua família e seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#orcamento"
              aria-label="Ir para o formulário de orçamento"
              onClick={scrollToElement("orcamento")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar conversa com atendente pelo WhatsApp"
              onClick={() => trackWhatsAppClick("hero_secondary_button")}
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-accent-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
