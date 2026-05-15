import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { useApp } from "@/contexts/AppContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-secondary">{t("contact.title")}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">{t("contact.callUs")}</h4>
                  <a href="tel:+251911234567" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors block">+251 911 234 567</a>
                  <a href="tel:+251912345678" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors block">+251 912 345 678</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">{t("contact.emailUs")}</h4>
                  <a href="mailto:info@fevendecor.com" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">info@fevendecor.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">{t("contact.visitUs")}</h4>
                  <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{t("contact.address")}</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/251911234567?text=Hello%20Feven%20Decor!%20I'm%20interested%20in%20your%20decoration%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold rounded-full"
            >
              <MessageCircle size={20} />
              {t("contact.whatsapp")}
            </a>

            <div className="flex items-center gap-4">
              <span className="font-body text-sm text-muted-foreground">{t("contact.follow")}</span>
              <SocialIcons size={22} className="!text-secondary/60 hover:!text-gold" />
            </div>

            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63165.77568430993!2d38.44987195!3d7.0623804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b13498685ea655%3A0x8dbb7b09c2a92a53!2sHawassa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Feven Decor location - Hawassa, Ethiopia"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 sm:p-10 shadow-sm border border-border/50 space-y-6">
              <div>
                <label className="font-body text-sm font-medium text-secondary block mb-2">{t("contact.fullName")}</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.fullNamePh")} className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all" />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-secondary block mb-2">{t("contact.email")}</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("contact.emailPh")} className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all" />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-secondary block mb-2">{t("contact.message")}</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("contact.messagePh")} className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none" />
              </div>

              <button type="submit" className="btn-gold rounded-md w-full flex items-center justify-center gap-2">
                <Send size={18} />
                {t("contact.send")}
              </button>

              {submitted && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center font-body text-sm text-green-600">
                  {t("contact.thanks")}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
