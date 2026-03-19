import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/tracking";

const WHATSAPP_NUMBER = "5516992991090";
const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre os serviços de dedetização";

const WhatsAppFAB = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Botão flutuante para contato online com especialista via WhatsApp"
    onClick={() => trackWhatsAppClick("floating_whatsapp_button")}
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
  >
    <MessageCircle className="w-7 h-7" />
  </motion.a>
);

export default WhatsAppFAB;
