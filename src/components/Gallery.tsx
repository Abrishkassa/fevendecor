import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import { useApp } from "@/contexts/AppContext";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Luxurious wedding reception with golden drapes and chandeliers" },
  { src: gallery2, alt: "Outdoor wedding ceremony with white floral arch" },
  { src: gallery3, alt: "Elegant table centerpiece with golden candelabra" },
  { src: gallery4, alt: "Stunning wedding stage with golden backdrop" },
  { src: gallery5, alt: "Grand ballroom with crystal curtains and lighting" },
  { src: gallery6, alt: "Premium table setting with golden charger plates" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useApp();

  return (
    <>
      <section id="gallery" className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title text-secondary">{t("gallery.title")}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t("gallery.subtitle")}</p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-sm tracking-wider uppercase">
                    {t("gallery.view")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox images={images} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
      )}
    </>
  );
}
