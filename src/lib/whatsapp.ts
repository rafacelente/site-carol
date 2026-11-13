import { getLeadCode, sendLead } from './attribution';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const WHATSAPP_NUMBER = '5511977765788';

// The lead code at the end lets Carol match the conversation to where the visitor came from.
export function whatsappLink(message: string): string {
  const text = `${message} (cód. ${getLeadCode()})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Pushes a custom event to Google Tag Manager so each contact button
// can be measured separately (configure a "whatsapp_click" trigger in GTM),
// and registers the lead code with its attribution in Carol's sheet.
export function trackWhatsAppClick(location: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'whatsapp_click', click_location: location, lead_code: getLeadCode() });
  sendLead(location);
}
