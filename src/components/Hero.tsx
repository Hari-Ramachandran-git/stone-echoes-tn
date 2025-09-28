import { Button } from "@/components/ui/button";
import { Crown, Camera, BookOpen, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-temple-sunrise.jpg";
import natarajaImage from "@/assets/nataraja-silhouette.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kolam">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </div>

      {/* Floating Cultural Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <img src={natarajaImage} alt="Nataraja" className="w-24 h-24" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
          <Crown className="w-8 h-8 text-gold" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="font-heritage text-5xl md:text-7xl font-bold mb-6 animate-gopuram">
            <span className="bg-gradient-sunrise bg-clip-text text-transparent drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Echoes of Eternity
            </span>
            <br />
            <span className="text-primary text-4xl md:text-5xl drop-shadow-md">
              Tamil Nadu's History & Monuments
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-culture text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the stories carved in stone, the dynasties that shaped South India, 
            and the living heritage of Tamil Nadu.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-temple hover:shadow-glow transition-all duration-300 font-culture font-semibold px-8 py-6 text-lg"
            >
              <Crown className="w-5 h-5 mr-2" />
              Explore Dynasties
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-culture font-semibold px-8 py-6 text-lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Visit Monuments
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-coral/10 text-coral border-coral hover:bg-coral hover:text-white transition-all duration-300 font-culture font-semibold px-8 py-6 text-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Take Heritage Quiz
            </Button>
          </div>

          {/* Animated Timeline Indicator */}
          <div className="relative">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full animate-shimmer" 
                 style={{ backgroundSize: '200% 100%' }} />
            <div className="flex justify-center mt-4">
              <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-center">
          <p className="font-culture text-sm text-muted-foreground mb-2">Discover the Timeline</p>
          <ChevronDown className="w-5 h-5 text-accent mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;