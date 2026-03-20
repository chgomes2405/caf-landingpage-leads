import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "O serviço é seguro para crianças e animais?",
    a: "Sim! Utilizamos produtos aprovados pela Anvisa, sem cheiro e seguros para toda a família, incluindo crianças e pets.",
  },
  {
    q: "Preciso sair de casa durante a aplicação?",
    a: "Na maioria dos casos, não. Nossos produtos modernos permitem que você permaneça em casa. Em casos específicos, orientamos sobre o melhor procedimento.",
  },
  {
    q: "Quanto tempo dura o efeito?",
    a: "O efeito dos nossos tratamentos varia de 3 a 6 meses, dependendo do tipo de praga e das condições do ambiente. Oferecemos garantia em todos os serviços.",
  },
  {
    q: "Em quanto tempo vocês atendem?",
    a: "Respondemos em até 30 minutos e, na maioria dos casos, realizamos o atendimento no mesmo dia ou no dia seguinte.",
  },
  {
    q: "Vocês atendem empresas e comércios?",
    a: "Sim! Atendemos residências, restaurantes, escritórios, condomínios e todo tipo de estabelecimento comercial.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
          Dúvidas frequentes
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Perguntas Frequentes
        </h2>
      </motion.div>
      <motion.div {...fadeInUp}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl shadow-card px-6 border-none hover:-translate-y-1 transition-transform duration-150"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
