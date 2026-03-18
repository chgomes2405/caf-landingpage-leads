import { motion } from "framer-motion";
import { Bug, Rat, TreeDeciduous, Antenna } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const pains = [
  {
    icon: Bug,
    title: "Infestação de baratas?",
    description: "Baratas transmitem doenças e se multiplicam rapidamente. Quanto mais tempo, pior o problema.",
  },
  {
    icon: Rat,
    title: "Ratos colocando sua saúde em risco?",
    description: "Ratos contaminam alimentos e podem causar doenças graves como leptospirose.",
  },
  {
    icon: TreeDeciduous,
    title: "Cupins destruindo seus móveis?",
    description: "Cupins causam danos silenciosos e irreversíveis em madeiras e estruturas.",
  },
  {
    icon: Antenna,
    title: "Formigas invadindo sua cozinha?",
    description: "Formigas contaminam alimentos e indicam problemas de higiene no ambiente.",
  },
];

const PainPointsSection = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
          Problemas comuns
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Você convive com algum desses problemas?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Pragas urbanas são um risco real para sua saúde e patrimônio. Não ignore os sinais.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
            className="p-8 bg-card rounded-2xl shadow-card hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl mb-4 flex items-center justify-center">
              <pain.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">{pain.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
