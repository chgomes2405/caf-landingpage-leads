import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5500000000000";

const WhatsAppFAB = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </motion.a>
);

export default WhatsAppFAB;
