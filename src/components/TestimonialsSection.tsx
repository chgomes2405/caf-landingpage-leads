import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { fadeInUp } from "@/lib/animations";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Residência",
    text: "Atendimento rápido e resolveu meu problema com cupins. Recomendo muito! A equipe foi super profissional.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    location: "Restaurante",
    text: "Incrível, eliminaram todas as baratas em poucos dias! O produto não tem cheiro e não precisei fechar o restaurante.",
    stars: 5,
  },
  {
    name: "Ana Oliveira",
    location: "Apartamento",
    text: "Tinha medo por causa dos meus pets, mas o produto é totalmente seguro. Problema resolvido de vez!",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
          Depoimentos
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          O que nossos clientes dizem
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { type: "tween", duration: 0.15 } }}
            className="p-8 bg-card rounded-2xl shadow-card"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
