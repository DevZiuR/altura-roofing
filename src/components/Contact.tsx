import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const serviceOptions = [
    "Roof Replacement",
    "Roof Repair",
    "Storm Damage",
    "Insurance Claim",
    "Emergency Repair",
    "Inspection",
    "Other"
  ];

  const dfwAreas = [
    "Allen", "Arlington", "Bedford", "Carrollton", "Dallas", "Denton",
    "Fort Worth", "Frisco", "Garland", "Irving", "McKinney", "Plano",
    "Richardson", "Other DFW Area"
  ];

  const propertyTypes = [
    "Residential - Single Family",
    "Residential - Multi-Family",
    "Commercial",
    "Industrial"
  ];

  const urgencyLevels = [
    "Emergency (24-48 hours)",
    "Urgent (This week)",
    "Normal (1-2 weeks)",
    "Planning ahead"
  ];

  // Reveal-on-scroll animation for contact section items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-slide-up");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="pb-20 lg:pb-32 pt-10 lg:pt-16 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in text-white">
          <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 uppercase px-2">
            SCHEDULE YOUR <span className="italic font-medium font-playfair text-white">SERVICE</span> TODAY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-inter px-4">
            Residential & Commercial Roofing Services in DFW.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Booking Form */}
          <div className="bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-10 animate-slide-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Request Service / Quote</h3>
              <p className="text-gray-400 text-sm mt-1">Fill out the details below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="Your Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Area/City */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Area <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-[#1A1A1A] border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-[#1A1A1A]">Select your area</option>
                  {dfwAreas.map((area) => (
                    <option key={area} value={area} className="bg-[#1A1A1A]">{area}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Property Type <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-[#1A1A1A] border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-[#1A1A1A]">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#1A1A1A]">{type}</option>
                  ))}
                </select>
              </div>

              {/* Service Needed */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Service Needed <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-[#1A1A1A] border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-[#1A1A1A]">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service} className="bg-[#1A1A1A]">{service}</option>
                  ))}
                </select>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Urgency <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-[#1A1A1A] border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-[#1A1A1A]">How urgent is this?</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level} className="bg-[#1A1A1A]">{level}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Project Details <span className="text-primary">*</span>
                </label>
                <Textarea
                  placeholder="Please describe your roofing needs, any visible damage, and when you'd like the work done..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base min-h-[120px]"
                  required
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="phone" className="w-4 h-4 text-primary accent-primary" defaultChecked />
                    <span className="text-sm text-gray-300">Phone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="email" className="w-4 h-4 text-primary accent-primary" />
                    <span className="text-sm text-gray-300">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="text" className="w-4 h-4 text-primary accent-primary" />
                    <span className="text-sm text-gray-300">Text</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-5 rounded-md font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
              >
                GET FREE QUOTE →
              </Button>
              <p className="text-center text-xs text-gray-400 mt-2">
                We typically respond within 2 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;