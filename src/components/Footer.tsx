import { Crown, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-temple text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heritage text-xl font-bold">Tamil Heritage</h3>
                <p className="text-sm opacity-80">Echoes of Eternity</p>
              </div>
            </div>
            <p className="font-culture text-sm opacity-90 leading-relaxed max-w-md">
              Preserving and celebrating the magnificent history, culture, and architectural 
              heritage of Tamil Nadu for future generations to discover and cherish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heritage text-lg font-semibold mb-4">Explore</h4>
            <ul className="font-culture space-y-2 text-sm">
              <li><a href="#dynasties" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">Dynasties</a></li>
              <li><a href="#monuments" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">Monuments</a></li>
              <li><a href="#heritage" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">Heritage</a></li>
              <li><a href="#quiz" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">Heritage Quiz</a></li>
            </ul>
          </div>

          {/* Heritage Sites */}
          <div>
            <h4 className="font-heritage text-lg font-semibold mb-4">Heritage Sites</h4>
            <ul className="font-culture space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-3 h-3" />
                Brihadeeswarar Temple
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-3 h-3" />
                Meenakshi Temple
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-3 h-3" />
                Shore Temple
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Clock className="w-3 h-3" />
                1000+ Years of History
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-culture text-sm opacity-80">
              © 2024 Tamil Heritage. Preserving history for the future.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span className="font-culture text-sm">heritage@tamilnadu.gov.in</span>
              </div>
              <p className="font-culture text-sm opacity-60">
                Built with love for Tamil culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;