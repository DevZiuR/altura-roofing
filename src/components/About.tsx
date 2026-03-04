import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";
import aboutImg from "../assets/about-new.jpg";

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black/95 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4">
              WELCOME TO ALTURA ROOFING | DFW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-white mb-8 sm:mb-10 uppercase">
              ELEVATING THE STANDARD OF <br /><span className="italic font-medium font-playfair text-white">ROOFING EXCELLENCE</span>
            </h2>

            {/* Mobile Image - Below Heading */}
            <div className="lg:hidden relative rounded-xl overflow-hidden shadow-2xl w-[92%] mx-auto mt-6 mb-10 h-[260px] sm:h-[350px]">
              <img
                src={aboutImg}
                alt="Altura Roofing"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-lg">Clear Communication. Outstanding Care.</p>
                  <p className="text-gray-300 text-xs">Serving the entire DFW and more.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg mb-10 sm:mb-12 text-gray-300 flex flex-col gap-4">
              <p className="mb-4">
                <strong>Altura Roofing</strong> is committed to clear communication, outstanding customer care, and expert roofing solutions, offering both insurance claim expertise and simple, no-pressure cash options.
              </p>
              <p className="mb-4">
                We serve the entire <strong>DFW</strong> and more. Just a call away and your roof will be taken care of at the highest level.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold font-montserrat uppercase tracking-wide rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
                onClick={scrollToContact}
              >
                WORK WITH US
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img
              src={aboutImg}
              alt="Altura Roofing"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-bold text-xl">Clear Communication. Outstanding Care.</p>
                <p className="text-gray-300 text-sm">Serving the entire DFW and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;