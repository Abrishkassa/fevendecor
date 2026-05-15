import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, PartyPopper, Church, Palette } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const services = [
  { icon: Heart, key: "s1" },
  { icon: Flower2, key: "s2" },
  { icon: Sparkles, key: "s3" },
  { icon: PartyPopper, key: "s4" },
  { icon: Church, key: "s5" },
  { icon: Palette, key: "s6" },
];

export default function Services() {
  const { t } = useApp();
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-secondary">{t("services.title")}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon size={28} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(`services.${service.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
