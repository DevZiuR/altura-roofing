import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Send } from "lucide-react";
import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";
import gallery5 from "../assets/gallery-5.jpeg";
import gallery6 from "../assets/gallery-6.jpeg";

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  const projects = [
    {
      src: gallery1,
      title: "Recent Roof Replacement",
      description: "Complete roof replacement ensuring long-term protection.",
      type: "image"
    },
    {
      src: gallery2,
      title: "Storm Damage Repair",
      description: "Restored roof after severe storm damage.",
      type: "image"
    },
    {
      src: gallery3,
      title: "New Roof Installation",
      description: "High quality materials for a stunning new look.",
      type: "image"
    },
    {
      src: gallery4,
      title: "Insurance Claim Project",
      description: "Seamless insurance claim process and execution.",
      type: "image"
    },
    {
      src: gallery5,
      title: "Detailed Inspection",
      description: "Thorough inspection ensuring no issue goes unnoticed.",
      type: "image"
    },
    {
      src: gallery6,
      title: "Quality Craftsmanship",
      description: "Expert installation by our dedicated team.",
      type: "image"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Circles from reference */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 border border-secondary/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-black leading-tight tracking-tight">
            TRANSFORMING <br />
            <span className="italic font-playfair font-medium text-black">YOUR HOME</span>
          </h2>
        </div>

        {/* Slider Section */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="group relative h-[450px] sm:h-[550px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl">
                  {/* Media Content */}
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold font-montserrat text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-inter text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {project.description}
                    </p>
                  </div>

                  {/* Icon Badge - Matches reference */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Send className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-primary transition-colors border-b-2 border-black hover:border-primary pb-1 group">
            View More Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;