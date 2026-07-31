import { WHATSAPP_PHONE } from "./constants";

/** Builds a wa.me link that opens WhatsApp with the message pre-filled. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
