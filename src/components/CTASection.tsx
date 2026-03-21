import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, "Por favor, digite seu nome e sobrenome."),
  phone: z.string().min(14, "O telefone deve conter o DDD e os 9 dígitos."),
  problem: z.string().min(1, "Selecione o tipo de problema que precisamos resolver."),
});

type FormData = z.infer<typeof formSchema>;

interface CTASectionProps {
  variant?: "mid" | "final";
}

const CTASection = ({ variant = "mid" }: CTASectionProps) => {
  const isFinal = variant === "final";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    trackWhatsAppClick("final_form_submit");
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${data.name}, telefone ${data.phone}. Preciso de ajuda com: ${data.problem}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id={isFinal ? "orcamento" : undefined} className={`py-24 ${isFinal ? "bg-foreground" : "bg-card"}`}>
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
              ? "Preencha o formulário abaixo para agendar um atendimento rápido."
              : "Cada dia que passa, o problema se agrava. Fale com nossos especialistas agora."}
          </p>

          {!isFinal ? (
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#orcamento"
                onClick={scrollToElement("orcamento")}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Agendar atendimento
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar agora mesmo no WhatsApp"
                onClick={() => trackWhatsAppClick(`cta_${variant}_button`)}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-accent-foreground font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-2xl p-8 space-y-5 text-left max-w-xl mx-auto mt-8 relative"
            >
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Seu nome"
                  aria-label="Digite seu nome completo"
                  maxLength={100}
                  className={`w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-destructive ring-2 ring-destructive' : 'focus:ring-primary'}`}
                  {...register("name")}
                />
                {errors.name && <p className="text-destructive text-xs font-medium pl-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <input
                  type="tel"
                  placeholder="Seu telefone (com DDD)"
                  aria-label="Digite seu telefone com DDD"
                  maxLength={15}
                  className={`w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-destructive ring-2 ring-destructive' : 'focus:ring-primary'}`}
                  {...register("phone", {
                    onChange: (e) => {
                      let v = e.target.value.replace(/\D/g, "");
                      if (v.length > 11) v = v.substring(0, 11);
                      if (v.length > 2) v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
                      if (v.length > 10) v = `${v.substring(0, 10)}-${v.substring(10)}`;
                      setValue("phone", v, { shouldValidate: true });
                    }
                  })}
                />
                {errors.phone && <p className="text-destructive text-xs font-medium pl-1">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1">
                <select
                  aria-label="Selecione o tipo de problema de praga que deseja combater"
                  className={`w-full h-12 bg-secondary border-transparent rounded-xl px-4 text-foreground focus:outline-none focus:ring-2 ${errors.problem ? 'focus:ring-destructive ring-2 ring-destructive' : 'focus:ring-primary'}`}
                  {...register("problem")}
                >
                  <option value="">Tipo de problema</option>
                  <option value="Baratas">Baratas</option>
                  <option value="Ratos">Ratos</option>
                  <option value="Cupins">Cupins</option>
                  <option value="Formigas">Formigas</option>
                  <option value="Mosquitos">Mosquitos</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.problem && <p className="text-destructive text-xs font-medium pl-1">{errors.problem.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                Solicitar Orçamento
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
