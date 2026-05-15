import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import testimonialsBg from "@/assets/testimonials-bg.jpg";
import { useApp } from "@/contexts/AppContext";

const testimonials = {
  en: [
    { name: "Bethlehem & Daniel", event: "Wedding Reception", text: "Feven Decor turned our wedding into a fairy tale. The golden drapes, the flower arrangements, the stage — everything was beyond our wildest dreams. Our guests are still talking about it months later!" },
    { name: "Tigist Haile", event: "Corporate Gala", text: "We hired Feven Decor for our annual corporate gala and they delivered pure excellence. The attention to detail, the elegant lighting, and the seamless coordination made the evening unforgettable." },
    { name: "Selam & Yonas", event: "Engagement Ceremony", text: "From the first meeting to the final petal, Feven Decor's team was professional, creative, and so passionate about their work. They understood our vision perfectly and exceeded every expectation." },
    { name: "Meron Tadesse", event: "Birthday Celebration", text: "I wanted something unique for my 30th birthday and Feven Decor delivered a magical setup. The custom theme, the floral walls, and the lighting transformed the venue completely. Absolutely stunning!" },
    { name: "Hanna & Abebe", event: "Traditional Wedding", text: "Feven Decor beautifully blended modern luxury with Ethiopian tradition for our wedding. The cultural elements woven into the elegant design made our celebration truly special and authentic." },
  ],
  am: [
    { name: "ቤተልሔምና ዳንኤል", event: "የሰርግ ግብዣ", text: "ፌቨን ዴኮር ሰርጋችንን ወደ ተረት ለወጠው። የወርቅ መጋረጃዎቹ፣ የአበባ ዝግጅቶቹ፣ መድረኩ — ሁሉም ከሕልማችን በላይ ነበር። እንግዶቻችን አሁንም ስለ እሱ ያወራሉ!" },
    { name: "ትዕግስት ኃይሌ", event: "የድርጅት ዝግጅት", text: "ለዓመታዊ የድርጅት ዝግጅታችን ፌቨን ዴኮርን ቀጥረን ንፁህ ብቃት አቅርበዋል። ለዝርዝር ትኩረት፣ የተዋበ መብራት እና ቅንጅት ምሽቱን የማይረሳ አደረጉት።" },
    { name: "ሰላምና ዮናስ", event: "የእጮኝነት ሥነ-ሥርዓት", text: "ከመጀመሪያ ስብሰባ እስከ የመጨረሻ ቅጠል፣ የፌቨን ዴኮር ቡድን ሙያዊ፣ ፈጠራ ያለውና ለስራቸው የሚቀና ነበር። ራዕያችንን በትክክል ተረድተው ከጠበቅነው በላይ አደረጉ።" },
    { name: "ሜሮን ታደሰ", event: "የልደት በዓል", text: "ለ30ኛ ልደቴ ልዩ ነገር ፈልጌ ነበር እና ፌቨን ዴኮር አስማታዊ አቀራረብ አቀረቡ። ብጁ ጭብጡ፣ የአበባ ግድግዳዎቹ እና መብራቱ ቦታውን ሙሉ በሙሉ ለውጠዋል።" },
    { name: "ሐናና አበበ", event: "ባህላዊ ሰርግ", text: "ፌቨን ዴኮር ለሰርጋችን ዘመናዊ ቅንጦት ከኢትዮጵያ ባህል ጋር በሚያምር ሁኔታ አዋህደዋል። በውብ ዲዛይኑ ውስጥ የተጠለፉት ባህላዊ አካላት በዓላችንን ልዩ አድርገዋል።" },
  ],
};

export default function Testimonials() {
  const { t, lang } = useApp();
  const items = testimonials[lang];

  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden" style={{ backgroundImage: `url(${testimonialsBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-dark/80" />

      <div className="container-max relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-cream">{t("testimonials.title")}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle text-cream/60">{t("testimonials.subtitle")}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Swiper
            key={lang}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="pb-14"
          >
            {items.map((tm, i) => (
              <SwiperSlide key={i}>
                <div className="bg-card/10 backdrop-blur-sm border border-cream/10 rounded-lg p-8 sm:p-10 h-full">
                  <Quote size={32} className="text-gold/40 mb-4" />
                  <p className="font-body text-cream/80 text-sm leading-relaxed mb-6 italic">"{tm.text}"</p>
                  <div>
                    <p className="font-heading text-lg font-semibold text-gold">{tm.name}</p>
                    <p className="font-body text-xs text-cream/50 uppercase tracking-wider">{tm.event}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
