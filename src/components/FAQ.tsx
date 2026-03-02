import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "Do you service all BMW models?",
        answer: "Yes, we specialize in all BMW models, from classic E-chassis to the modern F and G-series. Whether you have a 3-Series, X5, or an M-car, we have the tools and expertise to service it."
    },
    {
        id: 2,
        question: "What is your service area?",
        answer: "We are a mobile service covering Miami, Broward, and Palm Beach counties. We come directly to your home or office for your convenience."
    },
    {
        id: 3,
        question: "How does mobile service work?",
        answer: "It's simple! You schedule an appointment, and we arrive fully equipped to diagnose and repair your vehicle on-site. For most repairs, including brakes, extensive diagnostics, and coding, we can do it right in your driveway."
    },
    {
        id: 4,
        question: "Are you factory certified?",
        answer: "Yes, Daniel is a BMW Factory-Trained Technician with years of dealership experience. You get the same level of expertise as the dealer, but with more personal attention and better pricing."
    },
    {
        id: 5,
        question: "Do you offer warranties?",
        answer: "Absolutely. We stand behind our work. All repairs come with a warranty on parts and labor. We use OEM or high-quality equivalent parts to ensure reliability."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(1); // First FAQ open by default

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat text-black mb-4 uppercase px-2">
                        COMMON <span className="italic font-medium font-playfair text-black">QUESTIONS</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter px-4">
                        Everything you need to know about our mobile BMW services
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                                    aria-expanded={openId === faq.id}
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black pr-4 sm:pr-8">
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${openId === faq.id ? "rotate-180 bg-primary" : ""
                                            }`}
                                    >
                                        {openId === faq.id ? (
                                            <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        ) : (
                                            <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                                        <div className="border-t border-gray-100 pt-4">
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional CTA */}
                <div className="text-center mt-8 sm:mt-12 px-4">
                    <p className="text-sm sm:text-base text-gray-600 mb-4">Still have questions?</p>
                    <button
                        onClick={() => {
                            const contactSection = document.querySelector("#contact");
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="text-sm sm:text-base text-primary hover:text-primary/80 font-semibold transition-colors duration-200 underline underline-offset-4"
                    >
                        Contact us for more information
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
