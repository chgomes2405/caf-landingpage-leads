import { MapPin, Clock, FileText, Phone, Heart } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";
import { WHATSAPP_NUMBER, WHATSAPP_URL, COMPANY_INFO } from "@/lib/constants";

import { scrollToElement } from "@/lib/utils";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 py-16 border-t border-border/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Coluna 1: Marca e Endereço */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="/Logo CAF Saúde Ambiental.png" alt="Logotipo CAF Saúde Ambiental" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
            <span className="text-lg font-bold text-primary-foreground uppercase tracking-widest">
              CAF Saúde Ambiental
            </span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
            <p className="text-sm">{COMPANY_INFO.address}<br />{COMPANY_INFO.city}</p>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 shrink-0 text-primary" />
            <p className="text-sm">CNPJ: {COMPANY_INFO.cnpj}</p>
          </div>
        </div>

        {/* Coluna 2: Atendimento */}
        <div className="space-y-4">
          <h3 className="text-primary-foreground font-bold tracking-wide uppercase mb-6">Atendimento</h3>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-1 shrink-0 text-primary" />
            <p className="text-sm">
              {COMPANY_INFO.hours.weekdays}<br />
              {COMPANY_INFO.hours.saturdays}
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
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Coluna 3: Acesso Rápido */}
        <div className="space-y-4">
          <h3 className="text-primary-foreground font-bold tracking-wide uppercase mb-6">Acesso Rápido</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#problemas" onClick={scrollToElement("problemas")} className="hover:text-primary transition-colors cursor-pointer">Pragas e Soluções</a></li>
            <li><a href="#depoimentos" onClick={scrollToElement("depoimentos")} className="hover:text-primary transition-colors cursor-pointer">O que dizem sobre nós</a></li>
            <li><a href="#faq" onClick={scrollToElement("faq")} className="hover:text-primary transition-colors cursor-pointer">Dúvidas Frequentes</a></li>
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
        <p className="flex items-center justify-center gap-1.5 font-medium text-primary-foreground/80">
          Feito com <Heart className="w-4 h-4 text-red-500 animate-pulse" strokeWidth={3} /> por Carlos
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
