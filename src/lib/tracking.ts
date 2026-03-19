// Funções para rastreamento de conversões (Google Ads, Meta Pixel, Analytics)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_whatsapp", {
      event_category: "engagement",
      event_label: location,
    });
  }

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "ClickWhatsApp", { location });
  }

  console.log(`[Tracking] WhatsApp click recorded from: ${location}`);
};
