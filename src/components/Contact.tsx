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
    <section id="contact" className="pb-20 lg:pb-32 pt-10 lg:pt-16 bg-slate-50 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-montserrat text-black mb-4 uppercase px-2">
            SCHEDULE YOUR <span className="italic font-medium font-playfair text-black">SERVICE</span> TODAY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter px-4">
            Residential & Commercial Roofing Services in DFW.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left Column: Contact Info */}
          <div className="space-y-8 animate-slide-up opacity-0 translate-y-12 transition-all duration-700">

            <div className="bg-white rounded-xl shadow-elegant border border-gray-100 p-6 sm:p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-6">Contact Us 👋</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone 📞</h4>
                  <p className="text-gray-600">(469) 785-3148</p>
                  <p className="text-gray-600">(469) 226-4198</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email ✉️</h4>
                  <p className="text-gray-600">contact@alturaroofing.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location 📍</h4>
                  <p className="text-gray-600">327 South Jupiter Road, Allen, TX</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service Area 🗺️</h4>
                  <p className="text-gray-600">DFW & Surrounding Areas</p>
                </div>
              </div>

              <Button
                onClick={() => window.location.href = 'tel:4697853148'}
                className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6 font-bold uppercase tracking-wider shadow-lg shadow-secondary/25"
              >
                CALL NOW
              </Button>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-elegant border border-gray-100 p-6 sm:p-10 animate-slide-up opacity-0 translate-y-12 transition-all duration-700 delay-200">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request Service / Quote</h3>
              <p className="text-gray-500 text-sm mt-1">Fill out the details below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-50 border-gray-300 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-slate-50 border-gray-300 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Area/City */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Your Area <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-slate-50 border border-gray-300 text-black rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="">Select your area</option>
                  {dfwAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Property Type <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-slate-50 border border-gray-300 text-black rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Service Needed */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Service Needed <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-slate-50 border border-gray-300 text-black rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Urgency <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full p-3 bg-slate-50 border border-gray-300 text-black rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="">How urgent is this?</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Project Details <span className="text-primary">*</span>
                </label>
                <Textarea
                  placeholder="Please describe your roofing needs, any visible damage, and when you'd like the work done..."
                  className="bg-slate-50 border-gray-300 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 text-sm sm:text-base min-h-[120px]"
                  required
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="phone" className="w-4 h-4 text-primary" defaultChecked />
                    <span className="text-sm text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="email" className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="text" className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-700">Text</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-5 rounded-md font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
              >
                GET FREE QUOTE →
              </Button>
              <p className="text-center text-xs text-gray-500 mt-2">
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