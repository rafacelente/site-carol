declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const WHATSAPP_NUMBER = '5511977765788';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Pushes a custom event to Google Tag Manager so each contact button
// can be measured separately (configure a "whatsapp_click" trigger in GTM).
export function trackWhatsAppClick(location: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'whatsapp_click', click_location: location });
}
