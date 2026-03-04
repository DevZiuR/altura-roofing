import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "What should I look for when hiring a roofing contractor?",
            answer: "Look for licensed, insured, and experienced professionals who offer clear communication and transparent pricing. Altura Roofing combines industry expertise with top-notch customer care to guarantee a job well done on your home or commercial building."
        },
        {
            question: "What areas do you serve?",
            answer: "We proudly serve the entire DFW Metroplex, including Allen, Arlington, Dallas, Fort Worth, Frisco, McKinney, Plano, and surrounding neighborhoods."
        },
        {
            question: "Do you help with insurance claims for storm damage?",
            answer: "Yes! Dealing with an insurance claim can be overwhelming. We have extensive experience assisting homeowners with the paperwork and documentation needed to make sure your damages are properly covered."
        },
        {
            question: "How do I know if I need a full roof replacement or just a repair?",
            answer: "The best way is to let us perform a thorough, no-obligation inspection. We evaluate the age of the roof, the extent of the damage (such as missing shingles or a leak), and present you with honest, clear options."
        },
        {
            question: "Do you offer a warranty on your roofing work?",
            answer: "Absolutely. All of our work comes with a warranty. We stand by our craftsmanship and use premium roofing materials so you feel completely secure that your investment is protected."
        },
        {
            question: "Do you provide emergency roofing services?",
            answer: "Yes, we are available 24/7 for emergency service. If your roof suffers sudden storm damage or a serious leak, call us and we will promptly dispatch a professional to assess the situation."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Heading & Intro */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded-full">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase font-inter">FAQ</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-[#161616] leading-tight">
                            Frequently Asked <br />Questions
                        </h2>

                        <div className="pt-8">
                            <h4 className="text-lg font-bold font-montserrat text-gray-900 mb-2">Have different questions?</h4>
                            <p className="text-gray-600 font-inter mb-4">
                                If you can't find the answer you're looking for, please don't hesitate to reach out to our team.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-primary font-bold font-montserrat hover:underline text-lg"
                            >
                                <MessageCircleQuestion className="w-5 h-5" />
                                Contact Support
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0 px-2">
                                    <AccordionTrigger className="text-lg sm:text-xl font-bold font-montserrat text-gray-900 hover:text-primary transition-colors text-left py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 font-inter text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
