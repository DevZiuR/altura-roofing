import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import EmergencyCall from "@/components/EmergencyCall";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <RevealOnScroll animation="fade-in">
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll animation="slide-up">
          <Services />
        </RevealOnScroll>
        <RevealOnScroll animation="slide-up">
          <About />
        </RevealOnScroll>
        <RevealOnScroll animation="slide-up">
          <Gallery />
        </RevealOnScroll>
        <RevealOnScroll animation="slide-up">
          <Locations />
        </RevealOnScroll>
        <RevealOnScroll animation="slide-up">
          <EmergencyCall />
        </RevealOnScroll>
        <Reviews />
        <RevealOnScroll animation="slide-up">
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
