import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { trackWhatsAppClick } from "@/lib/tracking";
import heroBg from "@/assets/hero-bg.webp";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, "Por favor, digite seu nome e sobrenome."),
  phone: z.string().min(14, "O telefone deve conter o DDD e os 9 dígitos."),
  problem: z.string().min(1, "Selecione o tipo de problema que precisamos resolver."),
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const WHATSAPP_NUMBER = "5516992991090";
const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre os serviços de dedetização";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse({ name, phone, problem });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    trackWhatsAppClick("hero_form_submit");
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
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo-caf.jpeg" alt="Logotipo CAF Saúde Ambiental" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary">
              CAF Saúde Ambiental
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Elimine pragas da sua casa com segurança e garantia
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
            Atendimento rápido, produtos aprovados pela Anvisa e proteção para sua família e seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#orcamento"
              aria-label="Ir para o formulário de orçamento"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("orcamento");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento gratuito
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
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

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <form
            id="orcamento"
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-card p-8 space-y-5 hover:-translate-y-1 transition-transform duration-200"
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
              aria-label="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Seu telefone (com DDD)"
              aria-label="Digite seu telefone com DDD"
              value={phone}
              onChange={(e) => {
                let v = e.target.value.replace(/\D/g, "");
                if (v.length > 11) v = v.substring(0, 11);
                if (v.length > 2) v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
                if (v.length > 10) v = `${v.substring(0, 10)}-${v.substring(10)}`;
                setPhone(v);
              }}
              required
              maxLength={15}
              className="w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              aria-label="Selecione o tipo de problema de praga que deseja combater"
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
