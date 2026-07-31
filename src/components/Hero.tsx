import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { useBooking } from "@/contexts/BookingContext";

export default function Hero() {
  const { t } = useApp();
  const { openBooking } = useBooking();
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/YjDo48OhpuU?autoplay=1&mute=1&loop=1&playlist=YjDo48OhpuU&controls=0&showinfo=0&modestbranding=1&rel=0"
          className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          title="Background video"
        />
        <div className="absolute inset-0 bg-secondary" style={{ zIndex: -1 }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mb-4">
          <span className="font-body text-sm sm:text-base tracking-[0.4em] uppercase text-gold-light">
            {t("hero.location")}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="font-heading text-4xl sm:text-6xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
          {t("hero.title1")}
          <br />
          <span className="gold-text">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="font-body text-cream/70 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => scrollTo("#gallery")} className="btn-gold rounded-sm">
            {t("hero.cta1")}
          </button>
          <button onClick={() => openBooking()} className="btn-outline-gold rounded-sm text-cream border-cream/40 hover:bg-cream hover:text-secondary">
            {t("hero.cta2")}
          </button>
        </motion.div>

        <motion.button
          onClick={() => scrollTo("#services")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-10 text-gold/70 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}
