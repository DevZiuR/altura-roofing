import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from "react";

// Real customer reviews
const reviews = [
  {
    id: 1,
    name: "Karl Osterbrink",
    rating: 5,
    text: "Had a leak in my front yard on my water main. Davis Brother Plumbing came out same day and fixed the leak fast and efficiently. Very professional and i felt as customer very well taken care of. I will definitely be using them again for any of my plumbing needs.",
    highlight: "fixed the leak fast and efficiently"
  },
  {
    id: 2,
    name: "Jacob Lee",
    rating: 5,
    text: "Excellent service. My water heater went out and they got to me fast. Install was clean, professional, and the plumber went above and beyond to make sure everything was perfect. Definitely earned a repeat customer.",
    highlight: "went above and beyond"
  },
  {
    id: 3,
    name: "Robert Meyer",
    rating: 5,
    text: "The Davis Brothers are great. I had some serious issues with my shower head and drainage. They talked me through all the options and communicated clearly and effectively. Very reasonable price and high quality outcome. I will be calling Zane and Zack for all my future plumbing needs!",
    highlight: "very reasonable price"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    rating: 5,
    text: "Davis Brothers came out to fix a major leak in our main line. They were incredibly fast, professional, and saved us from a huge mess. Their prices were better than anyone else we called. Total life savers!",
    highlight: "Total life savers"
  }
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-black font-montserrat text-black mb-4 uppercase">
            HEAR FROM OUR <span className="italic font-medium font-playfair text-black">CUSTOMERS</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {reviews.map((review) => (
                <div key={review.id} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-inter text-gray-700 italic mb-8 leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-lg font-bold font-montserrat text-black uppercase tracking-wider">{review.name}</h4>
                      <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1">Verified Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;