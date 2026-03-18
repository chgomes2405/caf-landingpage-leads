import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const WHATSAPP_NUMBER = "5500000000000";

interface CTASectionProps {
  variant?: "mid" | "final";
}

const CTASection = ({ variant = "mid" }: CTASectionProps) => {
  const isFinal = variant === "final";

  return (
    <section className={`py-24 ${isFinal ? "bg-foreground" : "bg-card"}`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeInUp}>
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-4 ${
              isFinal ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {isFinal
              ? "Proteja sua casa e sua família agora mesmo"
              : "Não espere o problema piorar. Resolva hoje mesmo."}
          </h2>
          <p
            className={`text-lg mb-8 ${
              isFinal ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {isFinal
              ? "Solicite seu orçamento gratuito e tenha a tranquilidade que você merece."
              : "Cada dia que passa, o problema se agrava. Fale com nossos especialistas agora."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {isFinal ? "Solicitar orçamento agora" : "Agendar atendimento"}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-accent-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
