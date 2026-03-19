import { MapPin, Clock, FileText, Phone } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 py-16 border-t border-border/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Coluna 1: Marca e Endereço */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo-caf.jpeg" alt="Logotipo CAF Saúde Ambiental" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
            <span className="text-lg font-bold text-primary-foreground uppercase tracking-widest">
              CAF Saúde Ambiental
            </span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
            <p className="text-sm">Rua Ronald de Carvalho, 923<br />Ribeirão Preto - SP</p>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 shrink-0 text-primary" />
            <p className="text-sm">CNPJ: 60.624.794/0001-96</p>
          </div>
        </div>

        {/* Coluna 2: Atendimento */}
        <div className="space-y-4">
          <h3 className="text-primary-foreground font-bold tracking-wide uppercase mb-6">Atendimento</h3>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-1 shrink-0 text-primary" />
            <p className="text-sm">
              Segunda a Sexta: 08h às 18h<br />
              Sábados: 08h às 12h
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Phone className="w-5 h-5 shrink-0 text-primary" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_phone_link")}
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              (16) 99299-1090
            </a>
          </div>
        </div>

        {/* Coluna 3: Acesso Rápido */}
        <div className="space-y-4">
          <h3 className="text-primary-foreground font-bold tracking-wide uppercase mb-6">Acesso Rápido</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#problemas" onClick={scrollTo("problemas")} className="hover:text-primary transition-colors cursor-pointer">Pragas e Soluções</a></li>
            <li><a href="#depoimentos" onClick={scrollTo("depoimentos")} className="hover:text-primary transition-colors cursor-pointer">O que dizem sobre nós</a></li>
            <li><a href="#faq" onClick={scrollTo("faq")} className="hover:text-primary transition-colors cursor-pointer">Dúvidas Frequentes</a></li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer_quick_link")}
                className="hover:text-primary transition-colors"
              >
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-primary-foreground/10 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} CAF Saúde Ambiental. Todos os direitos reservados.</p>
        <p>Aprovado pelas diretrizes da Vigilância Sanitária.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
