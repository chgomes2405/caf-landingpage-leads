import { motion } from "framer-motion";
import { ShieldCheck, Baby, GraduationCap, Award } from "lucide-react";

import { fadeInUp } from "@/lib/animations";

const badges = [
  { icon: ShieldCheck, title: "Aprovado pela Anvisa", desc: "Todos os produtos são regulamentados e aprovados." },
  { icon: Baby, title: "Seguro para crianças e pets", desc: "Fórmulas modernas, sem cheiro e sem riscos." },
  { icon: GraduationCap, title: "Profissionais treinados", desc: "Equipe certificada e em constante atualização." },
  { icon: Award, title: "Garantia no serviço", desc: "Se o problema persistir dentro do prazo de garantia, voltamos sem custo adicional." },
];

const TrustSection = () => (
  <section className="py-24 bg-primary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Sua segurança é nossa prioridade
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Trabalhamos com os mais altos padrões de segurança e qualidade.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { type: "tween", duration: 0.15 } }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <b.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-primary-foreground mb-2">{b.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
