import { motion } from "framer-motion";
import { Shield, Zap, Leaf, Building, Users, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const solutions = [
  { icon: Users, title: "Equipe técnica especializada", desc: "Profissionais treinados e certificados para cada tipo de praga." },
  { icon: Zap, title: "Atendimento rápido", desc: "Resposta em até 30 minutos e agendamento no mesmo dia." },
  { icon: Leaf, title: "Produtos seguros e regulamentados", desc: "Produtos aprovados pela Anvisa, sem cheiro e seguros para a família." },
  { icon: Shield, title: "Garantia no serviço", desc: "Se o problema voltar, nós voltamos sem custo adicional." },
  { icon: CheckCircle, title: "Soluções eficazes e duradouras", desc: "Técnicas modernas que eliminam pragas na raiz do problema." },
  { icon: Building, title: "Residencial e comercial", desc: "Atendemos casas, apartamentos, restaurantes, escritórios e mais." },
];

const SolutionSection = () => (
  <section className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
          Por que a CAF?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          A solução definitiva para o controle de pragas
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A CAF Saúde Ambiental combina tecnologia, segurança e atendimento humanizado.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-2xl bg-background shadow-card hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-xl flex items-center justify-center">
              <s.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
