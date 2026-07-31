import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "am";
type Theme = "light" | "dark";

type Dict = Record<string, { en: string; am: string }>;

const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", am: "መነሻ" },
  "nav.services": { en: "Services", am: "አገልግሎቶች" },
  "nav.gallery": { en: "Gallery", am: "ጋለሪ" },
  "nav.testimonials": { en: "Testimonials", am: "ምስክርነቶች" },
  "nav.tiktok": { en: "TikTok", am: "ቲክቶክ" },
  "nav.about": { en: "About", am: "ስለ እኛ" },
  "nav.contact": { en: "Contact", am: "ያግኙን" },

  // Hero
  "hero.location": { en: "Hawassa, Ethiopia", am: "ሐዋሳ፣ ኢትዮጵያ" },
  "hero.title1": { en: "Where Dreams", am: "ህልሞች የሚሆኑበት" },
  "hero.title2": { en: "Come Alive", am: "ቦታ" },
  "hero.subtitle": {
    en: "Feven Decor transforms your most cherished moments into breathtaking visual masterpieces. Premium wedding & event decoration services crafted with elegance and passion.",
    am: "ፌቨን ዴኮር ውድ ጊዜዎችዎን ወደ አስደናቂ የእይታ ድንቅ ስራዎች ይለውጣል። በኤሌጋንስና በፍቅር የተሰሩ ከፍተኛ የሰርግና የዝግጅት ማስዋብ አገልግሎቶች።",
  },
  "hero.cta1": { en: "View Gallery", am: "ጋለሪ ይመልከቱ" },
  "hero.cta2": { en: "Book Decoration", am: "ማስዋብ ይዘዙ" },

  // Services
  "services.title": { en: "Our Services", am: "የእኛ አገልግሎቶች" },
  "services.subtitle": {
    en: "From intimate gatherings to grand celebrations, we offer a comprehensive suite of decoration services designed to bring your vision to life with unmatched artistry.",
    am: "ከትንንሽ ስብሰባዎች እስከ ታላላቅ በዓላት፣ ሕልምዎን በላቀ ጥበብ ለማሳካት የተዘጋጁ ሰፊ የማስዋብ አገልግሎቶችን እናቀርባለን።",
  },
  "services.s1.title": { en: "Wedding Decoration", am: "የሰርግ ማስዋብ" },
  "services.s1.desc": {
    en: "Complete wedding venue transformation with premium fabrics, floral arrangements, and bespoke stage designs that reflect your unique love story.",
    am: "ልዩ የፍቅር ታሪክዎን የሚያንፀባርቁ ከፍተኛ ጨርቆች፣ የአበባ ዝግጅቶችና ብጁ የመድረክ ዲዛይኖች ጋር ሙሉ የሰርግ ቦታ ለውጥ።",
  },
  "services.s2.title": { en: "Floral Artistry", am: "የአበባ ጥበብ" },
  "services.s2.desc": {
    en: "Exquisite flower arrangements using fresh, locally-sourced blooms — from bridal bouquets to grand centerpieces and archway installations.",
    am: "ከሙሽራ እቅፍ አበባ እስከ ታላላቅ ማዕከላዊ ዝግጅቶችና የመግቢያ ማስጌጫዎች — በአካባቢው ከሚገኙ ትኩስ አበባዎች የተሰሩ ድንቅ ዝግጅቶች።",
  },
  "services.s3.title": { en: "Lighting Design", am: "የመብራት ዲዛይን" },
  "services.s3.desc": {
    en: "Atmospheric lighting solutions including chandeliers, fairy lights, uplighting, and custom LED installations to set the perfect mood.",
    am: "ፍጹም ድባብ ለመፍጠር ቻንደሊየር፣ ፌሪ ላይትስ፣ የላይ መብራትና ብጁ LED መጫኛዎችን ጨምሮ።",
  },
  "services.s4.title": { en: "Event Styling", am: "የዝግጅት ስታይል" },
  "services.s4.desc": {
    en: "Full event styling for corporate galas, birthday celebrations, engagement parties, and cultural ceremonies with meticulous attention to detail.",
    am: "ለድርጅት ዝግጅቶች፣ ልደቶች፣ የእጮኝነት ፓርቲዎችና ባህላዊ ሥነ-ሥርዓቶች ሙሉ ስታይል በዝርዝር።",
  },
  "services.s5.title": { en: "Ceremony Setup", am: "የሥነ-ሥርዓት ዝግጅት" },
  "services.s5.desc": {
    en: "Elegant ceremony arrangements including altar designs, aisle décor, canopy setups, and seating layouts for both indoor and outdoor venues.",
    am: "ለውስጥና ለውጭ ቦታዎች የተዋበ የሥነ-ሥርዓት ዝግጅት ሙሉ ዲዛይን ጋር።",
  },
  "services.s6.title": { en: "Theme & Concept", am: "ጭብጥና ጽንሰ-ሐሳብ" },
  "services.s6.desc": {
    en: "Custom theme development and mood boards tailored to your vision — from traditional Ethiopian elegance to contemporary minimalist aesthetics.",
    am: "ከባህላዊ ኢትዮጵያዊ ውበት እስከ ዘመናዊ ቀላል ዲዛይን — ለራእይዎ የተበጁ ብጁ ጭብጦች።",
  },

  // Stats
  "stats.events": { en: "Events Decorated", am: "የተዋቡ ዝግጅቶች" },
  "stats.years": { en: "Years Experience", am: "የልምድ ዓመታት" },
  "stats.clients": { en: "Happy Clients", am: "ደስተኛ ደንበኞች" },
  "stats.awards": { en: "Awards Won", am: "የተሸለሙ ሽልማቶች" },

  // Gallery
  "gallery.title": { en: "Our Portfolio", am: "የእኛ ስራዎች" },
  "gallery.subtitle": {
    en: "A glimpse into the unforgettable events we've had the honor of decorating. Each project is a testament to our commitment to excellence and beauty.",
    am: "ያስዋብናቸው የማይረሱ ዝግጅቶች እይታ። እያንዳንዱ ስራ የእኛን ለላቀ ጥራትና ውበት መሰጠት ይመሰክራል።",
  },
  "gallery.view": { en: "View", am: "ይመልከቱ" },

  // Testimonials
  "testimonials.title": { en: "What Our Clients Say", am: "ደንበኞቻችን ምን ይላሉ" },
  "testimonials.subtitle": {
    en: "Every event tells a story. Here's what our cherished clients have to say about their experience with Feven Decor.",
    am: "እያንዳንዱ ዝግጅት ታሪክ አለው። ውድ ደንበኞቻችን ስለ ፌቨን ዴኮር ልምዳቸው ምን እንደሚሉ እነሆ።",
  },

  // TikTok
  "tiktok.title": { en: "Follow Us on TikTok", am: "በቲክቶክ ይከተሉን" },
  "tiktok.subtitleA": { en: "Go behind the scenes and watch our transformation videos. Follow", am: "ከመድረክ በስተጀርባ ይመልከቱ። ይከተሉ" },
  "tiktok.subtitleB": { en: "for daily inspiration.", am: "ለዕለታዊ መነቃቃት።" },

  // About
  "about.title": { en: "About Feven Decor", am: "ስለ ፌቨን ዴኮር" },
  "about.p1.a": { en: "Founded in the heart of Hawassa, Ethiopia,", am: "በሐዋሳ ልብ የተመሰረተው፣" },
  "about.p1.b": {
    en: "has been redefining luxury event decoration for over eight years. What began as a small passion project has blossomed into one of Southern Ethiopia's most sought-after decoration studios.",
    am: "ላለፉት ስምንት ዓመታት የቅንጦት የዝግጅት ማስዋብ ሲያስተካክል ቆይቷል። እንደ ትንሽ የፍቅር ስራ የተጀመረው በደቡብ ኢትዮጵያ በብዛት ከሚፈለጉ ስቱዲዮዎች አንዱ ሆኗል።",
  },
  "about.p2": {
    en: "Our talented team of designers, florists, and event stylists bring together the rich cultural heritage of Ethiopia with contemporary international design trends. Every event we touch is infused with meticulous craftsmanship, premium materials, and an unwavering commitment to making your celebration truly extraordinary.",
    am: "ተሰጥኦ ያላቸው ዲዛይነሮች፣ የአበባ ባለሙያዎችና የዝግጅት ስታይሊስቶች ቡድናችን የኢትዮጵያን የበለፀገ ባህላዊ ውርስ ከዘመናዊ ዓለም አቀፍ ዲዛይን ጋር ያዋህዳል። የምንነካው እያንዳንዱ ዝግጅት በጥንቃቄ የተሰራ ነው።",
  },
  "about.p3": {
    en: "From intimate lakeside ceremonies on the shores of Lake Hawassa to grand ballroom galas, we believe every moment deserves to be adorned with beauty. Our philosophy is simple: your dream is our canvas, and we won't stop until every detail is perfect.",
    am: "በሐዋሳ ሐይቅ ዳርቻ ካሉ ትናንሽ ሥነ-ሥርዓቶች እስከ ታላላቅ የቦልሩም ዝግጅቶች፣ እያንዳንዱ ቅጽበት በውበት መዋብ ይገባዋል ብለን እናምናለን። ህልምዎ ሸራችን ነው።",
  },
  "about.tagline": { en: "Where Elegance Meets Tradition", am: "ውበት ከባህል የሚገናኝበት" },

  // Contact
  "contact.title": { en: "Get In Touch", am: "ያግኙን" },
  "contact.subtitle": {
    en: "Ready to create something beautiful? Reach out to us and let's start planning your dream event together.",
    am: "ውብ ነገር ለመፍጠር ዝግጁ ነዎት? ያግኙንና የሕልም ዝግጅትዎን አብረን እንጀምር።",
  },
  "contact.callUs": { en: "Call Us", am: "ይደውሉልን" },
  "contact.emailUs": { en: "Email Us", am: "ኢሜይል ይላኩልን" },
  "contact.visitUs": { en: "Visit Us", am: "ይጎብኙን" },
  "contact.address": { en: "Hawassa, SNNPR, Ethiopia\nNear Piazza, Main Road", am: "ሐዋሳ፣ ደቡብ ብሔሮች፣ ኢትዮጵያ\nከፒያሳ አጠገብ፣ ዋና መንገድ" },
  "contact.whatsapp": { en: "Chat on WhatsApp", am: "በዋትስአፕ ያውሩ" },
  "contact.follow": { en: "Follow us:", am: "ይከተሉን፦" },
  "contact.fullName": { en: "Full Name", am: "ሙሉ ስም" },
  "contact.fullNamePh": { en: "Enter your full name", am: "ሙሉ ስምዎን ያስገቡ" },
  "contact.email": { en: "Email Address", am: "ኢሜይል አድራሻ" },
  "contact.emailPh": { en: "Enter your email", am: "ኢሜይልዎን ያስገቡ" },
  "contact.message": { en: "Your Message", am: "መልዕክትዎ" },
  "contact.messagePh": { en: "Tell us about your event...", am: "ስለ ዝግጅትዎ ይንገሩን..." },
  "contact.send": { en: "Send Message", am: "መልዕክት ላክ" },
  "contact.thanks": { en: "✓ Thank you! We'll get back to you within 24 hours.", am: "✓ እናመሰግናለን! በ24 ሰዓት ውስጥ እንመልስልዎታለን።" },

  // Booking
  "nav.bookNow": { en: "Book Now", am: "አሁን ይያዙ" },
  "booking.title": { en: "Book Your Decoration", am: "ማስዋብዎን ይያዙ" },
  "booking.subtitle": {
    en: "Fill in your event details and we'll confirm availability on WhatsApp within hours.",
    am: "የዝግጅትዎን ዝርዝሮች ይሙሉ፣ በሰዓታት ውስጥ በዋትስአፕ እንመልስልዎታለን።",
  },
  "booking.service": { en: "Select a Service", am: "አገልግሎት ይምረጡ" },
  "booking.servicePh": { en: "Choose a service", am: "አገልግሎት ይምረጡ" },
  "booking.date": { en: "Preferred Event Date", am: "የሚፈለግ የዝግጅት ቀን" },
  "booking.datePh": { en: "Pick a date", am: "ቀን ይምረጡ" },
  "booking.guestCount": { en: "Estimated Guest Count", am: "የእንግዶች ብዛት (ግምት)" },
  "booking.guestCountPh": { en: "e.g. 150", am: "ለምሳሌ 150" },
  "booking.name": { en: "Full Name", am: "ሙሉ ስም" },
  "booking.namePh": { en: "Enter your full name", am: "ሙሉ ስምዎን ያስገቡ" },
  "booking.phone": { en: "Phone Number", am: "ስልክ ቁጥር" },
  "booking.phonePh": { en: "e.g. 0911234567", am: "ለምሳሌ 0911234567" },
  "booking.email": { en: "Email (optional)", am: "ኢሜይል (አማራጭ)" },
  "booking.emailPh": { en: "Enter your email", am: "ኢሜይልዎን ያስገቡ" },
  "booking.notes": { en: "Venue, Theme Colors, Budget Range & Other Details", am: "ቦታ፣ የቀለም ጭብጥ፣ የበጀት መጠንና ሌሎች ዝርዝሮች" },
  "booking.notesPh": { en: "Tell us anything that will help us prepare your quote...", am: "ግምት እንድናዘጋጅ የሚረዳንን ማንኛውንም ነገር ይንገሩን..." },
  "booking.submit": { en: "Send Booking Request via WhatsApp", am: "የቦታ ማስያዣ ጥያቄ በዋትስአፕ ላክ" },
  "booking.close": { en: "Cancel", am: "ይቅር" },
  "booking.errorRequired": { en: "This field is required", am: "ይህ መስክ ያስፈልጋል" },
  "booking.errorDate": { en: "Please select a date", am: "እባክዎ ቀን ይምረጡ" },
  "booking.errorPhone": { en: "Enter a valid phone number", am: "ትክክለኛ ስልክ ቁጥር ያስገቡ" },
  "booking.toastTitle": { en: "Booking request ready", am: "የማስያዣ ጥያቄ ተዘጋጅቷል" },
  "booking.toastDesc": { en: "Opening WhatsApp to send your request to Feven Decor.", am: "ጥያቄዎን ወደ ፌቨን ዴኮር ለመላክ ዋትስአፕ በመክፈት ላይ።" },
  "booking.bookThis": { en: "Book This Service", am: "ይህን አገልግሎት ይያዙ" },

  // Footer
  "footer.brand": {
    en: "Premium wedding & event decoration services based in Hawassa, Ethiopia. Transforming celebrations into unforgettable experiences since 2016.",
    am: "በሐዋሳ የሚገኝ ከፍተኛ የሰርግና የዝግጅት ማስዋብ አገልግሎት። ከ2016 ጀምሮ ዝግጅቶችን ወደ የማይረሱ ተሞክሮዎች እንለውጣለን።",
  },
  "footer.quickLinks": { en: "Quick Links", am: "ፈጣን አገናኞች" },
  "footer.contactInfo": { en: "Contact Info", am: "የግንኙነት መረጃ" },
  "footer.followUs": { en: "Follow Us", am: "ይከተሉን" },
  "footer.followDesc": { en: "Stay updated with our latest work, behind-the-scenes content, and special offers.", am: "የቅርብ ጊዜ ስራዎቻችንን ይከታተሉ።" },
  "footer.copyright": { en: "All rights reserved. Crafted with ❤️ in Hawassa, Ethiopia.", am: "መብቱ በህግ የተጠበቀ። በሐዋሳ፣ ኢትዮጵያ በ❤️ ተሰርቷል።" },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sl = localStorage.getItem("lang") as Lang | null;
    const st = localStorage.getItem("theme") as Theme | null;
    if (sl) setLangState(sl);
    if (st) setTheme(st);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  const t = (key: string) => dict[key]?.[lang] ?? key;

  return (
    <AppCtx.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppCtx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
