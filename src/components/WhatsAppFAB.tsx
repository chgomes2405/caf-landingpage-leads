import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/tracking";
import { WHATSAPP_URL } from "@/lib/constants";

const WhatsAppFAB = () => (
  <motion.a
    href={WHATSAPP_URL}
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
