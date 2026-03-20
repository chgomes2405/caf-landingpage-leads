// Configurações centralizadas da aplicação
// Para alterar o número de WhatsApp ou mensagem, edite apenas este arquivo.

export const WHATSAPP_NUMBER = "5516992991090";
export const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre os serviços de dedetização";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const COMPANY_INFO = {
  phone: "(16) 99299-1090",
  address: "Rua Ronald de Carvalho, 923",
  city: "Ribeirão Preto - SP",
  cnpj: "60.624.794/0001-96",
  hours: {
    weekdays: "Segunda a Sexta: 08h às 18h",
    saturdays: "Sábados: 08h às 12h"
  }
};
