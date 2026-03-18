import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const WHATSAPP_NUMBER = "5500000000000";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${name}, telefone ${phone}. Preciso de ajuda com: ${problem}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Casa limpa e protegida" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp} className="text-primary-foreground">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            CAF Saúde Ambiental
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Elimine pragas da sua casa com segurança e garantia
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
            Atendimento rápido, produtos aprovados pela Anvisa e proteção para sua família e seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento gratuito
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-accent-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <form
            id="orcamento"
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-card p-8 space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">
                Orçamento Gratuito
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Preencha e receba atendimento em minutos
              </p>
            </div>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={20}
              className="w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
              className="w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Tipo de problema</option>
              <option value="Baratas">Baratas</option>
              <option value="Ratos">Ratos</option>
              <option value="Cupins">Cupins</option>
              <option value="Formigas">Formigas</option>
              <option value="Mosquitos">Mosquitos</option>
              <option value="Outro">Outro</option>
            </select>
            <button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Solicitar Orçamento Grátis
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Sem compromisso. Resposta em até 30 minutos.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
