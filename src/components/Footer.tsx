import SocialIcons from "./SocialIcons";
import { useApp } from "@/contexts/AppContext";

const quickLinks = [
  { key: "nav.home", id: "home" },
  { key: "nav.services", id: "services" },
  { key: "nav.gallery", id: "gallery" },
  { key: "nav.testimonials", id: "testimonials" },
  { key: "nav.about", id: "about" },
  { key: "nav.contact", id: "contact" },
];

export default function Footer() {
  const { t } = useApp();
  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary py-16 px-4">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold gold-text mb-4">Feven Decor</h3>
            <p className="font-body text-cream/60 text-sm leading-relaxed">{t("footer.brand")}</p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="font-body text-sm text-cream/60 hover:text-gold transition-colors">
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-2 font-body text-sm text-cream/60">
              <li>📞 +251 911 234 567</li>
              <li>📞 +251 912 345 678</li>
              <li>✉️ info@fevendecor.com</li>
              <li>📍 Hawassa, SNNPR, Ethiopia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">{t("footer.followUs")}</h4>
            <div className="flex items-center gap-4 mb-4">
              <SocialIcons size={22} />
            </div>
            <p className="font-body text-xs text-cream/40 leading-relaxed">{t("footer.followDesc")}</p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Feven Decor. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
