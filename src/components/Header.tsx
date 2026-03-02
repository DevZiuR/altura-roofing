import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:4697853148";
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", id: "services", hasDropdown: true },
    { name: "About", id: "about" },
    { name: "Areas Served", id: "locations" },
    { name: "Contact", id: "contact" },
  ];

  const serviceItems = [
    "Roof Replacement",
    "Roof Repairs",
    "Storm Damage",
    "Insurance Claims",
    "Free Inspections"
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-black shadow-sm ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="https://i.imgur.com/5wZAar4.jpeg"
              alt="Altura Roofing"
              className="h-20 sm:h-16 w-auto object-contain transition-all duration-300 "
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white hover:text-primary font-bold font-playfair text-base tracking-wide transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-4 pt-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-xl shadow-xl overflow-hidden min-w-[280px] p-2 border border-gray-100">
                        {serviceItems.map((item) => (
                          <button
                            key={item}
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection("services");
                            }}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg text-sm font-semibold transition-colors flex items-center justify-between group/item"
                          >
                            {item}
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-primary" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-primary font-bold font-playfair text-base tracking-wide transition-colors"
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center rounded-md overflow-hidden shadow-sm">
            <button
              onClick={handleCall}
              className="bg-primary text-white px-5 py-3 flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">(469) 785-3148</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
            >
              get a free quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] sm:top-[70px] bg-black z-40 lg:hidden animate-fade-in border-t border-gray-800">
          <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
            <div className="space-y-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="border-b border-gray-800 pb-4">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-left text-xl font-bold text-white mb-2"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      {servicesOpen && (
                        <div className="flex flex-col gap-3 pl-4 mt-2 animate-slide-down">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={() => scrollToSection("services")}
                              className="text-gray-300 hover:text-primary text-base font-medium text-left flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-xl font-bold text-white border-b border-gray-800 pb-4"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <Button
                className="w-full bg-primary text-white py-4 text-base font-medium"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" /> (469) 785-3148
              </Button>
              <Button
                className="w-full bg-secondary text-black py-4 text-base font-medium"
                onClick={() => scrollToSection("contact")}
              >
                <Calendar className="mr-2 h-5 w-5" /> GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;