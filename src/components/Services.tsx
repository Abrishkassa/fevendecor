import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, PartyPopper, Church, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Decoration",
    description: "Complete wedding venue transformation with premium fabrics, floral arrangements, and bespoke stage designs that reflect your unique love story.",
  },
  {
    icon: Flower2,
    title: "Floral Artistry",
    description: "Exquisite flower arrangements using fresh, locally-sourced blooms — from bridal bouquets to grand centerpieces and archway installations.",
  },
  {
    icon: Sparkles,
    title: "Lighting Design",
    description: "Atmospheric lighting solutions including chandeliers, fairy lights, uplighting, and custom LED installations to set the perfect mood.",
  },
  {
    icon: PartyPopper,
    title: "Event Styling",
    description: "Full event styling for corporate galas, birthday celebrations, engagement parties, and cultural ceremonies with meticulous attention to detail.",
  },
  {
    icon: Church,
    title: "Ceremony Setup",
    description: "Elegant ceremony arrangements including altar designs, aisle décor, canopy setups, and seating layouts for both indoor and outdoor venues.",
  },
  {
    icon: Palette,
    title: "Theme & Concept",
    description: "Custom theme development and mood boards tailored to your vision — from traditional Ethiopian elegance to contemporary minimalist aesthetics.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-secondary">Our Services</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            From intimate gatherings to grand celebrations, we offer a comprehensive 
            suite of decoration services designed to bring your vision to life with unmatched artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
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
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
