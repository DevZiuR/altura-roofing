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

  return null;
};

export default Reviews;