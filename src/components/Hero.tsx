import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "../assets/hero-1.jpeg";
import hero2 from "../assets/hero-2.jpeg";
import hero3 from "../assets/hero-3.jpeg";
import hero4 from "../assets/hero-4.jpeg";

import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:4697853148";
  };

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-44 md:pt-32 pb-16 min-h-screen bg-white text-foreground overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center pointer-events-none "
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-16 items-start">

          {/* Left Column - Typography */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-primary font-bold tracking-wide text-sm font-inter uppercase mb-2">
              Expert Roofing Services for Your Home
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-bold font-montserrat leading-[1.1] text-black uppercase">
              RELIABLE DFW ROOFING <br />
              <span className="italic font-playfair font-medium whitespace-nowrap">SOLUTIONS —</span> <br />
              FOR <span className="italic font-playfair font-medium">DURABILITY</span> & STYLE.
            </h1>
          </div>

          {/* Right Column - Description & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4 lg:pt-12">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-inter max-w-lg">
              Altura Roofing is <span className="font-bold"> committed</span> to clear communication, outstanding customer care, and <span className="font-bold">expert roofing solutions</span>, offering both insurance claim expertise and <span className="font-bold">simple, no-pressure cash options</span>.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md font-bold text-lg shadow-lg shadow-primary/20"
              >
                (469) 785-3148
              </Button>

              <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-md bg-gray-50/50">
                <div className="flex bg-white p-1 rounded-full shadow-sm">
                  <span className="font-bold text-lg px-2 text-black">G</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-600">5.0 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Single Horizontal Image */}
        <div className="w-full h-[400px] md:h-[500px]">
          <div className="relative rounded-2xl overflow-hidden group h-full">
            <img
              src="https://i.imgur.com/WbfsJQq.png"
              alt="Altura Roofing"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-secondary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Expert Roofing Services</span>
                <h3 className="text-2xl font-bold font-montserrat">Altura Roofing | DFW</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;