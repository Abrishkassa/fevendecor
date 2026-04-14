import { motion } from "framer-motion";

const tiktokVideos = [
  "7623129263729937695",
  "7620012989076245793",
  "7616031149248269582",
];

export default function TikTokSection() {
  return (
    <section id="tiktok" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-secondary">Follow Us on TikTok</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Go behind the scenes and watch our transformation videos. Follow 
            <a href="https://tiktok.com/@fevendecor" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark transition-colors"> @fevendecor</a> for daily inspiration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-lg bg-secondary"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                src={`https://www.tiktok.com/embed/v2/${id}`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="encrypted-media"
                title={`TikTok video ${i + 1}`}
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/40 pointer-events-none">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.86a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.27z" />
                </svg>
                <span className="mt-3 text-sm font-body">TikTok Video</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
