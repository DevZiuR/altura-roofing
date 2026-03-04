import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Instagram, Facebook, Twitter } from "lucide-react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    { name: "Home", id: "home" },
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
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 bg-black ${scrolled ? "shadow-lg" : ""
          }`}
      >
        <div className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "mt-2 mb-2" : "mt-4 sm:mt-6 mb-6"}`}>
          <div className="max-w-[1400px] mx-auto border border-white/20 bg-white/5 backdrop-blur-sm rounded-none md:rounded-sm flex items-stretch min-h-[70px]">

            {/* Logo Section */}
            <div className="flex items-center px-6 border-r border-white/20 cursor-pointer" onClick={() => scrollToSection("home")}>
              <img
                src="https://i.imgur.com/5wZAar4.jpeg"
                alt="Altura Roofing"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-end items-center px-8 border-r border-white/20">
              <nav className="flex items-center gap-8">
                {navLinks.filter(l => l.name !== "Home").map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="relative group h-full flex items-center">
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="text-white hover:text-primary font-bold font-montserrat text-sm tracking-wider uppercase transition-colors flex items-center gap-1 py-4"
                        >
                          {link.name}
                          <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute top-[calc(100%+10px)] -left-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                          <div className="bg-black border border-white/10 shadow-xl overflow-hidden min-w-[240px]">
                            {serviceItems.map((item) => (
                              <button
                                key={item}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  scrollToSection("services");
                                }}
                                className="w-full text-left px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-primary text-sm font-bold transition-colors border-b border-white/5 last:border-0 font-montserrat"
                              >
                                {item}
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
                      className="text-white hover:text-primary font-bold font-montserrat text-sm tracking-wider uppercase transition-colors py-4"
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Contact Button Section */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="h-full px-10 bg-primary hover:bg-primary/90 border-l border-white/20 text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center whitespace-nowrap font-montserrat"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-1 flex justify-end items-center px-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full">

          {/* Top bar: Logo + Close */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center cursor-pointer" onClick={() => { setIsOpen(false); scrollToSection("home"); }}>
              <img
                src="https://i.imgur.com/5wZAar4.jpeg"
                alt="Altura Roofing"
                className="h-10 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold font-montserrat text-sm tracking-widest uppercase flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <span className="text-xs">{`{`}</span>CLOSE<span className="text-xs">{`}`}</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 pt-6 font-montserrat">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transform transition-all duration-500 ease-out ${isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                    }`}
                  style={{ transitionDelay: isOpen ? `${(index + 1) * 80}ms` : "0ms" }}
                >
                  {link.hasDropdown ? (
                    <div className="border-b border-white/10">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-left py-5 text-[15px] font-bold text-white uppercase tracking-[0.15em]"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-400 ease-out ${servicesOpen ? "max-h-[300px] opacity-100 pb-4" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="flex flex-col gap-1 pl-4 border-l border-white/10">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={() => scrollToSection("services")}
                              className="text-white/60 hover:text-primary text-sm font-bold text-left py-2 transition-colors tracking-wide"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left py-5 text-[15px] font-bold text-white uppercase tracking-[0.15em] border-b border-white/10 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div
              className={`mt-8 transform transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: isOpen ? `${(navLinks.length + 1) * 80}ms` : "0ms" }}
            >
              <button
                onClick={handleCall}
                className="w-full bg-primary text-white py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (469) 785-3148
              </button>
            </div>
          </div>

          {/* Bottom Section: Branding + Social + Image */}
          <div
            className={`px-6 pb-4 transform transition-all duration-600 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          >
            {/* Brand + Social Row */}
            <div className="flex items-center justify-between mb-4 pt-4 border-t border-white/10">
              <span className="text-white/80 text-xs font-montserrat tracking-wider">
                <span className="text-primary font-bold uppercase">Altura</span>{" "}
                <span className="font-medium text-white italic">Roofing.</span>
              </span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-36 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80"
                alt="Altura Roofing Featured Work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;