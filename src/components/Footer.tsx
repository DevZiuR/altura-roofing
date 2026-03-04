import { ArrowUpRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

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

  return (
    <footer id="footer" className="bg-black text-white pt-24 pb-28 md:pb-8 border-t border-gray-900 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-16 border-b border-gray-800">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">
              Looking for expert roofing services?
            </h2>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#E8EFE9] text-black px-6 py-3 font-medium text-sm hover:bg-white transition-colors flex items-center gap-2 uppercase tracking-wide"
            >
              Get a Quote <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://static.thenounproject.com/png/94708-200.png"
              alt="Buildings"
              className="w-40 h-40 opacity-30 invert"
            />
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Column 1: Logo & Description */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <img src="https://i.imgur.com/5wZAar4.jpeg" alt="Altura Roofing" className="h-16 w-auto object-contain" />
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs pt-2">
                Expert Roofing Services for Residential and Commercial Projects.
              </p>
            </div>
            <div className="flex gap-4 pt-12">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-10">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Contact Info</h4>
              <p className="text-lg md:text-xl font-medium max-w-xs leading-snug">
                327 South Jupiter Road,<br />Allen, TX, USA
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Looking for expedited assistance?</h4>
              <p className="text-lg md:text-xl font-medium mb-2">info@altura-roofing.com</p>
              <p className="text-lg md:text-xl font-medium">(469) 785-3148</p>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Pages</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Services", id: "services" },
                { name: "Contact us", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Terms & Conditions</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-inter">
          <p>© {new Date().getFullYear()} Altura Roofing. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Powered by ZiuR studio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;