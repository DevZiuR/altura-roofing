import { ArrowUp, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/logo-new.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: Logo and Go Top */}
        <div className="flex justify-center md:justify-start items-center mb-16">
          <div className="max-w-[280px]">
            <img src="https://i.imgur.com/5wZAar4.jpeg" alt="Altura Roofing" className="h-24 md:h-28 w-auto object-contain" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Address & License */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Address</h4>
              <div className="space-y-1 text-gray-400 font-inter">
                <p>327 South Jupiter Road</p>
                <p>Allen, TX, USA</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Service Area</h4>
              <div className="space-y-1 text-gray-400 font-inter text-sm">
                <p>DFW & Surrounding Areas</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact, Office Hours, Social */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Contact</h4>
              <div className="space-y-1 text-gray-400 font-inter">
                <p>Phone: (469) 785-3148</p>
                <p>Local: (469) 226-4198</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Office Hours</h4>
              <div className="space-y-1 font-inter">
                <p className="text-gray-400"><span className="text-secondary font-bold">24/7</span> Emergency Service</p>
                <p className="text-gray-500 text-sm">(Call for any emergency)</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Social Media</h4>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-inter">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Service Area", id: "locations" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Our Services</h4>
              <ul className="space-y-3 font-inter text-gray-400">
                <li>Roof Replacement</li>
                <li>Roof Repair</li>
                <li>Storm Damage</li>
                <li>Insurance Claims</li>
                <li>Free Inspections</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 text-xl font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white">Google Guaranteed</p>
                <div className="flex text-yellow-500 text-xs">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-inter">
          <p>©{new Date().getFullYear()} Altura Roofing. All Rights Reserved.</p>
          <p className="uppercase tracking-widest text-[10px] font-bold">DFW Roofing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;