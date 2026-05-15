import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import { useApp } from "@/contexts/AppContext";

export default function About() {
  const { t } = useApp();
  return (
    <section
      id="about"
      className="relative py-28 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-dark/75" />

      <div className="container-max relative z-10 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="section-title text-cream">{t("about.title")}</h2>
          <div className="gold-divider" />

          <p className="font-body text-cream/80 text-base sm:text-lg leading-relaxed mb-8">
            {t("about.p1.a")} <strong className="text-gold">Feven Decor</strong> {t("about.p1.b")}
          </p>

          <p className="font-body text-cream/70 text-sm sm:text-base leading-relaxed mb-8">
            {t("about.p2")}
          </p>

          <p className="font-body text-cream/70 text-sm sm:text-base leading-relaxed mb-10">
            {t("about.p3")}
          </p>

          <div className="inline-flex items-center gap-3 text-gold">
            <span className="w-12 h-px bg-gold/50" />
            <span className="font-heading text-lg italic">{t("about.tagline")}</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
