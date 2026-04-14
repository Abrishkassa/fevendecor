import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-cream">About Feven Decor</h2>
          <div className="gold-divider" />

          <p className="font-body text-cream/80 text-base sm:text-lg leading-relaxed mb-8">
            Founded in the heart of Hawassa, Ethiopia, <strong className="text-gold">Feven Decor</strong> has 
            been redefining luxury event decoration for over eight years. What began as a small passion 
            project has blossomed into one of Southern Ethiopia's most sought-after decoration studios.
          </p>

          <p className="font-body text-cream/70 text-sm sm:text-base leading-relaxed mb-8">
            Our talented team of designers, florists, and event stylists bring together the rich cultural 
            heritage of Ethiopia with contemporary international design trends. Every event we touch is 
            infused with meticulous craftsmanship, premium materials, and an unwavering commitment to 
            making your celebration truly extraordinary.
          </p>

          <p className="font-body text-cream/70 text-sm sm:text-base leading-relaxed mb-10">
            From intimate lakeside ceremonies on the shores of Lake Hawassa to grand ballroom galas, 
            we believe every moment deserves to be adorned with beauty. Our philosophy is simple: 
            your dream is our canvas, and we won't stop until every detail is perfect.
          </p>

          <div className="inline-flex items-center gap-3 text-gold">
            <span className="w-12 h-px bg-gold/50" />
            <span className="font-heading text-lg italic">Where Elegance Meets Tradition</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
