import SocialIcons from "./SocialIcons";

const quickLinks = ["Home", "Services", "Gallery", "Testimonials", "About", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id.toLowerCase()}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary py-16 px-4">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold gold-text mb-4">Feven Decor</h3>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              Premium wedding & event decoration services based in Hawassa, Ethiopia. 
              Transforming celebrations into unforgettable experiences since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Contact Info</h4>
            <ul className="space-y-2 font-body text-sm text-cream/60">
              <li>📞 +251 911 234 567</li>
              <li>📞 +251 912 345 678</li>
              <li>✉️ info@fevendecor.com</li>
              <li>📍 Hawassa, SNNPR, Ethiopia</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex items-center gap-4 mb-4">
              <SocialIcons size={22} />
            </div>
            <p className="font-body text-xs text-cream/40 leading-relaxed">
              Stay updated with our latest work, behind-the-scenes content, and special offers.
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Feven Decor. All rights reserved. Crafted with ❤️ in Hawassa, Ethiopia.
          </p>
        </div>
      </div>
    </footer>
  );
}
