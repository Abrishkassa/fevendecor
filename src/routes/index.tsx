import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TikTokSection from "@/components/TikTokSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Feven Decor | Premium Wedding & Event Decoration in Hawassa" },
      { name: "description", content: "Feven Decor transforms your celebrations into breathtaking visual masterpieces. Premium wedding and event decoration services in Hawassa, Ethiopia." },
      { property: "og:title", content: "Feven Decor | Premium Wedding & Event Decoration" },
      { property: "og:description", content: "Luxury wedding and event decoration services in Hawassa, Ethiopia. Where dreams come alive." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <TikTokSection />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
