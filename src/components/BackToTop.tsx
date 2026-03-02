import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group hidden lg:block"
                    aria-label="Back to top"
                >
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300 animate-pulse" />

                    {/* Main button */}
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black from-primary to-primary/80 text-white shadow-lg shadow-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/60 group-active:scale-95">
                        <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-black/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap backdrop-blur-sm">
                            Back to top
                            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                        </div>
                    </div>
                </button>
            )}
        </>
    );
};

export default BackToTop;
