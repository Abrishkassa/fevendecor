import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { useApp } from "@/contexts/AppContext";
import { useBooking } from "@/contexts/BookingContext";

const navKeys = [
  { key: "nav.home", href: "#home" },
  { key: "nav.services", href: "#services" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.tiktok", href: "#tiktok" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const Toggles = ({ size = 18 }: { size?: number }) => (
    <>
      <button
        onClick={() => setLang(lang === "en" ? "am" : "en")}
        className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gold/40 text-cream/80 hover:text-gold hover:border-gold transition-all text-xs uppercase tracking-wider font-body"
        aria-label="Toggle language"
      >
        <Languages size={size - 4} />
        {lang === "en" ? "አማ" : "EN"}
      </button>
      <button
        onClick={toggleTheme}
        className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold transition-all"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={size - 2} /> : <Sun size={size - 2} />}
      </button>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg shadow-dark/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <span className="font-heading text-2xl sm:text-3xl font-bold gold-text">
            Feven Decor
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navKeys.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors duration-300 relative group"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <Toggles />
            <SocialIcons size={18} />
            <button
              onClick={() => openBooking()}
              className="btn-gold rounded-full !py-2 !px-5 text-xs"
            >
              {t("nav.bookNow")}
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Toggles size={16} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream/80 hover:text-gold transition-colors ml-1"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary/98 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navKeys.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
                >
                  {t(link.key)}
                </motion.button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
                className="btn-gold rounded-full !py-2 !px-6 text-xs mt-1"
              >
                {t("nav.bookNow")}
              </button>
              <div className="flex items-center gap-4 mt-2">
                <SocialIcons size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
