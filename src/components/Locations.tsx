import { ChevronRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const neighborhoodList = [
    "Allen", "Arlington", "Bedford", "Burleson", "Carrollton",
    "Cedar Hill", "Coppell", "Dallas", "Denton", "DeSoto",
    "Duncanville", "Euless", "Farmers Branch", "Flower Mound", "Fort Worth",
    "Frisco", "Garland", "Grapevine", "Haltom City", "Hurst",
    "Irving", "Keller", "Lancaster", "Lewisville", "Mansfield",
    "McKinney", "Mesquite", "North Richland Hills", "Plano", "Richardson",
    "Rockwall", "Rowlett", "Southlake", "The Colony", "Wylie"
];

const zipCodes = [
    "75002", "75013", "75023", "75024", "75025", "75034", "75035", "75040",
    "75041", "75042", "75043", "75044", "75048", "75050", "75051", "75052",
    "75056", "75057", "75060", "75061", "75062", "75063", "75067", "75068",
    "75069", "75070", "75071", "75074", "75075", "75077", "75080", "75081",
    "75082", "75088", "75089", "75093", "75094", "75098", "75104", "75115"
];

const Locations = () => {
    return (
        <section id="locations" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Map Overlay (Desktop Only) */}
                    <RevealOnScroll animation="fade-in" className="hidden lg:block lg:sticky lg:top-32">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <img
                                src="/images/dfw-map.png"
                                alt="DFW Service Area Map"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Static Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-sm flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-xs font-bold uppercase tracking-wider text-black">Service Area Active</span>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Right Side: Content */}
                    <div className="flex flex-col">
                        <RevealOnScroll animation="slide-up">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat leading-tight text-black mb-10 tracking-tight text-center md:text-left uppercase">
                                DFW'S <span className="italic font-playfair font-medium">NEIGHBORHOODS</span> <br />
                                WE PROUDLY <span className="italic font-playfair font-medium">SERVE</span>
                            </h2>
                        </RevealOnScroll>

                        {/* Mobile Map Outline */}
                        <RevealOnScroll animation="fade-in" className="lg:hidden mb-10">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                                <img
                                    src="/images/dfw-map.png"
                                    alt="DFW Service Area Map"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-sm flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-black">Service Area Active</span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Neighborhood List Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-3 mb-12">
                            {neighborhoodList.sort().map((neighborhood, index) => (
                                <RevealOnScroll key={neighborhood} animation="slide-up" delay={index * 30}>
                                    <div
                                        className="flex items-center gap-2 py-1.5 border-b border-gray-50 group transition-all duration-300 hover:border-primary/20"
                                    >
                                        <ChevronRight className="w-3 h-3 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-sm md:text-base font-bold font-montserrat text-gray-700 transition-colors duration-300 group-hover:text-primary whitespace-nowrap">
                                            {neighborhood}
                                        </span>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        {/* Zip Codes Block */}
                        <RevealOnScroll animation="fade-in" delay={300}>
                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                                {zipCodes.map((zip, index) => (
                                    <span
                                        key={zip}
                                        className="text-gray-400 text-sm md:text-base font-inter"
                                    >
                                        {zip}{index < zipCodes.length - 1 ? "," : ""}
                                    </span>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
